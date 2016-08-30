// TODO: This code is not up to standards. A lot of refactoring needs to be done.

const FS = require("fs");
const DATA_PATH = './scores'
const DATA_TEMPLATE = {data:[]}
var jsondata = {};
var playerName = "Anonymous"

const gameModules = require("./game_modules");
const prompt = require("prompt-sync")();
const colors = require("colors");

var playerMoney = 100;

const printLeaderBoard = function(){
  const leaderboard = jsondata.data.sort((a, b)=> b.wins - a.wins );
  leaderboard.forEach(object=> console.log(object.name, object.wins));
}

const initializeBoard = function(){
  FS.open(DATA_PATH, 'wx', (err, fd)=>{
    if(err){
      FS.readFile(DATA_PATH, (err, data)=>{
        if(err) throw err;
        jsondata = JSON.parse(data);
        playGame();
      });
    } else {
      FS.writeFile(DATA_PATH, JSON.stringify(DATA_TEMPLATE), (err)=>{
        if(err) throw err;
        console.log("saved!");
        playGame();
      });
    }
  })
}

const addPlayerWin = function(name){
  playerExists = jsondata.data.some((object, index)=>{
    return object.name === name
  });

  if(playerExists){
    jsondata.data.forEach(function(object, index){
      if(object.name === name){
        jsondata.data[index].wins += 1;
      }
    });
  } else {
    const newPlayer = {"name": name, wins: 1};
    jsondata.data.push(newPlayer);
  };
}

const writeToBoard = function(){
  FS.writeFile(DATA_PATH, JSON.stringify(jsondata), (err)=>{
    if(err) throw err;
    console.log("saved!");
  });
}

function playGame(){

  playerName = prompt("What is your name?").trim();

  do{

  const getGuessDifference = function(){
    var guess = gameModules.getGuess();
    var actual = gameModules.generateActual();
    console.log(colors.white("The number was", actual));
    console.log(colors.white("You guessed", guess));
    return Math.abs(guess - actual);
  }

  const playRound = function(bet){
    var bet = bet;
    switch(difference){
      case 0:
        console.log(colors.green("You are returned double your bet!"));
        addPlayerWin(playerName);
        break;
      case 1:
        console.log(colors.green("You are returned your bet."));
        bet = 0;
        break;
      default:
        console.log(colors.red("You lose your bet!"));
        bet *= -1;
        break;
    }
    return bet;
  }
  printLeaderBoard();

  //TODO: do not accept letters as inputs

  var bet = gameModules.getBet();
  var difference = getGuessDifference();
  playerMoney += playRound(bet)

  console.log(colors.white("You have", playerMoney, "dollars."))

} while (playerMoney > gameModules.MINIMUM_BET)

console.log(colors.red("You lose!"));
writeToBoard();

// TODO: Add option to play again?

}

initializeBoard();