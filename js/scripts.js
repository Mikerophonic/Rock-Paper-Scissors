const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    console.log(choice)
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}


function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie"){
        return "It's a tie!"
    } else if (result === "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/* function getComputerChoice() {
    let computerChoice; 
    let num = Math.random();
    if (num >= .666) {
        computerSelection = "scissors";
    } else if (num >= .333) {
        computerSelection = "paper";
    } else {
        computerSelection = "rock";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie! Rock vs. rock."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie! Paper vs. paper."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie! Scissors vs. scissors."
    }
} */