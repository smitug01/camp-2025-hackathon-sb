import "https://font.emtech.cc/emfont.js";

document.addEventListener(
  "astro:page-load",
  () => {
    emfont.init();
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
