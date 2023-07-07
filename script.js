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
    let winner;
    if(playerSelection.equalsIgnoreCase(computerSelection)){
        winner = "Its a tie!";
    }
    else if(playerSelection.equalsIgnoreCase("Rock")){
        if(computerSelection.equals("Scissors")){
            winner = "You Win! Rock beats Scissors";
        }
        else{
            winner = "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection.equalsIgnoreCase("Paper")){
        if(computerSelection.equals("Scissors")){
            winner = "You Lose! Scissors beats Paper";
        }
        else{
            winner = "You Win! Paper beats Rock";
        }
    }
    else if(playerSelection.equalsIgnoreCase("Scissors")){
        if(computerSelection.equals("Rock")){
            winner = "You Lose! Rock beats Scissors";
        }
        else{
            winner = "You Win! Scissors beats Paper";
        }
    }
    return winner;
}
let playerSelection = "Rock"
console.log(playRound(playerSelection, getComputerChoice()));