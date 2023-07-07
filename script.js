function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);

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

function game(){
    let score = [0, 0];
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
    if(score[0]> score[1]) console.log("You Won! C:");
    else if(score[0] < score[1]) console.log("You Lost. :C"); 
    else console.log("Its a tie. :|");
}

game();