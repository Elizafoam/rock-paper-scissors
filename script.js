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
        if(computerSelection === "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "You Win! Paper beats Rock";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You Lose! Rock beats Scissors";
        }
        else{
            return "You Win! Scissors beats Paper";
        }
    }
}

const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const roundResult = document.getElementById('result');

const options = document.querySelectorAll('.choice');
let playerSelection; 

options.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.getAttribute('id');
    roundResult.textContent = playRound(playerSelection, getComputerChoice());
}));

function game(){
    const score = [0, 0];
    let round;
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        round = playRound(playerSelection, getComputerChoice());
        console.log(round);
        if(round.charAt(4) === "W"){
            score[0] += 1;
        }
        else if (round.charAt(4) === "L"){
            score[1] += 1;
        }
    }
    console.log(getWinner(score[0], score[1]));
}

function getWinner(playerScore, computerScore){
    if(playerScore > computerScore) console.log("You Won! C:");
    else if(playerScore < computerScore) console.log("You Lost. :C"); 
    else console.log("Its a tie. :|");
}