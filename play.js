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

function playOneRound(playerChoice) {
    determineWinner(playerChoice, getComputerChoice());
} 

function wonBestOfFive() {
    if (playerScore > computerScore) {
        console.log(`You have won with ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You have lost with ${playerScore} to ${computerScore}!`);
    } else if (playerScore == computerScore) {
        console.log(`It's a draw! You both have ${playerScore} points.`);
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
            console.log("It's a draw! You both had Rock.");
        } else if (computer === "Paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else if (computer === "Scissors") {
            console.log("You win! Rock beats Scissors.");
            playerScore++;
            playerScoreText.textContent = playerScore;
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            console.log("You win! Paper beats Rock");
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (computer === "Paper") {
            console.log("It's a draw! You both had Paper.");
        } else if (computer === "Scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
            computerScoreText.textContent = computerScore;
        }
    } else if (player === "Scissors") {
        if (computer === "Rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
            computerScoreText.textContent = computerScore;
        } else if (computer === "Paper") {
            console.log("You win! Scissors beat Paper.");
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (computer === "Scissors") {
            console.log("It's a draw! You both had Scissors");
        }
    }
}



