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

function playGame() {
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

    for (let i = 0; i < 5; i++) {
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > humanScore) {
        console.log('You lose the game.');
    } else {
        console.log('Draw.');
    }
}

playGame();