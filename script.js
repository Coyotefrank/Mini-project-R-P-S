var computer = ['R', 'P', 'S']
var player = ['R', 'P', 'S']

var results = window.prompt("Please type in R,P,S"); 




function playGame() {
   alert("the game starts now!");
   console.log (results)   
   if (results){
       game();
       alert("do you want to play again?");
   } 
   else{
    alert("you lose")
   }
}


function game(){
 var resulthuman = prompt ("Please type uppercase");
 var computerIndex =Math.floor (Math.random ()+computer.length);
 var resultcomputer = computer [computerIndex];
 if (resulthuman=resultcomputer){
    "we are even"

 } elseif() 
 (resulthuman=="R" && resultcomp=="S") ||
 (resulthuman=="P" && resultcomp=="R") ||
 (resulthuman=="S" && resultcomp=="P") ||

 alert ("you win! becuase the compiter chose"+ resultcomp)
 }
   { elseif
    alert("you lose, becuase the computer chose"+resulthuman)
 }
 



  startGame()