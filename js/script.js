// Set current year in footer
const yearEl = document.querySelector(".year");
const currenYear = new Date().getFullYear();
yearEl.textContent = currenYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
