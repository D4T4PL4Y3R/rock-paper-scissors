const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;  
}