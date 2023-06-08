"use strict";
// secretNumber
const secretNumber = Math.trunc(Math.random() * 20) * 1;
let scoreDisplay = 20;
document.querySelector(".number").textContent = secretNumber;

// add event lissener on button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(
      ".message"
    ).textContent = `🤫 You should put some numbers!`;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `Number is correct!`;
  } else if (guess > secretNumber) {
    if (scoreDisplay > 1) {
      document.querySelector(".message").textContent = `You lost a gaem!`;
      scoreDisplay--;
      document.querySelector(".score").textContent = scoreDisplay;
    }
    document.querySelector(".message").textContent = `Number is to heigh!`;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = `Number is to low`;
    scoreDisplay--;
    document.querySelector(".score").textContent = scoreDisplay;
  }
});
console.log(12 * 21);
