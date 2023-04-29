//create choices Array
const choices = ["rock", "paper", "scissors"];

//Function get computer choice 
//Computer can choose between rock, paper and scissors and randomly returns these values as a string. 

function getComputerChoice(){

   return randomNumber = choices[Math.floor(Math.random()*choices.length)];

}

//Playerselection
function getPlayerSelection(){
   let playerChoice = prompt("Type rock, paper or scissors");
   while (playerChoice == null){
      playerChoice = prompt("Type rock, paper or scissors");
   }
   playerChoice = playerChoice.toLowerCase();
   console.log(playerChoice);
}