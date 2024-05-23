function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return 'rock';
    } else if (computerChoice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const drawString = `Draw! ${humanChoice} matches ${computerChoice}`;
    const winString = `You win! ${humanChoice} beats ${computerChoice}`;
    const loseString = `You lose! ${computerChoice} beats ${humanChoice}`;

    if (humanChoice == computerChoice) {
        console.log(drawString);
        return;
    }

    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            console.log(loseString);
            computerScore++;
        } else {
            console.log(winString);
            humanScore++;
        }
    }

    if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            console.log(loseString);
            computerScore++;
        } else {
            console.log(winString);
            humanScore++;
        }
    }

    if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log(loseString);
            computerScore++;
        } else {
            console.log(winString);
            humanScore++;
        }
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);