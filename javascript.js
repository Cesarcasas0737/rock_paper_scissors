/*need to make rounds
how computer chooses
player chooses 

array that holds [rock,paper, sciccors]
*/
var maxWins = 5;
var userScore = 0;
var comScore = 0;
var resultDis ="";
var playedRounds = 0;

var userChoice ="NO VALUE";
var computerChoice ="NO VALUE";

const com_score = document.querySelector('#com_score');
const round = document.querySelector('#rounds')
const user_score = document.querySelector('#user_score');
const result = document.querySelector('#result');

const resultArr =["You Won","You Lost","It's a Tie"];
const chooseRPS = ["rock","paper","scissor"];

const userRock = document.querySelector('#userRock');
const userPaper = document.querySelector('#userPaper');
const userScissor = document.querySelector('#userSisscor');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComChoice(){
    return computerChoice = chooseRPS[getRandomInt(3)];
    
}

//Going to rewrite logic a bit to make less repetitive with code
//Implament a switch idea with resultDis to then direct towards the 
//win, loss, tree where seprate things will happe.
function getWinner(insertUser,insertCom){

    if (insertUser ==="rock"){
        if(insertUser === insertCom){
            console.log("Tie from rock");
            resultDis = resultArr[2];
        }else if (insertCom === "paper"){
            console.log("Lose from rock to paper");
            resultDis = resultArr[1];
        }else{
            console.log("Win from rock to scissor");
            resultDis = resultArr[0];
        }

    }else if(insertUser ==="paper"){
        if(insertUser === insertCom){
            console.log("Tie from paper");
            resultDis = resultArr[2];
        }else if(insertCom === "scissor"){
            console.log("Lose from paper to scissor");
            resultDis = resultArr[1];
        }else{
            console.log("Win from paper to rock");
            resultDis = resultArr[0];
        }

    }else{
        if(insertUser === insertCom){
            console.log("Tie from scissor ");
            resultDis = resultArr[2];
        }else if(insertCom === "rock"){
            console.log("Lose from scissor to rock");
            resultDis = resultArr[1];
        }else{
            console.log("Win from scissor to paper")
             resultDis = resultArr[0];
        }

    }

    if (resultDis === resultArr[0]){
        userScore++;
        //win
    }else if(resultDis === resultArr[1]){
        comScore++;
        //lose
    }else{
        //tie
    }
    playedRounds++;
    
}

function updateScore(){
    user_score.innerHTML = "User: " + userScore;
    com_score.innerHTML = "Com: " + comScore;
    round.innerHTML = "Rounds:" + playedRounds;
    result.innerHTML = resultDis;
}

user_score.innerHTML = "User: " + userScore;
com_score.innerHTML = "Com: " + comScore;
round.innerHTML = "Rounds:" + playedRounds;



userRock.addEventListener('click',() =>{
   userChoice = chooseRPS[0]
   computerChoice = getComChoice();

   getWinner(userChoice,computerChoice);
   updateScore()
});

userPaper.addEventListener('click',() =>{
    userChoice = chooseRPS[1]
    computerChoice = getComChoice();
    
   getWinner(userChoice,computerChoice);
   updateScore()
});

userSisscor.addEventListener('click',() =>{
    userChoice = chooseRPS[2]
    computerChoice = getComChoice();

   getWinner(userChoice,computerChoice);
   updateScore()
});


