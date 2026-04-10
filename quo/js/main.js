const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navigation-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});

function checkScreenSize() {
    const navMenu = document.querySelector(".navigation-menu");

    if (window.innerWidth >= 700) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
}
checkScreenSize();
