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

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// const highscore = [0];
// document.querySelector('.number').textContent = number;
// Refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess, guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'Empty...';
    displayMessage('Empty...');
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if (score > highscore[highscore.length - 1]) {
    //   highscore.push(score);
    //   document.querySelector('.highscore').textContent =
    //     highscore[highscore.length - 1];
    // }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = guess > number ? 'Too big!' : 'Too low!';
    displayMessage(guess > number ? 'Too big!' : 'Too low!');
    // if (guess > number) {
    //   document.querySelector('.message').textContent = 'Too big!';
    // } else {
    //   document.querySelector('.message').textContent = 'Too low!';
    // }
  } else {
    // document.querySelector('.message').textContent = 'You lose!';
    displayMessage('You lose!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#cf2222';
  }
  //  else if (guess > number && guess > 0) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too big!';
  //     score--; // score = score - 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number && guess > 0) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--; // score = score - 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

console.log(highscore);
