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

console.log(getComputerChoice());
console.log(getHumanChoice());