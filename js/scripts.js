let playerScore = 0;
let compScore= 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

const computerPlay = () => {   
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
}



const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement("p");
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++
        const p = document.createElement("p");
        p.innerText = "You lost! Rock crushes scissors."
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        const p = document.createElement("p");
        p.innerText = "You won! Scissors cuts paper."
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++
        const p = document.createElement("p");
        p.innerText = "You lost! Paper covers rock."
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        const p = document.createElement("p");
        p.innerText = "You won! Rock crushes scissors."
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++
        const p = document.createElement("p");
        p.innerText = "You lost! Scissors cuts paper."
        outcomeDiv.appendChild(p);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        const p = document.createElement("p");
        p.innerText = "You won! Paper covers rock."
        outcomeDiv.appendChild(p);
    }
} 

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("player-won");
        h2.innerText = `You won ${playerScore} to ${compScore}!`;
        outcomeDiv.append(h2);
    } else if (compScore === 5) {
        const h2 = document.createElement("h2");
        h2.classList.add("computer-won");
        h2.innerText = `You lost ${playerScore} to ${compScore}!`;
        outcomeDiv.append(h2);
    }
}

rockBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${compScore}`;
})

paperBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${compScore}`;
})

scissorsBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${compScore}`;
})

