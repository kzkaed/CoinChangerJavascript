/**
 * Coin Changer Javascript
 */
function CoinChanger(){}

var PENNY = 1; 
var NICKEL = 5;
var DIME = 10;
var QUARTER = 25;

var COINS = [QUARTER, DIME, NICKEL, PENNY];

CoinChanger.changer = function(cents){
    var coins = [];
    var i = 0;

    for (i; i < COINS.length; i++){
      while (cents >= COINS[i]){  
        coins.push (COINS[i]);
        cents -= COINS[i];
      }
    }
    return coins;
};





