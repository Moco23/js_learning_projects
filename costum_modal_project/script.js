"use strict";
// set variables for geting elements from html
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_moda = document.querySelector(".close-modal");
const btns_open_modal = document.querySelectorAll(".show-modal");

// create for lop for open modal buttons click fuction
for (let i = 0; i < btns_open_modal.length; i++) {
  btns_open_modal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
