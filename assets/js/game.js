var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50 ;
var enemyAttack = 12 ;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//Fight Function
var fight = function(enemyName) {
    while(playerHealth>0 && enemyHealth>0 ) {
    // Option to FIGHT or SKIP 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // THEN: confirm player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
         // if yes (true), leave fight
        if (confirmSkip) {
         window.alert(playerName + " has decided to skip this fight. Goodbye!");
         // THEN subtract money from playerMoney for skipping
         playerMoney = mathMax(0, playerMoney-10);
        console.log("playerMoney", playerMoney);
         break;
    }
  }
 
//FIGHT
    // 1. remove enemy's health by subtracting the amount set in the playerAttack variable
        // generate random damage value based on player's attack power
         var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
  
     // 1.a check enemy's health
             if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
                //Award player money
            playerMoney = playerMoney + 20;
                //Enemy leave while loop since enemy is dead
            break ; }    

            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left."); }
  
        // 2. remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
  
         // 2.a check player's health
             if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;} 
               
            else {
            window.alert(playerName + " still has " + playerHealth + " health left."); }
            }

};


//for loop or Function Fight Call
var startGame = function () {

 for(var i = 0; i < enemyNames.length; i++) {

    //Let Player know which round we are in 
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
    var pickedEnemyName = enemyNames[i];
     
    enemyHealth = randomNumber(40, 60);

    fight(pickedEnemyName);
   
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // if yes, take them to the store() function
        if (storeConfirm) { 
          shop();
        }
      }
}

    else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    }  
    }
    endGame();
}

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
      // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
        // restart the game
        startGame();
        } 
        else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
 }

 var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );
      // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL":
      case  "refill":
        if (playerMoney>=7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
        }
        else {
            window.alert ("You dont have enough money!");
        }

      break;
    case "upgrade":
        case "UPGRADE":
        if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
        }
        else {
            window.alert ("You don't have enough money!")
        }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
  };
  // function to generate a random numeric value
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };
//call
startGame ();