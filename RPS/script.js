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

function updateScore(result) {
    if (result.includes("You lost")) {
        computerScore++;
    } else if (result.includes("YOU WON")) {
        humanScore++;
    }
    document.querySelector("#humanScore").textContent = `Your Score: ${humanScore}`;
    document.querySelector("#computerScore").textContent = `Computer Score: ${computerScore}`;
}

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            alert("Congratulations! You won the game!");
        } else {
            alert("Sorry, you lost the game.");
        }
        humanScore = 0;
        computerScore = 0;
        updateScore("");
    }
}

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    document.querySelector("#result").textContent = result;
    updateScore(result);
    checkGameOver();
}

let humanScore = 0;
let computerScore = 0;

document.querySelector("#rockBtn").addEventListener("click", () => handleChoice("rock"));
document.querySelector("#paperBtn").addEventListener("click", () => handleChoice("paper"));
document.querySelector("#scissorsBtn").addEventListener("click", () => handleChoice("scissors"));


