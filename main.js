function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)]
}


function playRound (computerSelection, playerSelection) {
    let input =  playerSelection.toLowerCase();
    if (input === "rock"){
        switch (computerSelection) {
            case "Rock":
                return "Draw!";
            case "Paper":
                return "You Lose! Paper beats Rock";
            case "Scissors":
                return "You Win! Rock beats Scissors";
        }
    }
    else if (input === "paper"){
        switch (computerSelection) {
            case "Paper":
                return "Draw!";
            case "Rock":
                return "You Win! Paper beats Rock";
            case "Scissors":
                return "You Lose! Scissors beats Paper";
        }
    }
    else if (input === "scissors") {
        switch (computerSelection) {
            case "Scissors":
                return "Draw!";
            case "Paper":
                return "You Win! Scissors beats Paper";
            case "Rock":
                return "You Lose! Rock beats Scissors";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let choose = prompt("Please a choose an element");
        let round = playRound(getComputerChoice(), choose);

        if (round.substring(0,7) === "You Win") {
            playerScore++;
        }
        else if (round.substring(0, 8) === "You Lose") {
            computerScore++;
        }
        console.log(round);
        console.log("Round " + (i + 1))
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    if (playerScore < computerScore) {
        console.log("You lost.");
    }
    else if (playerScore > computerScore) {
        console.log("You won the game.")
    }
    else {
        console.log("DRAW!")
    }
}

game();