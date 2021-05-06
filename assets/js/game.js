var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50 ;
var enemyAttack = 12 ;



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
         playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
         break;
    }
  }
  //0.a if player choses to FIGHT
        if (promptFight === "fight" || promptFight === "FIGHT") {

    // 1. remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
  
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
         playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
  
         // 2.a check player's health
             if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;} 
                //or 
            else {
            window.alert(playerName + " still has " + playerHealth + " health left."); }
            }

};
}





//for loop or Function Fight Call
for(var i = 0; i < enemyNames.length; i++) {
    //Let Player know which round we are in 
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

    //Pick an enemy
    var pickedEnemyName = enemyNames [i];
      //Reset Enemy health
     enemyHealth = 50;
    // call fight function with enemy-robot
    fight(pickedEnemyName);
    }

    else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;}
    
    }