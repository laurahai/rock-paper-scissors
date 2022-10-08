
/*EVENTS*/
const btns = document.querySelectorAll('.button');

var counter = 0;
var wins = 0;

btns.forEach((button) => {
    button.addEventListener('click', function (e) {
        counter++;
        let playerChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        document.querySelector('.round-results').textContent = `Computer's choice: ${computerChoice}. ${roundResult} this round!`;
        document.querySelector('.games-results').textContent = `You won ${wins} out of ${counter} rounds.`;

        if (counter >= 5) {
            if (wins/counter > 0.5) {
                document.querySelector('.games-results').textContent = `You won ${wins} out of ${counter} rounds. ` +
                "You win the game!";
                counter = 0;
                wins = 0;
            }
            else {
                document.querySelector('.games-results').textContent = `You won ${wins} out of ${counter} rounds. ` +
                "You lose the game!";
                counter = 0;
                wins = 0;
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
            return `You lose`;
        }
    }

    else { //player == scissors
        if (computerSelection == "rock") {
            return `You lose`;
        }
        else {
            wins++;
            return `You win`;            
        }
    }

}