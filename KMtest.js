
function cardObject(name, value){
  this.name = name;
  this.value = value;
}

let cardDeck = {
  name: "ace1", value: 1,
  name: "two", value: 2,
  name: "three", value: 3,
  name: "four", value: 4,
  name: "five", value: 5,
  name: "six", value: 6,
  name: "seven", value: 7,
  name: "eight", value: 8,
  name: "nine", value: 9,
  name: "king", value: 10,
  name: "queen", value: 10,
  name: "jack", value: 10,
  name: "ace11", value: 11,
};

console.log(cardDeck(name.value))


// let deck = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// let total = 0;
// let lowCards = ["2", "3", "4", "5", "6", "7", "8", "9"];
// let faceCards = ["10"];
// let aceCard = ["1" || "11"];
//
// if hand === "21"
//   console.log("Blackjack");
//
// else if hand > "21"
//   console.log("You lose!")
//
//
//   function getCardValue(cardValue) {
//       var cardValue = 0;
//
//       if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
//           cardValue = 10;
//
//       } else if (cardValue === 'A') {
//           cardValue = 11;
//
//       } else {
//           cardValue = Number(cardValue);
//
//       }
//
//       return cardValue;
//   }

// Could use this to run if Ace is = to 11 instead of 1

// for (i = 0; i < hand.length; i++)
//  if (total == "A" && total <= 11)
//    total += 10;

// parseInt() parses a string and returns a whole number.
// parseInt("10"); // returns 10

// let number = ["2", "3", "4", "5", "6", "7", "8", "9"];
// let ace = 11;
// let faceCards = ["king", "queen", "jack"];
//   faceCards = 10;
//
// for( let i = 0; i < number.ace.faceCards.length; i++ ){
//     number[ i ] += ace[i] += faceCards[i];
// }
//
// console.log( number + ace + faceCards );
