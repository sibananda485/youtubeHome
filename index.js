const menu = document.getElementById("toggle");
const leftMenu = document.getElementsByClassName("left-menu")[0];
menu.addEventListener("click", () => {
  leftMenu.classList.toggle("animation");
});
