const computerChoiceDisplay = document.querySelector('#computer-choice');

const userChoiceDisplay = document.querySelector('#user-choice');

const resultDisplay = document.querySelector('#result');

const buttons = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

buttons.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice

    getComputerChoice()
    getResult()
}));


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'rock'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw"
    }
    if (computerChoice === `rock` && userChoice === `paper`) {
        result = "you win"
    }
    if (computerChoice === `rock` && userChoice === `scissors`) {
        result = "you lose"
    }
    if (computerChoice === `paper` && userChoice === `rock`) {
        result = "you lose"
    }
    if (computerChoice === `paper` && userChoice === `scissors`) {
        result = "you win"
    }
    if (computerChoice === `scissors` && userChoice === `rock`) {
        result = "you win"
    }
    if (computerChoice === `scissors` && userChoice === `paper`) {
        result = "you lose"
    }




    return resultDisplay.innerHTML = result
}

