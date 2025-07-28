"use strict";

// DOM element variables
const randomValue = document.getElementById("q-box");
const guessingValue = document.getElementById("guessing");
const scoreValue = document.getElementById("score");
const highScoreValue = document.getElementById("h-score");
const inputValue = document.getElementById("input-field");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");

// Initialize the game
let number = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

// Function to update the message displayed
function updateMessage(message, color = "red") {
  guessingValue.textContent = message;
  guessingValue.style.color = color;
}

// Function to handle guess
function handleGuess() {
  const guess = parseInt(inputValue.value);

  if (isNaN(guess) || guess < 1 || guess > 20) {
    updateMessage("Invalid Value!", "red");
  } else if (guess === number) {
    updateMessage("You Won!", "green");
    randomValue.textContent = number;
    inputValue.setAttribute("disabled", "disabled");
    checkBtn.setAttribute("disabled", "disabled");
    if (currentScore > highScore) {
      highScore = currentScore;
      highScoreValue.textContent = highScore;
    }
  } else {
    const message = guess > number ? "Too high!" : "Too low!";
    updateMessage(message, "red");
    currentScore--;
    scoreValue.textContent = currentScore;
    if (currentScore <= 0) {
      updateMessage("You Lost!", "red");
      inputValue.setAttribute("disabled", "disabled");
      checkBtn.setAttribute("disabled", "disabled");
    }
  }

  inputValue.value = "";
  inputValue.focus();
}

// Event listeners
checkBtn.addEventListener("click", handleGuess);

resetBtn.addEventListener("click", function () {
  number = Math.floor(Math.random() * 20) + 1;
  currentScore = 0;
  scoreValue.textContent = currentScore;
  randomValue.textContent = "?";
  inputValue.removeAttribute("disabled");
  checkBtn.removeAttribute("disabled");
  updateMessage("Start Guessing...");
  inputValue.value = "";
  inputValue.focus();
});

inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});

// Initial setup
inputValue.focus();
