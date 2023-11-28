let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame(){
    if (sum <= 21){
        message = "Do you want to draw a new card?";
    }else if (sum === 21){
        message = "You got a blackjack!";
        hasBlackJack = true;
    }else {
        message = "You got a bust!";
        isAlive = false;
    }
}

//cash out money
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);

