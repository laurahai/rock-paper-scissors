
/*EVENTS*/
const btns = document.querySelectorAll('.button');

var counter = 0;
var wins = 0;
var losses = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.final-results').textContent = "";
        counter++;
        let playerChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        document.querySelector('.round-results').textContent = `Computer's choice: ${computerChoice}. ${roundResult} this round!`;
        document.querySelector('.games-results').textContent = `Player | ${wins} vs ${losses} | Computer`;

        if (wins >= 5 || losses >= 5) {
            if (wins > losses) {
                document.querySelector('.final-results').textContent = `You win the game after ${counter} rounds!`;
                counter = 0;
                wins = 0;
                losses = 0;
            }
            else {
                document.querySelector('.final-results').textContent = `You lose the game after ${counter} rounds!`;
                counter = 0;
                wins = 0;
                losses = 0;
            }
        }
    });
});

/*COMPUTER CHOICE*/
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

/*PLAY ONE ROUND*/
function playRound(playerSelection, computerSelection) {

    console.log("player selects: " + playerSelection);
    console.log("computer selects: " + computerSelection);

    if (computerSelection == playerSelection) {
        return "It's a tie for";
    }

    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            losses++;
            return `You lose`;
        }
        else {
            wins++;
            return `You win`;
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            wins++;
            return `You win`;
        }
        else {
            losses++;
            return `You lose`;
        }
    }

    else { //player == scissors
        if (computerSelection == "rock") {
            losses++;
            return `You lose`;
        }
        else {
            wins++;
            return `You win`;            
        }
    }

}