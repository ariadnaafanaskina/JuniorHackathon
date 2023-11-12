let cardTransitionTime = 500;
let cards = document.querySelectorAll(".card");
const cardsWrapper = document.querySelector(".cards-wrapper");
const movesNumberElem = document.querySelector('#moves-number');

let movesNumber = 0;
let correctPairsNumber = 0;
let wins = 0;
movesNumberElem.innerHTML = movesNumber;


function flipCardListener() {
    cards = document.querySelectorAll(".card");
    let lastSeenCard = null;

    cards.forEach((card) => card.addEventListener("click", flipCard = () => {
        if (!card.classList.contains("unclickable")) {
            card.classList.add("is-flipped");

            if (lastSeenCard && (lastSeenCard.id !== card.id)) {
                if (!(lastSeenCard.children[1].children[0].src === card.children[1].children[0].src)) {
                    cardsWrapper.style.pointerEvents = 'none';

                    setTimeout(() => {
                        lastSeenCard.classList.remove('is-flipped');
                        card.classList.remove('is-flipped');
                        lastSeenCard = null;
                        cardsWrapper.style.pointerEvents = 'auto';
                    }, 400)
                } else {
                    lastSeenCard.classList.add('unclickable');
                    card.classList.add('unclickable');
                    correctPairsNumber++;
                    checkWin();
                    lastSeenCard = null;
                }
                movesNumber++;
                movesNumberElem.innerHTML = movesNumber;
            } else {
                lastSeenCard = card;
            }
        }
    }));
}

function makeAllCardsNotFlipped() {
    cards.forEach((card) => {
        card.classList.remove("is-flipped");
    });
}

function makeAllCardsFlipped() {
    cards.forEach((card) => {
        card.classList.toggle("is-flipped");
    });
}

function checkWin() {
    if (correctPairsNumber == 8) {
        wins++;
        openModal();
    }
}