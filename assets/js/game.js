

//Fight Function
var fight = function(enemy) {
    

    while(playerInfo.health>0 && enemy.health >0 ) {
    // Option to FIGHT or SKIP 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // THEN: confirm player wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
         // if yes (true), leave fight
        if (confirmSkip) {
         window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
         // THEN subtract money from playerMoney for skipping
         playerInfo.money = mathMax(0, [playerInfo.money]-10);
        console.log("playerInfo.money", playerInfo.money);
         break;
    }
  }
 
//FIGHT
    // 1. remove enemy's health by subtracting the amount set in the playerAttack variable
        // generate random damage value based on player's attack power
         var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
  
     // 1.a check enemy's health
             if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
                //Award player money
            playerInfo.money = playerInfo.money + 20;
                //Enemy leave while loop since enemy is dead
            break ; }    

            else {
            window.alert(enemy.name + " still has " + enemy.health + " health left."); }
  
        // 2. remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            
            console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
  
         // 2.a check player's health
             if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;} 
               
            else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health  left."); }
            }

};



var startGame = function () {
playerInfo.reset();
 for(var i = 0; i < enemyInfo.length; i++) {

    //Let Player know which round we are in 
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
    var pickedEnemyObj = enemyInfo[i];
     
    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);
   
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
          playerInfo.refillHealth
      break;
    case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack
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
 
  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
 }, // comma!
    upgradeAttack: function() {
        if (this.money >= 7){
      this.attack += 6;
      this.money -= 7;
        }
    }
  };


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

//call
startGame ();