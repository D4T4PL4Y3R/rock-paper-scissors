const choices = ["Rock", "Paper", "Scissors"];

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
        } else {
            console.log("You lost!")
        }
    }   else {
        playRound()
    }

    
}