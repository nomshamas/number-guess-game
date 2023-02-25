"use strict";

var randomValue = document.querySelector('.q-box').textContent;
var guessingValue = document.querySelector('.guessing').textContent;
var scoreValue = document.querySelector('.score').textContent;
var hightScoreValue = document.querySelector('.h-score').textContent;
var inputValue = document.querySelector('#input-field').value;
var checkBtn = document.querySelector('#check-btn');
var resetBtn = document.querySelector('#reset-btn');

var number = 0;

number = Math.floor(Math.random() * 20) + 1;

checkBtn.onclick = function() {
	document.write(randomValue, guessingValue, scoreValue, hightScoreValue, inputValue);
}