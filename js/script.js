"use strict";
const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const navOpen = document.querySelector(".nav-open");

btnNav.addEventListener("click", () => {
  header.classList.toggle('nav-open');
});
