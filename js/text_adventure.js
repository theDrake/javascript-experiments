confirm("Ready to play?");

var user = prompt("A necromancer approaches. What do you do?").toLowerCase(),
    userPower = Math.random(),
    enemyPower = Math.random(),
    userSpeed = Math.random(),
    enemySpeed = Math.random();

switch (user) {
  case 'talk':
  case 'chat':
    console.log("You have a lovely conversation.");
    break;
  case 'fight':
  case 'attack':
    if (userPower > enemyPower && userSpeed > enemySpeed)
      console.log("The necromancer is now a pile of ashes at your feet.");
    else
      console.log("You are now a pile of ashes at the necromancer's feet.")
    break;
  case 'flee':
  case 'run':
    if (userSpeed > enemySpeed || userPower > enemyPower)
      console.log("You barely escape with your life!");
    else
      console.log("The necromancer dispatches you with a bolt of lightning.");
    break;
  default:
    console.log("The necromancer is not impressed. And you are dead.");
    break;
}
