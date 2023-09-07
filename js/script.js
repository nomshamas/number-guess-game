// "use strict";

var randomValue = document.getElementById("q-box");
var guessingValue = document.getElementById("guessing");
var scoreValue = document.getElementById("score");
var hightScoreValue = document.getElementById("h-score");
var inputValue = document.getElementById("input-field");
var checkBtn = document.getElementById("check-btn");
var resetBtn = document.getElementById("reset-btn");

var number = 0;
number = Math.floor(Math.random() * 20) + 1;

var currentScore = 20;

randomValue.textContent = number;
inputValue.focus();

checkBtn.addEventListener("click", function () {
  if (inputValue.value >= 1 && inputValue.value <= 20) {
    if (inputValue.value > number && currentScore >= 1) {
      guessingValue.textContent = "Too, High value!";
      currentScore--;
      scoreValue.textContent = currentScore;
    } else if (inputValue.value < number && currentScore > 1) {
      guessingValue.textContent = "Too, Low value!";
      currentScore--;
      scoreValue.textContent = currentScore;
    } else if(inputValue.value == number && currentScore > 1) {
      guessingValue.textContent = 'You Won!'
      guessingValue.style.color = 'green'
      currentScore--;
      scoreValue.textContent = currentScore;
      inputValue.setAttribute('disabled', 'disabled')
      checkBtn.setAttribute('disabled', 'disabled')
    }
    else{
      guessingValue.textContent = 'You Loose!'
      currentScore--;
      scoreValue.textContent = currentScore;
      inputValue.setAttribute('disabled', 'disabled')
      checkBtn.setAttribute('disabled', 'disabled')
    }
  }
  else {
    guessingValue.textContent = "Invalid Value!";
  }
  inputValue.value = "";
});

resetBtn.addEventListener("click", function () {
  randomValue.textContent = "?";
  inputValue.focus();
  guessingValue.textContent = "Start Guessing...";
  scoreValue.textContent = "20";
  inputValue.removeAttribute('disabled')
  checkBtn.removeAttribute('disabled')
});

inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});
