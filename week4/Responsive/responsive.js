var menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu");
console.log(menuButton);
console.log(navMenu);

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("hide");
    menuButton.classList.toggle("change");
};