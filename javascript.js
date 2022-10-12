/*need to make rounds
how computer chooses
player chooses 

array that holds [rock,paper, sciccors]
*/
var rounds = 5;
var userChoice ="NO VALUE";
var computerChoice ="NO VALUE";

const chooseRPS = ["rock","paper","Scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComChoice(){
    computerChoice = chooseRPS[getRandomInt(3)];
    console.log("Local choice from function" + computerChoice);
}
getComChoice();