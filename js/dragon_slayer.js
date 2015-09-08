var slaying = true;
var youHit = Math.floor(Math.random());
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon for " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    if (totalDamage >= 4) {
      console.log("The dragon has been slain! Huzzah!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random());
      damageThisRound = Math.floor(Math.random() * 5 + 1);
    }
  } else {
    console.log("Alas, the dragon has defeated you.");
    slaying = false;
  }
}
