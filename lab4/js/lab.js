// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


// Sticks
// Practicing with Pseudocode!
// Donovan and Mason 
// October 2024

  //Create Visual gameboard
    //At start, draw two hands. fingers = points. each hand has one finger displayed at start of game.
      //Without telling player, assign “points”. at start of game, each player has two “points”.
  //First Player Moves (two possibilities)
    //Attack: Player chooses one of their hands
      //and chooses one of their opponent’s “hands” to attack]
    //Split
      //Player chooses one of their hands and chooses how many points to to move from one hand to their other. ex hand1 has 4 points, hand 2 has 1, player “splits” and moves two points from hand 1 to hand 2.
        //Can not split points to be more than five per hand ie can not force their own hand from play.
        //Can not split points to dead hand.
  //Validate move
    //If attack, add numerical value of fingers displayed from player's hand to opponent’s hand. ie, if player’s hands = x, and opponent’s hand equals y, add x and y to create new hand for opponent.
      //If points for opponents hand equal or above 5, stop counting and remove hand from play.
    //If split, subtract chosen numerical value of points from one hand and add to the other hand.
      //If points on one hand equals or exceeds or exceed 5, return error and
        //Go back to step 2
  //Redraw gameboard to match current points
    //Display for both opponents
    //If numerical value on either players hand equals or exceeds 5 at end of turn, stop counting and remove hand from play.
  //Test for win condition
    //If one players points at or above 10, end game. other player is declared winner]
      //Else, move to next player

  //Second player moves. Two possibilities.
    //Attack: player chooses one of their hands
      //and chooses one of their opponent’s “hands” to attack]
    //Split
      //Player chooses one of their hands and chooses how many points to to move from one hand to their other. ex hand1 has 4 points, hand 2 has 1, player “splits” and moves two points from hand 1 to hand 2.
        //Can not split points to be more than five per hand ie can not force their own hand from play.
        //Can not split points to dead hand.
  //Validate move
    //If attack, add numerical value of fingers displayed from player's hand to opponent’s hand. ie, if player’s hands = x, and opponent’s hand equals y, add x and y to create new hand for opponent.
      //If points for opponents hand equal or above 5, stop counting and remove hand from play
    //If split, subtract chosen numerical value of points from one hand and add to the other hand.
      //If points on one hand equals or exceeds or exceed 5, return error and
        //Go back to step 2
  //Redraw gameboard to match current points
    //Display for both opponents
    //If numerical value on either players hand equals or exceeds 5 at end of turn, stop counting and remove hand from play.
  //Test for win condition
    //If one players points at or above 10, end game. Other player is declared winner.
      //Else, first player moves. Return to step two.
