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

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

// function playGame() {
//     for (let i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection)};
//     return `humanScore ${humanScore}, computerScore ${computerScore}`;
// };

// console.log(playGame());

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "rock";
btn1.setAttribute("class", "rock button");

btn2.textContent = "paper";
btn2.setAttribute("class", "paper button");

btn3.textContent = "scissors";
btn3.setAttribute("class", "scissors button");

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

// document.body.setAttribute("style", "display: flex; align-items: center; justify-content: center; height: 100vh; width: 100vh;")

const div = document.createElement("div");
const runningScore = document.createElement("p");
document.body.appendChild(runningScore);

function eventFunction (event) {
    const computerSelection = getComputerChoice();
    div.textContent += `${playRound(event.target.textContent, computerSelection)}----`;
    runningScore.textContent += `[humanScore: ${humanScore}, computerScore: ${computerScore}]`
    if ((humanScore == 5)) {
    const result = document.createElement("p");
    document.body.appendChild(result);
    result.textContent = "You won";
    displayStatus("You Win")

    } else if (computerScore == 5) {
    const result = document.createElement("p");
    document.body.appendChild(result);
    result.textContent = "You lose";
    displayStatus("You Lose");
    };
    
}
// creating a function which will remove all the elements and display winner or loser status;

function displayStatus(status) {
    let nodesValue = document.querySelectorAll("button,div,p");
    let len = nodesValue.length;
    for (let i = 0; i < len; i++) {
        nodesValue[i].remove();

    }
    const div2 = document.createElement("div");
    document.body.appendChild(div2);
    div2.setAttribute("id", "status");
    div2.textContent = status;
}

btn1.addEventListener("click", eventFunction);

btn2.addEventListener("click", eventFunction);

btn3.addEventListener("click", eventFunction);

document.body.appendChild(div);




