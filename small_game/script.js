"use strict";
// selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

// startng conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality
btn_roll.addEventListener("click", function () {
  // generating a random roll dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `Dice-${dice}.png`;
});
