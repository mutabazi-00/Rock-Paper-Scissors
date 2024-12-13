function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {

    let choice = prompt("Please enter your choice (rock, paper, or scissors):");

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {

        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Determine the winner and update the score
    if (humanChoice === computerChoice) {
        // It's a tie if both choices are the same
        console.log("It's a tie! You both chose " + humanChoice + ".");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        // Human wins in the following conditions:
        // Rock beats Scissors, Scissors beats Paper, Paper beats Rock
        humanScore++;
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + 
        humanChoice.slice(1) + " beats " + computerChoice + ".")
    } else {
        // If it's not a tie, and the human didn't win, the computer wins
        computerScore++;
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + 
        " beats " + humanChoice + ".")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);