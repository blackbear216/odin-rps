// write a func checkIfGameOver
// called once at end of playRound func
// if either score is 5 game ends
// and buttons thence have no further effect on score or text
// otherwise display all relevant text as divs instead of logs

let gameOverFlag = false;
const results = document.querySelector(".results");
const humanDisplay = document.querySelector(".human-score");
const computerDisplay = document.querySelector(".computer-score");

function checkIfGameOver() {
    if (humanScore >= 5 || computerScore >= 5) {
        gameOverFlag = true;
        changeText(results, "Game over!");
    }
}

function changeText(ele, text) {
    ele.textContent = text;
}

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

function playRound(humanChoice, computerChoice) {
    if (gameOverFlag) {
        console.log("game over");
        return;
    }

    let winState = ''

    const drawString = `Draw! ${humanChoice} matches ${computerChoice}`;
    const winString = `You win! ${humanChoice} beats ${computerChoice}`;
    const loseString = `You lose! ${computerChoice} beats ${humanChoice}`;

    if (humanChoice == computerChoice) {
        winState = drawString;
    } else {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                winState = loseString;
                computerScore++;
            } else {
                winState = winString;
                humanScore++;
            }
        }
    
        if (humanChoice == 'paper') {
            if (computerChoice == 'scissors') {
                winState = loseString;
                computerScore++;
            } else {
                winState = winString;
                humanScore++;
            }
        }
    
        if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                winState = loseString;
                computerScore++;
            } else {
                winState = winString;
                humanScore++;
            }
        }
    }

    changeText(results, winState);
    changeText(humanDisplay, humanScore);
    changeText(computerDisplay, computerScore);

    checkIfGameOver()
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});