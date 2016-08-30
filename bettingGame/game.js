const gameModules = require("./game_modules");
const colors = require("colors");

var playerMoney = 100;

do{
  const getGuessDifference = function(){
    var guess = gameModules.getGuess();
    var actual = gameModules.generateActual();
    console.log(colors.white("The number was", actual));
    console.log(colors.white("You guessed", guess));
    return Math.abs(guess - actual);
  }

  const playRound = function(bet){
    switch(difference){
      case 0:
        console.log(colors.green("You are returned double your bet!"));
        return bet
      case 1:
        console.log(colors.green("You are returned your bet."));
        return 0
      default:
        console.log(colors.red("You lose your bet!"));
        return bet*(-1)
    }
  }

  var bet = gameModules.getBet();
  var difference = getGuessDifference();
  playerMoney += playRound(bet)

  console.log(colors.white("You have", playerMoney, "dollars."))

} while (playerMoney > gameModules.MINIMUM_BET)

console.log(colors.red("You lose!"));