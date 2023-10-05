// Variables for scores
let playerScore = 0;
let computerScore = 0;
let round = 1;

// Grab references to buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

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
    playOneRound("Rock");
    window.setTimeout(handleRounds, 500);
});

paperBtn.addEventListener("click", () => {
    playOneRound("Paper");
    window.setTimeout(handleRounds, 500);
});

scissorsBtn.addEventListener("click", () => {
    playOneRound("Scissors");
    window.setTimeout(handleRounds, 500);
})

modalBtn.addEventListener("click", () => {
    newGame();
})

function removeFocus() {
    if (document.activeElement != document.body) document.activeElement.blur();
}

function handleRounds() {
    removeFocus();
    if (round < 5) {
        round++;
        roundText.textContent = round;
    } else {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        wonBestOfFive();
    }
}

function newGame() {
    modal.close();
    round = 1;
    roundText.textContent = round;
    playerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScore = 0;
    computerScoreText.textContent = computerScore;
    result.textContent = "Rock...Paper...Scissors!";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function playOneRound(playerChoice) {
    determineWinner(playerChoice, getComputerChoice());
} 

function wonBestOfFive() {
    if (playerScore > computerScore) {
        modalText.textContent = `You have won with ${playerScore} to ${computerScore}!`;
        modal.showModal();
    } else if (playerScore < computerScore) {
        modalText.textContent = `You have lost with ${playerScore} to ${computerScore}!`;
        modal.showModal();
    } else if (playerScore == computerScore) {
        modalText.textContent = `It's a draw! You both have ${playerScore} points.`;
        modal.showModal();
    }
}

function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3);
    let choice;
    switch (randomizer) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
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



