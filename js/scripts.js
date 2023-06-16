const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
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

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput === false){
        const choice = prompt("Rock Paper or Scissors");
        if (choice === null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------");
        if (checkWinner(playerSelection, computerSelection) === "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer"){
            scoreComputer++
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("Player wins!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer wins");
    } else {
        console.log("We have a tie!");
    }

    }


game();

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