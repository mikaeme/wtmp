const upperLimit = 100;
const lowerLimit = 1;
let randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit +1) + lowerLimit);
const limits = document.querySelector('#limits');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const resultParas = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let startTime;
let guessCount = 1;
let resetButton;

limits.innerHTML += 'We have selected a random number between ' + lowerLimit + ' and ' + upperLimit;

checkGuess = () => {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    startTime = Date.now(); 
    resultParas.setAttribute('style', 'visibility: visible');
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    const endTime = Date.now();
    const totalTime = Math.trunc((endTime - startTime) / 1000);
    lastResult.textContent = 'Congratulations! You got it right in ' +guessCount + ' guesses and ' + totalTime + ' seconds!';
    lastResult.style.backgroundColor = 'green';
    resultParas.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    resultParas.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
};

resetGame = () => {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resultParas.setAttribute('style', 'visibility: hidden');
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'red';
  randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit +1) + lowerLimit);
};
