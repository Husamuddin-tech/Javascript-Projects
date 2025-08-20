let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessInput');
const guessSlot = document.querySelector('#previousGuesses');
const remaining = document.querySelector('#attemptsLeft');
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.feedback');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

startGame();

function startGame() {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    if (!playGame) return;

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('📉 Too low!');
  } else {
    displayMessage('📈 Too high!');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = prevGuess.join(', ');
  numGuess++;
  remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  starOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = 'None';
    remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    starOver.removeChild(p);
    playGame = true;
  });
}
