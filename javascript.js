/*need to make rounds
how computer chooses
player chooses 

array that holds [rock,paper, sciccors]
*/
var rounds = 5;
var userChoice ="NO VALUE";
var computerChoice ="NO VALUE";


const chooseRPS = ["rock","paper","scissor"];

const userRock = document.querySelector('#userRock');
const userPaper = document.querySelector('#userPaper');
const userScissor = document.querySelector('#userSisscor');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComChoice(){
    return computerChoice = chooseRPS[getRandomInt(3)];
    //console.log("Local choice from function " + computerChoice);
}

//Want to figure out hashTable and apply it
function getWinner(insertUser,insertCom){
   

    if (insertUser ==="rock"){
        if(insertUser === insertCom){
            console.log("Tie from rock");
        }else if (insertCom === "paper"){
            console.log("Lose from rock to paper");
        }else{
            console.log("Win from rock to scissor");
        }

    }else if(insertUser ==="paper"){
        if(insertUser === insertCom){
            console.log("Tie from paper");
        }else if(insertCom === "scissor"){
            console.log("Lose from paper to scissor");
        }else{
            console.log("Win from paper to rock");
        }

    }else{
        if(insertUser === insertCom){
            console.log("Tie from scissor ");
        }else if(insertCom === "rock"){
            console.log("Lose from scissor to rock");
        }else{
            console.log("Win from scissor to paper")
        }
    }
}

userRock.addEventListener('click',() =>{
   userChoice = chooseRPS[0]
   computerChoice = getComChoice();

   getWinner(userChoice,computerChoice);
   
});
userPaper.addEventListener('click',() =>{
    userChoice = chooseRPS[1]
    computerChoice = getComChoice();
    
   getWinner(userChoice,computerChoice);
});

userSisscor.addEventListener('click',() =>{
    userChoice = chooseRPS[2]
    computerChoice = getComChoice();

   getWinner(userChoice,computerChoice);
});

