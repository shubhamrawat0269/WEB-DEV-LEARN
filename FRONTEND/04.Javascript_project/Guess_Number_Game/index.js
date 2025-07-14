/*
 Pseudo Code :
 1. Generate a random number by computer
 2. Input user number in input box.
 3. On Submit, 
   if user input number > computer gen. number, 
     --> Too High 
   if user input number < computer gen. number, 
     --> Too Low 
    
 4. List down guesses each time number print
 5. Limit the user to type more than 10 inputs, with the message 
 6. if game finishes with the success result or failure, 
    enable Start the game feature
    otherwise disable it.
*/

let guesses = [];
let userEnteredNumber;
let countUserGuessedNumber = 0;

const inputBox = document.getElementById("input-box");
const resultValue = document.getElementById("result");
const guessList = document.getElementById("guess-list");
const startButton = document.getElementById("start-game");
const submitBtn = document.getElementById("submit-btn");
let randomNumberBySystem = Math.floor(Math.random() * 100 + 1);

startButton.disabled = true;

inputBox.addEventListener("change", function () {
  userEnteredNumber = inputBox.value;
  inputBox.value = "";
});

function handleSubmit() {
  guesses.push(userEnteredNumber);
  guessList.innerHTML = guesses;
  countUserGuessedNumber++;

  if (countUserGuessedNumber >= 10) {
    resultValue.innerHTML = `You lost! The number was ${randomNumberBySystem}`;
    startButton.disabled = false;
    submitBtn.disabled = true;
    inputBox.disabled = true;
    return;
  }
  console.log(
    `You Entered ${userEnteredNumber}, computer entered ${randomNumberBySystem}`
  );

  if (userEnteredNumber > randomNumberBySystem) {
    // console.log("Too High");
    resultValue.innerHTML = `Too High`;
  } else if (userEnteredNumber < randomNumberBySystem) {
    // console.log("Too Low");
    resultValue.innerHTML = `Too Low`;
  } else {
    // console.log("You got it! Congrats");
    resultValue.innerHTML = `You got it! Congrats`;
    startButton.disabled = false;
    submitBtn.disabled = true;
    inputBox.disabled = true;
  }
}

function handleRestartGame() {
  guesses = [];
  guessList.innerHTML = "";
  resultValue.innerHTML = "";
  countUserGuessedNumber = 0;
  randomNumberBySystem = Math.floor(Math.random() * 100 + 1);

  startButton.disabled = true;
  submitBtn.disabled = false;
  inputBox.disabled = false;
}
