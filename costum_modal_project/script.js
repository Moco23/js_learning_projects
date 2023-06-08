"use strict";
// set variables for geting elements from html
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_moda = document.querySelector(".close-modal");
const btns_open_modal = document.querySelectorAll(".show-modal");

// open modal fuction
const open_modal_function = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// close fuction
const close_modal_function = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// create for lop for open modal buttons click fuction
for (let i = 0; i < btns_open_modal.length; i++) {
  btns_open_modal[i].addEventListener("click", open_modal_function);
}

// make a closing modal button click function
btn_close_moda.addEventListener("click", close_modal_function);
overlay.addEventListener("click", close_modal_function);
