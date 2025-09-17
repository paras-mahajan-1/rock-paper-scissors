// console.log("Hello World"); system working;

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function getComputerChoice() {
    const value = +getRandomArbitrary(0,2);
    if (value === 0) return "rock";
    if (value === 1) {return 'paper'}
    if (value === 2) {return 'scissors'};
}

function getHumanChoice() {
    const getPrompt = prompt("Please enter one value among rock, paper or scissors!");
    return getPrompt;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) return "Match tied";
    if (((humanChoice === 'rock') && (computerChoice === 'scissors')) 
        || ((humanChoice === 'scissors') && (computerChoice === 'paper')) 
        || ((humanChoice === 'paper') && (computerChoice === 'rock'))) {
            humanScore += 1;
            return `You Win! ${humanChoice} wins ${computerChoice}`;
    } else {
        computerScore += 1;
    return `You lose! ${computerChoice} beats ${humanChoice}`};
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

function playGame() {
    for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)};
    return `humanScore ${humanScore}, computerScore ${computerScore}`;
};

console.log(playGame());

