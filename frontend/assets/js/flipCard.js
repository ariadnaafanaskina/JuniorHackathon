let cardTransitionTime = 500;
let cards = document.querySelectorAll(".card");
let cardsWrapper = document.querySelector(".cards-wrapper")
let switching = false;


function flipCardListener() {
    cards = document.querySelectorAll(".card");
    let lastSeenCard = null

    cards.forEach((card) => card.addEventListener("click", flipCard = () => {

        card.classList.add("is-flipped");

        if (lastSeenCard) {
            if (lastSeenCard.children[1].children[0].src === card.children[1].children[0].src) {
                lastSeenCard = null;
                return;
            } else {
                cardsWrapper.style.pointerEvents = 'none';

                setTimeout(() => {
                    lastSeenCard.classList.remove('is-flipped');
                    card.classList.remove('is-flipped');
                    lastSeenCard = null;
                    cardsWrapper.style.pointerEvents = '';
                }, 400)
                return;
            }
        }
        lastSeenCard = card
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