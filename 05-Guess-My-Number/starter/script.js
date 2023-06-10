'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 18; // .value with input field

*/

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Empty...';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > number && guess > 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too big!';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number && guess > 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
