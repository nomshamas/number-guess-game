// "use strict";

var randomValue = document.getElementById('q-box');

var guessingValue = document.getElementById('guessing');

var scoreValue = document.getElementById('score');
var hightScoreValue = document.getElementById('h-score');

var inputValue = document.getElementById('input-field').value;

var checkBtn = document.getElementById('check-btn');
var resetBtn = document.getElementById('reset-btn');

var number = 0;
number = Math.floor(Math.random() * 20) + 1;

alert(number)


checkBtn.onclick = function() {
	if(inputValue === number) {
		randomValue.innerHTML = number;
		hightScoreValue.textContent = scoreValue
	 }
	// else {
	// 	let currentScore = parseInt(scoreValue.textContent)
	// 	currentScore--
	// 	scoreValue.textContent = currentScore;
	// 	inputValue = '';
	// }
	// document.write(randomValue, guessingValue, scoreValue, hightScoreValue, inputValue);
}

resetBtn.onclick = function() {
	inputValue = '';
}