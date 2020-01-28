import {StartGame, checkGuess, resetGame} from './modules/guess-game';
let guessSum = 0;
StartGame();


const testGamePlay = () => {
  let guessCounter = 0;
  let myGuess = 50;
  let addGuess = 50;
  let gameOver = false;
  while(!gameOver) {
    let correctGuess = checkGuess(myGuess);
    guessCounter++;
    addGuess = Math.ceil(addGuess/2);
    if (correctGuess === 0) {
      gameOver = true;
      resetGame();
    } else if (correctGuess < 0) {
      myGuess = myGuess + addGuess;
    } else {
      myGuess = myGuess - addGuess;
    }
    console.log(myGuess);
  }
  guessSum += guessCounter;
  return guessCounter;
};

//testGamePlay();

let guessCounts = [];
for(let i=0; i<1000; i++) {
  guessCounts.push(testGamePlay());
}
console.log('guess counts', guessCounts);

let maxGuessCount = Math.max(...guessCounts);
console.log(maxGuessCount);
console.log(guessSum/1000);

// TODO: Display max & average of guess counts