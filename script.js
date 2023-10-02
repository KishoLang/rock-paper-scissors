let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    rockPaperScissors();
}

printWinnerBestOfFive();



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

function getPlayerChoice() {
    let choice;
    while (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = prompt("Your choice please!");
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
        } else if (computer === "Scissors") {
            console.log("You win! Rock beats Scissors.");
            playerScore++;
        }
    } else if (player === "Paper") {
        if (computer === "Rock") {
            console.log("You win! Paper beats Rock");
            playerScore++;
        } else if (computer === "Paper") {
            console.log("It's a draw! You both had Paper.");
        } else if (computer === "Scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        }
    } else if (player === "Scissors") {
        if (computer === "Rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (computer === "Paper") {
            console.log("You win! Scissors beat Paper.");
            playerScore++;
        } else if (computer === "Scissors") {
            console.log("It's a draw! You both had Scissors");
        }
    }
}

function printWinnerBestOfFive() {
    if (playerScore > computerScore) {
        console.log(`You have won with ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You have lost with ${playerScore} to ${computerScore}!`);
    } else if (playerScore == computerScore) {
        console.log(`It's a draw! You both have ${playerScore} points.`);
    }
}

function rockPaperScissors(playerSelection, computerSelection) {
    console.log("Rock, Paper, Scissors...");
    determineWinner(getPlayerChoice(), getComputerChoice());
}