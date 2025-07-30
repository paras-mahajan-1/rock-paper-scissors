// console.log("hello")

//  Creating new function for accepting user input

// Creating new function for creating random choices for rock, paper or scissors
// I'm going to use the math.random function to create this function

function getRandomArbitrary(min, max) {
    return Math.round(Math.random()* (max-min)+min);
}
// Converting the number to the required attribute for ex - rock, paper, scissors
function getComputerChoice(){
    let num = getRandomArbitrary(0,2)
    let attribute = ''
    if (num == 0) {
        attribute = 'rock'
    }
    else if (num == 1){
        attribute = 'paper'
    }
    else if (num == 2){
        attribute = 'scissors'
    }
    return attribute
}

// Getting human choice

function getHumanChoice(){
    
    let choice = prompt("Please enter your choice")
    return choice
}




// Creating function playround for the single round

function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice().toLowerCase()
    computerChoice = computerChoice()
    //playRound(getComputerChoice, getComputerChoice) Function checked
    // console.log(humanChoice, computerChoice)
    // console.log(`humanChoice ${humanChoice} computerChoice ${computerChoice}`)
    if (humanChoice == computerChoice) {
        return (`Match tied ${humanChoice} == ${computerChoice}`)
    }
    else if (((humanChoice == 'rock') & (computerChoice == 'scissors'))
         || ((humanChoice == 'scissors') & (computerChoice == 'paper')) || 
        ((humanChoice == 'scissors') & (computerChoice == 'paper'))) {
        humanScore = humanScore + 1
        return (`You win ${humanChoice} wins ${computerChoice}`)
    }
    else {
        computerScore = computerScore + 1
        return (`You lost ${humanChoice} beats ${computerChoice}`)
    }
    
}
// console.log(playRound(humanChoice = getHumanChoice, computerChoice= getComputerChoice))
// Inializing two variables humanscore and computer with 0 value
let humanScore = 0;
let computerScore = 0;

function playGame(){
    console.log("Choices: rock, paper or scissors")
    let numberOfTimesToPlay = prompt("How many times you want to play the game? ");
    for (let index = 1; index <= numberOfTimesToPlay; index++) {
        console.log(playRound(getHumanChoice, getComputerChoice))

    }
    console.log(`humanScore ${humanScore} ---- computerScore ${computerScore}`)
}

playGame()