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
    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();

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

playRound(getHumanChoice(), getComputerChoice());


// function playGame() {    
//     // Play 5 rounds using a loop
//     for (let round = 1; round <= 5; round++) {
//         console.log(`Round ${round}:`); // Show the round number

//         // Get the choices
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         // Play a single round and announce the result
//         const result = playRound(humanChoice, computerChoice);
//         console.log(result);

//         // Update scores based on the result
//         if (result.includes("You win!")) {
//             humanScore++;
//         } else if (result.includes("You lose!")) {
//             computerScore++;
//         }

//         // Show the current score
//         console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
//         console.log("-------------------------------------------------")
//     }

//     // Announce the overall winner
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You are the overall winner!");
//     } else if (humanScore < computerScore) {
//         console.log("Oh no! The computer won this time. Best of luck next time!");
//     } else {
//         console.log("It's a tie! Well played!");
//     }
// }

// console.log("Hello World!")