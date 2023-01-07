'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1Score = document.getElementById('current--0');
const player2Score = document.getElementById('current--1');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
let playing, currentScore, activePlayer, scores;

alert("Rules:-First Player to reach 100 wins,If any player gets (1) the turn will be going to get skipped.")
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerActive0.classList.toggle('player--active');
  playerActive1.classList.toggle('player--active');
};

const initialization = function () {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  console.log(playing);
  dice.classList.add('hidden');
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  playerActive1.classList.remove('player--winner');
  playerActive0.classList.remove('player--winner');
  playerActive0.classList.add('player--active');
  playerActive1.classList.remove('player--active');
};

initialization();

btnRoll.addEventListener('click', function () {
  if (playing) {
    console.log(playing);
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = 'dice-' + diceNumber + '.png';

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
      playing = false;
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', initialization);
