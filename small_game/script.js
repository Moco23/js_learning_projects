"use strict";
// selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const current0EL = document.querySelector("#current--0");
const current1EL = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

// startng conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let current_score = 0;
let active_player = 0;

// Rolling dice functionality
btn_roll.addEventListener("click", function () {
  // generating a random roll dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `Dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    current_score += dice;
    document.querySelector(`#current--${active_player}`).textContent =
      current_score;

    current0EL.textContent = current_score;
  } else {
    // switch to next player
    active_player = active_player === 0 ? 1 : 0;
  }
});
