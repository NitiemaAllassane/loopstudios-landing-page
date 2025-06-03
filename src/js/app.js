const mobileMenu = document.querySelector(".mobileMenu");

const openBtn = document.querySelector(".header__toggleBtn");
const closeBtn = document.querySelector(".closeBtn");

const toggleMenu = () => {
    mobileMenu.classList.toggle("show");
}

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);