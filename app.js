const body = document.querySelector('body');
const menu_icon_open = document.querySelector(".menu-icon-open");
const menu_icon_close = document.querySelector(".menu-icon-close");
const menu_links = document.querySelector(".menu-links");
const nav = document.querySelector("nav");


function menuToggle() {
    menu_icon_open.classList.toggle("menu-icon-open");
    menu_icon_close.classList.toggle("menu-icon-hide");
    body.classList.toggle("background")
}

menu_icon_open.addEventListener('click', () => {
    menuToggle();
    menu_links.style.display = "flex";
});

menu_icon_close.addEventListener('click', () => {
    menuToggle();
    menu_links.style.display = "none";
})