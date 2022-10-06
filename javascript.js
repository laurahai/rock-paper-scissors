
function getComputerChoice() {
    let prob = parseInt(9*Math.random()); //generates 0,1,2,3,4,5,6,7,8
    let choice = "";

    if (prob <=2 ) {
        choice = "rock";
    }
    else if (prob > 2 && prob <= 6 ) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}


function playRound(playerSelection, computerSelection) {

    console.log("player selects: " + playerSelection);
    console.log("computer selects: " + computerSelection);

    if (computerSelection == playerSelection) {
        return "It's a tie, play again!";
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    else { //player == scissors
        if (computerSelection == "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    
}

function game() {
    let playerInput = "";
    for (let i = 1; i <= 5; i++) {
        playerInput = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
        while ( ! (playerInput == "rock" || playerInput == "paper" || playerInput== "scissors" )) {
            console.log("Please enter rock, paper, or scissors: ")
            playerInput = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
        }
        console.log(`results of round ${i}: ` + playRound(playerInput, getComputerChoice()));
    }
}

game();



