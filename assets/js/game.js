var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50 ;
var enemyAttack = 12 ;

// console

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

//for loop or 


//Fight Function
var fight = function(enemyName) {
    window.alert ("Welcome to Robot Gladiators!");
// Option to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

    // 1. remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
  
     // 2. check enemy's health
             if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
    }        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
  
      // 3. remove player's health by subtracting the amount set in the enemyAttack variable
         playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );
  
     // 4. check player's health
    if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
     } else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
        //Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?") 
        
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
           
            //Subtract player money 
            playerMoney = playerMoney - 2;
        }
   
  //if no skip
        else {
            fight();
        }
        } 
 //invalid input
        else {
        window.alert("You need to choose a valid option. Try again!");       
    };
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }