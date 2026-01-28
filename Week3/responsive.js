var menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("hide");
    menuBtn.classList.toggle("change");
}
