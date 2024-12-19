const showMenuBtn = document.getElementById("show-menu__btn");
const mobileMenuContainer = document.querySelector(".mobile-menu__container");
const body = document.body;
const mobileLinks = document.querySelectorAll(".mobile-link");
console.log(mobileLinks);

showMenuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  mobileMenuContainer.classList.toggle("show");
  showMenuBtn.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

const closeMenuBtn = document.getElementById("close-menu");
closeMenuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  mobileMenuContainer.classList.remove("show");
  showMenuBtn.classList.remove("active");
  body.classList.remove("no-scroll");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", function() {
    mobileMenuContainer.classList.remove("show");
    showMenuBtn.classList.remove("active");
    body.classList.remove("no-scroll");
  })
});