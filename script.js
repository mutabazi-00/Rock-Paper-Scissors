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