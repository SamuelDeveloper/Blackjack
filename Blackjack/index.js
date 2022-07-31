
let allCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let question = document.getElementById("question");
let summary = document.getElementById("sum");
let cards = document.getElementById("cards");
let newButton = document.getElementById("newCard");
let startButton = document.getElementById("startButton");
let randomCard = Math.floor(Math.random()*13) + 1;
let fold = document.getElementById("foldButton");
let dealer = document.getElementById("dealer")
let newGameButton = document.getElementById("newGame");


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if(!allCards.includes(random)) {
        allCards.push(random);
        return random
    } else {
        if(allCards.length < 13) {
            return getRandomCard();
        } else {
            return false;
        }
    }
}
function getRandomDealer() {
    return Math.floor(Math.random()*8) + 14;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    startButton.style.display = "none";
    newButton.style.display = "inline";
    fold.style.display = "inline";
    renderGame();
}

function renderGame() {

    cards.textContent = "Cards: ";

    for (let i = 0; i < allCards.length; i++ ) {
        cards.textContent += allCards[i] + ", ";
    }

if (sum < 21) {
    message = "Do you want to draw another card?";
} else if (sum === 21) {
    message = "You've got Blackjack!";
    fold.style.display = "none";
    newButton.style.display = "none";
    newGameButton.style.display = "inline";
} else {
    message = "You are out of the game";
    newButton.style.display = "none";
    fold.style.display = "none";
    newGameButton.style.display = "inline";
}
question.textContent = message;
summary.textContent = "Sum: " + sum;
}

function newCard() {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    summary.textContent = "Sum: " + sum; 
    renderGame();
}

function foldCards() {
    let dealerCards = getRandomDealer();
    dealer.textContent += dealerCards;
    fold.style.display = "none";
    newButton.style.display = "none";
    console.log(dealerCards);
    if (sum < dealerCards) {
        message = "You lose!";
    } else {
        message = "You win!";
    }
    question.textContent = message;
    newGameButton.style.display = "inline";
}
function newGame() {
    question.textContent = "Want to play a round?";
    dealer.textContent = "Dealer: ";
    cards.textContent = "Cards: ";
    summary.textContent = "Sum: "
    startButton.style.display = "inline";
    newGameButton.style.display = "none";
}