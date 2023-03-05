let playerScore = 0;
let computerScore = 0;

//functions and variables for player and computer selection
const choices = [
    "rock", 
    "paper", 
    "scissors"
    ];
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

let lowerCaseSelection;
let computerSelection;

//function to play one round
function playRound(lowerCaseSelection, computerSelection) {
    
    if (lowerCaseSelection == "rock" && computerSelection == "scissors") {
        return winRound;
    } else if (lowerCaseSelection == "rock" && computerSelection == "paper") {
        return loseRound;
    } else if (lowerCaseSelection == "scissors" && computerSelection == "paper") {
        return winRound;
    }else if (lowerCaseSelection == "scissors" && computerSelection == "rock") {
        return loseRound;
    } else if (lowerCaseSelection == "paper" && computerSelection == "rock") {
        return winRound;
    } else if (lowerCaseSelection == "paper" && computerSelection == "scissors") {
        return loseRound;
    } else if (lowerCaseSelection == computerSelection) {
        return tieRound;
    } else {
        return "Invalid input. Try again"
    }
    }

//variables to define wins, losses, and score
const winRound = "You WIN this round!";
const loseRound = "You LOSE this round!";
const tieRound = "Tie! Try again";     

function declareGameResults (playerScore, computerScore) {
    if (playerScore == 5) {
    return "WINNER! You beat the computer " + playerScore + " to " + computerScore + "!";
    } else if (computerScore == 5) {
    return "LOSER! You lost to the computer " + computerScore + " to " + playerScore + "!";
    }
    }
console.log(declareGameResults(playerScore, computerScore));

let rBtn = document.querySelector('rock');
let pBtn = document.querySelector('paper');
let sBtn = document.querySelector('scissors');


function chooseRock() {
    let lowerCaseSelection = "rock";
    getComputerChoice(choices);
    let computerSelection = getComputerChoice(choices);
    playRound(lowerCaseSelection, computerSelection);
    let roundResult = playRound(lowerCaseSelection, computerSelection); 
    if (roundResult == winRound) { //to add score each round
        playerScore++;
        } else if (roundResult == loseRound) {
        computerScore++;
        }
    document.getElementById('selections').textContent = "You played " + lowerCaseSelection + ". The computer played " + computerSelection + ".";    
    document.getElementById('roundAnnounce').textContent = roundResult;
    document.getElementById('gameAnnounce').textContent = declareGameResults(playerScore, computerScore);
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }  
}

function choosePaper() {
    let lowerCaseSelection = "paper";
    getComputerChoice(choices);
    let computerSelection = getComputerChoice(choices);
    playRound(lowerCaseSelection, computerSelection);
    let roundResult = playRound(lowerCaseSelection, computerSelection); 
    if (roundResult == winRound) { //to add score each round
        playerScore++;
        } else if (roundResult == loseRound) {
        computerScore++;
        }
    document.getElementById('selections').textContent = "You played " + lowerCaseSelection + ". The computer played " + computerSelection + ".";    
    document.getElementById('roundAnnounce').textContent = roundResult;
    document.getElementById('gameAnnounce').textContent = declareGameResults(playerScore, computerScore);
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }
}

function chooseScissors() {
    let lowerCaseSelection = "scissors";
    getComputerChoice(choices);
    let computerSelection = getComputerChoice(choices);
    playRound(lowerCaseSelection, computerSelection);
    let roundResult = playRound(lowerCaseSelection, computerSelection); 
    if (roundResult == winRound) { //to add score each round
        playerScore++;
        } else if (roundResult == loseRound) {
        computerScore++;
        }
    document.getElementById('selections').textContent = "You played " + lowerCaseSelection + ". The computer played " + computerSelection + ".";    
    document.getElementById('roundAnnounce').textContent = roundResult;
    document.getElementById('gameAnnounce').textContent = declareGameResults(playerScore, computerScore);
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);
