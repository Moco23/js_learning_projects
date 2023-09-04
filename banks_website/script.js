"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const logo = document.querySelector(".nav__logo");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// implementing smooth scroll to navigation
document.querySelector(`.nav__links`).addEventListener("click", function (e) {
  // matching strategy
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
const allButtons = document.getElementsByTagName("button");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

////////////////////////////////////////////////////////////////
// style of the cookie message
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

////////////////////////////////////////////////////////////////
// working with computedStyle
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// start working with smoth scroll
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// add event listeners on scroll button
btnScrollTo.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();
  // modern scroll animaiton
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

// mouseenter (css hove)
const h1 = document.querySelector(`h1`);
const alertH1 = function (e) {
  alert(`addEventLisener: Great! You are reading the heading :D`);
  h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);
