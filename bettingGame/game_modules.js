const prompt = require("prompt-sync")();
const colors = require("colors");

const MINIMUM_GUESS = 1;
const MAXIMUM_GUESS = 10;
const MINIMUM_BET = 5;
const MAXIMUM_BET = 10;
const INITIAL_PLAYER_MONEY = 100;

const getGuess = function(){
  var guess = 0;
  do {
    guess = prompt(colors.white("Guess a number between "+ MINIMUM_GUESS + " and " + MAXIMUM_GUESS + " (inclusive): "));
  } while (guess > MAXIMUM_GUESS || guess < MINIMUM_GUESS )
  return parseInt(guess);
}

const getBet = function(){
  var bet = 0;
  do {
    bet = prompt(colors.white("Bet an amount between $"+ MINIMUM_BET + " and $" + MAXIMUM_BET + " (inclusive): "));
  } while (bet > MAXIMUM_BET || bet < MINIMUM_BET )
  return parseInt(bet);
}

const generateActual = function(){
  return Math.floor(Math.random() * MAXIMUM_GUESS + 1);
}

module.exports = {
  MINIMUM_BET: MINIMUM_BET,
  getGuess: getGuess,
  getBet: getBet,
  generateActual: generateActual
}