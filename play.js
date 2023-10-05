// Variables for scores
let playerScore = 0;
let computerScore = 0;
let round = 1;
let currentlyInRound = false;
const timeBeforeNewRound = 2000;

// Grab references to buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Grab robot choice spans
const cpuRock = document.getElementById("cpu-rock");
const cpuPaper = document.getElementById("cpu-paper");
const cpuScissors = document.getElementById("cpu-scissors");

// Grab references to score elements
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const roundText = document.getElementById("round-num");
const result = document.getElementById("result");

// Grab reference to dialog modal window
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-winner-text");
const modalBtn = document.getElementById("modal-btn");

// Check for Button presses
rockBtn.addEventListener("click", () => {
    if (currentlyInRound) return;
    playOneRound("Rock");
    window.setTimeout(handleRounds, timeBeforeNewRound);
});

paperBtn.addEventListener("click", () => {
    if (currentlyInRound) return;
    playOneRound("Paper");
    window.setTimeout(handleRounds, timeBeforeNewRound);
});

scissorsBtn.addEventListener("click", () => {
    if (currentlyInRound) return;
    playOneRound("Scissors");
    window.setTimeout(handleRounds, timeBeforeNewRound);
})

modalBtn.addEventListener("click", () => {
    newGame();
})

function removeFocus() {
    // Remove player button focus
    if (document.activeElement != document.body) document.activeElement.blur();
    // Hide cpu choice 
    cpuRock.style.visibility = "hidden";
    cpuPaper.style.visibility = "hidden";
    cpuScissors.style.visibility = "hidden";
}

function handleRounds() {
    removeFocus();
    result.textContent = "Make your choice!";
    if (round < 5) {
        round++;
        roundText.textContent = round;
    } else {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        wonBestOfFive();
    }
    currentlyInRound = false;
}

function newGame() {
    modal.close();
    round = 1;
    roundText.textContent = round;
    playerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScore = 0;
    computerScoreText.textContent = computerScore;
    result.textContent = "Make your choice!";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function playOneRound(playerChoice) {
    currentlyInRound = true;
    determineWinner(playerChoice, getComputerChoice());
} 

function wonBestOfFive() {
    if (playerScore > computerScore) {
        modalText.textContent = `You have won with ${playerScore} to ${computerScore}! 🎉`;
        modal.showModal();
    } else if (playerScore < computerScore) {
        modalText.textContent = `You have lost with ${playerScore} to ${computerScore}! 🫠`;
        modal.showModal();
    } else if (playerScore == computerScore) {
        modalText.textContent = `It's a draw! You both have ${playerScore} points. 🤝`;
        modal.showModal();
    }
}

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    let choice;
    switch (randomizer) {
        case 0:
            choice = "Rock";
            cpuRock.style.visibility = "visible";
            break;
        case 1:
            choice = "Paper";
            cpuPaper.style.visibility = "visible";
            break;
        case 2:
            choice = "Scissors";
            cpuScissors.style.visibility = "visible";
            break;
    }
    return choice;
}

function determineWinner(player, computer) {
    if (player === "Rock") {
        if (computer === "Rock") {
            result.textContent = "It's a draw! You both had Rock.";
        } else if (computer === "Paper") {
            result.textContent = "You lose! Paper beats Rock";
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else if (computer === "Scissors") {
            result.textContent = "You win! Rock beats Scissors.";
            playerScore++;
            playerScoreText.textContent = playerScore;
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            result.textContent = "You win! Paper beats Rock";
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (computer === "Paper") {
            result.textContent = "It's a draw! You both had Paper.";
        } else if (computer === "Scissors") {
            result.textContent = "You lose! Scissors beat Paper.";
            computerScore++;
            computerScoreText.textContent = computerScore;
        }
    } else if (player === "Scissors") {
        if (computer === "Rock") {
            result.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else if (computer === "Paper") {
            result.textContent = "You win! Scissors beat Paper.";
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (computer === "Scissors") {
            result.textContent = "It's a draw! You both had Scissors";
        }
    }
}