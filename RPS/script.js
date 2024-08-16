function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("What would you choose? Rock, Paper, or Scissors?");
    return userInput.toLowerCase();         
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lost. Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lost. Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lost. Rock beats scissors.";
    } else if (humanChoice === computerChoice) {
        return "It's a tie! Play again!";
    } else {
        return "YOU WON! " + humanChoice + " beats " + computerChoice + "!!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;  

    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(result);

        if (result.includes("You lost")) {
            computerScore++;
        } else if (result.includes("YOU WON")) {
            humanScore++;
        }

        console.log(`YOUR SCORE: ${humanScore}  COMPUTER SCORE: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game ended in a tie!");
    }
}

// Start the game
playGame();
