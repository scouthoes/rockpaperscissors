'use strict';

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3 + 1);

    if(rand === 1){
        return "rock";
    }else if (rand === 2){
        return "paper";
    }else if (rand === 3){
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let p = prompt("Choose your weapon: ");
    let p1 = p.toLowerCase();
    if(p1 === "rock"){
        return "rock";
    }else if (p1 === "paper"){
        return "paper";
    }else if (p1 === "scissors"){
        return "scissors";
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log(`It's a tie! Both players picked ${humanChoice}`);
        return;
    }
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    }else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
}
playRound("ROCK", "scissors");
playRound("scissors", "rock");
playRound("papeR", "paper");

console.log(`${humanScore} ${computerScore}`);

