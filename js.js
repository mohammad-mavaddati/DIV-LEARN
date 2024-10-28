let dark = document.querySelectorAll(".d");
let light = document.querySelectorAll(".l");
let screen_btn = document.querySelectorAll("#screen-mode");
for (let i of screen_btn) {
  i.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("light");
    document.querySelector("body").classList.toggle("dark");
    for (let i of dark) {
      i.classList.toggle("hidden");
      i.classList.toggle("block");
    }
    for (let i of light) {
      i.classList.toggle("hidden");
      i.classList.toggle("block");
    }
  });
}
