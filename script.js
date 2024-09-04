const menuHamburger = document.querySelector(".burger__menu");
const navbar = document.querySelector(".navbar");

menuHamburger.addEventListener("click", () =>
  navbar.classList.toggle("active")
);
