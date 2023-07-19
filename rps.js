// rock paper and a scissors, oh yaeh

function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();
    if (player === cpu) {
        return 0;
    }
    else if ((player === "rock" || cpu === "rock") && (player === "scissors" || cpu === "scissors")) {
        if (player === "rock") {
            console.log("You won! Rock beats scissors.");
            return 1;
        }
        else {
            console.log("You lost! Scissors loses to rock.");
            return 2;
        }
    }
    else if ((player === "scissors" || cpu === "scissors") && (player === "paper" || cpu === "paper")) {
        if (player === "scissors") {
            console.log("You won! Scissors beat paper.");
            return 1;
        }
        else {
            console.log("You lost! Paper loses to scissors.");
            return 2;
        }
    }
    else if ((player === "paper" || cpu === "paper") && (player === "rock" || cpu === "rock")) {
        if (player === "paper") {
            console.log("You won! Paper beats rock.");
            return 1;
        }
        else {
            console.log("You lost! Rock loses to paper.");
            return 2;
        }
    }
}

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    while (playerScore < 3 && cpuScore < 3) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if (round == 1) {
            playerScore++;
        }
        else if (round == 2) {
            cpuScore++;
        }
    }
    if (playerScore === 3) {
        console.log("Congratumalations! You win.");
    }
    else if (cpuScore === 3) {
        console.log("You're dead and gone, bucko.");
    }
}
game();
