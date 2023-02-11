const nav = document.querySelector(".nav");
const menuMobile = document.querySelector(".menu__mobile");

menuMobile.addEventListener("click", () => {
    nav.classList.toggle("none")
});