// rock paper and a scissors, oh yaeh

function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();
    if (player === cpu) {
        document.getElementById("round-result").innerHTML = "Tie.";
        return 0;
    }
    else if ((player === "rock" || cpu === "rock") && (player === "scissors" || cpu === "scissors")) {
        if (player === "rock") {
            document.getElementById("round-result").innerHTML = "You won! Rock beats scissors.";
            return 1;
        }
        else {
            document.getElementById("round-result").innerHTML = "You lost! Scissors loses to rock.";
            return 2;
        }
    }
    else if ((player === "scissors" || cpu === "scissors") && (player === "paper" || cpu === "paper")) {
        if (player === "scissors") {
            document.getElementById("round-result").innerHTML = "You won! Scissors beat paper.";
            return 1;
        }
        else {
            document.getElementById("round-result").innerHTML = "You lost! Paper loses to scissors.";
            return 2;
        }
    }
    else if ((player === "paper" || cpu === "paper") && (player === "rock" || cpu === "rock")) {
        if (player === "paper") {
            document.getElementById("round-result").innerHTML = "You won! Paper beats rock.";
            return 1;
        }
        else {
            document.getElementById("round-result").innerHTML = "You lost! Rock loses to paper.";
            return 2;
        }
    }
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

function game() {
    let playerScore = 0;
    let cpuScore = 0;

    updateScore();

    function updateScore() {
        document.getElementById("playerScoreDisplay").innerHTML = playerScore.toString();
        document.getElementById("cpuScoreDisplay").innerHTML = cpuScore.toString();
    }
    
    function checkWin() {
        if (playerScore === 5) {
            document.getElementById("win-loss").innerHTML = "Congrats! You won";
            playerScore = 0;
            cpuScore = 0;
        }
        else if (cpuScore === 5) {
            document.getElementById("win-loss").innerHTML = "Failure! You lose";
            playerScore = 0;
            cpuScore = 0;
        }
    }

    rock.addEventListener('click', () => {
        document.getElementById("win-loss").innerHTML = "";
        let cpu = getComputerChoice();
        let point = playRound("rock", cpu);
        if (point === 1) {
            playerScore++;
            checkWin();
            updateScore();
            return;
        }
        else if (point === 2) {
            cpuScore++;
            checkWin();
            updateScore();
            return;
        }
        else {
            updateScore();
            return;
        }
    });
    
    paper.addEventListener('click', () => {
        document.getElementById("win-loss").innerHTML = "";
        let cpu = getComputerChoice();
        let point = playRound("paper", cpu);
        if (point === 1) {
            playerScore++;
            checkWin();
            updateScore();
            return;
        }
        else if (point === 2) {
            cpuScore++;
            checkWin();
            updateScore();
            return;
        }
        else {
            updateScore();
            return;
        }
    });
    
    scissors.addEventListener('click', () => {
        document.getElementById("win-loss").innerHTML = "";
        let cpu = getComputerChoice();
        let point = playRound("scissors", cpu);
        if (point === 1) {
            playerScore++;
            checkWin();
            updateScore();
            return;
        }
        else if (point === 2) {
            cpuScore++;
            checkWin();
            updateScore();
            return;
        }
        else {
            updateScore();
            return;
        }
    });

    return;
}
game();


