let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else{
        return "scissors";
    }
}
    //console.log(getComputerChoice())

function getHumanChoice() {
    let userInput = prompt("What would you choose? Rock, Paper or Scissors?");
        return userInput;         
}
//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
     humanChoice = getHumanChoice().toLowerCase();
     computerChoice = getComputerChoice();
        if (humanChoice === "rock" && computerChoice === "paper"){
            return  "You lost. Paper beats rock."}
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            return "You lost. Scissors beats paper"}
        else if (humanChoice === "scissors" && computerChoice === "rock"){
            return "You lost, Rock beats scissors"}
        else if (humanChoice === computerChoice){
            return "It's a tie! Play again!"
        }

        else {
            return "YOU WON! " + humanChoice + " beats " + computerChoice + "!! YOUR SCORE:" + humanScore++ + " COMPUTER SCORE:" + computerScore + ".";
        }}
        
        
    


console.log(playRound())