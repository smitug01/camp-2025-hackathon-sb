import Q5 from "q5";

document.addEventListener(
  "astro:page-load",
  () => {
    let q = new Q5();

    q.setup = () => {
      q.createCanvas();

      q.speedMod = 1;
      q.draggedLava = null;
      q.dragOffsetX = 0;
      q.dragOffsetY = 0;

      q.canvas.oncontextmenu = (e) => {
        e.preventDefault();
      };

      class Lava {
        constructor(x, y, r) {
          this.x = x;
          this.y = y;
          this.r = r;
          this.d = r * 2;
          this.maxSize = this.d * 2;
          this.xSpeed = q.random(-0.5, 0.5);
          this.ySpeed = q.random(-0.5, -2);
          this.res = r < 25 ? 5 : 8;
          this.resF = this.res + 2;
          this.offsets = Array.from({ length: this.res }, () =>
            q.random(-5, 5),
          );
          this.noiseOffsets = Array.from({ length: this.res }, () =>
            q.random(1000),
          );
          this.layer = q.round(q.random(1, 4));
        }

        move() {
          if (!this.dragging) {
            this.x += this.xSpeed;
            this.y += this.ySpeed * q.speedMod;
            if (this.y < -this.maxSize) {
              this.x = q.random(q.width);
              this.y = q.height + this.d;
            }
          }

          for (let i = 0; i < this.offsets.length; i++) {
            this.offsets[i] = q.map(
              q.noise(this.noiseOffsets[i]),
              0,
              1,
              0,
              this.d,
            );
            this.noiseOffsets[i] += this.hovered ? 0.025 : 0.005;
          }
        }

        show() {
          q.push();
          q.fill(132, 204, 232, 25 * this.layer);
          q.stroke(266, 235, 255, 25 * this.layer);

          if (this.hovered) q.strokeWeight(2);
          else q.strokeWeight(1);

          q.translate(this.x, this.y);

          q.beginShape();
          for (let i = 0; i <= this.resF; i++) {
            let rad = (i * q.TAU) / this.res;
            let r = this.r + this.offsets[i % this.offsets.length];
            q.curveVertex(r * q.cos(rad), r * q.sin(rad));
          }
          q.endShape();

          if (q.mouseX || q.mouseY) {
            this.hovered = q.inFill(q.mouseX, q.mouseY);

            if (this.hovered && q.mouseIsPressed) {
              if (!q.draggedLava) {
                this.dragging = true;
                q.draggedLava = this;
                q.dragOffsetX = this.x - q.mouseX;
                q.dragOffsetY = this.y - q.mouseY;
                q.cursor("grabbing");
              }
            } else if (this.hovered) {
              q.cursor("grab");
            }
          } else this.hovered = false;

          q.pop();
        }
      }

      q.darkMode = false;
      q.lavas = [];
      q.looping = true;
      let amount = q.floor(q.width / 40);
      for (let i = 0; i < amount; i++) {
        let l = new Lava(
          q.random(q.width),
          q.random(q.height),
          q.random(10, 100),
        );
        q.lavas.push(l);
      }
    };
    q.draw = () => {
      q.background(q.color("#028fdb"));

      for (let l of q.lavas) {
        l.move();
        l.show();
      }
    };

    q.mouseDragged = () => {
      if (q.draggedLava) {
        q.draggedLava.x = q.mouseX + q.dragOffsetX;
        q.draggedLava.y = q.mouseY + q.dragOffsetY;
        return false;
      }
    };

    q.mouseReleased = () => {
      if (q.draggedLava) {
        q.draggedLava.dragging = false;
        q.draggedLava = null;
      }
      q.mouseX = q.mouseY = 0;
    };

    q.mouseWheel = () => {
      return true;
    };

    q.windowResized = () => {
      q.resizeCanvas();
    };
  },
  { once: true },
);
