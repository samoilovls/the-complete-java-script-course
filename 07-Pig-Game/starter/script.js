'use strict';

// Selecting elements:
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const daceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Starting conditions:

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  daceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Functionality:
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0; // Which player is the active
// State variable:
// let playing = true; // Hosts the state of the game/condition of the system

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll:
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    //   console.log(randomNumber);

    // 2. Display dice:
    daceEl.classList.remove('hidden');
    daceEl.src = `dice-${randomNumber}.png`; // src property

    // 3. Check for rolled 1:
    if (randomNumber !== 1) {
      // Add to current score:
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Before we switch to next player, we need to set current-score back to 0 on an active player and this player is still 0:
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      // SWITCH TO NEXT PLAYER:
      switchPlayer();
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      daceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
