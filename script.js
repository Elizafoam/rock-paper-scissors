function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "Its a tie!";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissors")
            return "You Win! Rock beats Scissors";
        else return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors")
            return "You Lose! Scissors beats Paper";
        else return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock")
            return "You Lose! Rock beats Scissors";
        else return "You Win! Scissors beats Paper";
    }
}

function getWinner(playerScore, computerScore){
    if(playerScore > computerScore) return "You Won! C:";
    else if(playerScore < computerScore) return "You Lost. :C"; 
    else "Its a tie. :|";
}

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundResult = document.getElementById('result');
const finalResult = document.getElementById('popup');
const winnerResult = document.getElementById('winner');
const resetButton = document.getElementById('reset');

const options = document.querySelectorAll('.choice');
let playerSelection; 
const score = [0, 0];

options.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.getAttribute('id');
    result = playRound(playerSelection, getComputerChoice());
    roundResult.textContent = result;

    if(result.charAt(4) === "W"){
        score[0] += 1;
        playerScore.textContent = score[0];
    } 
    else if (result.charAt(4) === "L"){
        score[1] += 1;
        computerScore.textContent = score[1];
    } 

    if(score[0] === 5 || score[1] === 5){
        winnerResult.textContent = getWinner(score[0], score[1]);
        finalResult.style.display = 'block';
    }
}));

resetButton.addEventListener('click', () => {
    finalResult.style.display = 'none';
    score[0] = 0;
    score[1] = 0;
    playerScore.textContent = score[0];
    computerScore.textContent = score[1];
});
