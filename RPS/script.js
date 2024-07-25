
/*function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else{
        return "scissors";
    }
}
    //console.log(getComputerChoice());*/

function getHumanChoice() {
    let userInput = prompt("What would you choose? Rock, Paper or Scissors?");
        return userInput;         
}
console.log(getHumanChoice());