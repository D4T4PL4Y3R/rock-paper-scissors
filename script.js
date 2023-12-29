const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;  
}

function playRound() {
    let computerChoice = getComputerChoice()
    let userChoice = prompt("What shall you choose?");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase()

    if (userChoice == "Rock" || userChoice == "Paper" || userChoice == "Scissors") {
        if (userChoice == computerChoice) {
            console.log("It's a tie!")
        } else if (userChoice == "Rock" && computerChoice == "Scissors" || userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You win!")
            playerScore++;
        } else {
            console.log("You lost!")
            computerScore++;
        }
    }   else {
        playRound()
    }

    
}

function game(n) {
    n = 5;
    for (let i = 0; i < n; i++) {
        playRound()
    } 
    if (playerScore == computerScore) {
        console.log("Game over! It's a tie")
        console.log(`Final score is User: ${playerScore}  Computer: ${computerScore}`)
    } else if (playerScore > computerScore) {
        console.log("Game over! You have won!")
        console.log(`Final score is User: ${playerScore}  Computer: ${computerScore}`)
    } else {
        console.log("Game over! Computer has beaten you!")
        console.log(`Final score is User: ${playerScore}  Computer: ${computerScore}`)
    }
}