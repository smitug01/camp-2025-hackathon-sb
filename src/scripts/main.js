import "https://font.emtech.cc/emfont.js";

document.addEventListener(
  "astro:page-load",
  () => {
    emfont.init({
      forceMin: true,
    });
  },
  { once: true },
);

const ad = () =>
  console.log(
    "%c既然你看到這裡了，那趕快去報名 SITCON Camp！",
    "font-size: 40px; background-color: #009DF3; color: #FFF;font-family:system-ui;",
  );

ad();

document.addEventListener("keydown", (e) => {
  if (
    // Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    // Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac)
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    e.key === "F12"
  )
    ad();
});

// paint

const canvas = document.getElementById("backgroundPainter");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

const points = [
  {
    x: width / 2,
    y: height / 2,
    time: Date.now(),
  },
];
let mouse = { x: width / 2, y: height / 2 };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  points.push({ x: mouse.x, y: mouse.y, time: Date.now() });
});

function draw() {
  ctx.fillStyle = "rgba(30, 189, 252, 0.5)"; // very slow fading
  ctx.fillRect(0, 0, width, height);

  const now = Date.now();
  while (points.length > 0 && now - points[0].time > 1000) {
    points.shift();
  }

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const age = (now - p.time) / 5000; // in seconds

    const alpha = 0.3 - age; // 1 -> 0
    if (alpha <= 0) continue;

    ctx.beginPath();
    ctx.fillStyle = `rgba(15, 139, 217, ${alpha * 0.2})`;
    ctx.fillStyle = `rgba(15, 139, 217, ${alpha * 0.1})`; // very soft glow
    ctx.shadowBlur = 100;
    ctx.shadowColor = "#0048da";

    ctx.arc(p.x, p.y, 100, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
