var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;

//Note to remember to console log.
console.log(playerName, playerAttack, playerHealth);


var enemyName = "Roberto" ;
var enemyHealth = 50 ;
var enemyAttack = 12 ;

// console
console.log(enemyName, enemyHealth, enemyAttack);

//Fight Function

var fight = function() {
    window.alert ("Welcome to Robot Gladiators!");
// subtract the value of player Attack from the value of enemy health and use that result to update the value in the enemy health variable 
    enemyHealth = enemyHealth - playerAttack;

//log result message to console 
console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
);

//check enemy health

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
//subtrat the value of enemyAttack from the value of playerHealth and use result to update playerHealth
    playerHealth = playerHealth - enemyAttack ;

//log to console
console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
);

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

};

/* Bottom of page  to execute the function*/

 fight();