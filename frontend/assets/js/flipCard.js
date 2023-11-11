let cardTransitionTime = 500;
let cards = document.querySelectorAll(".card");
let switching = false;

function flipCardListener() {
    cards = document.querySelectorAll(".card")
    cards.forEach((card) => card.addEventListener("click", flipCard = () => {
        console.log('clicked');
        card.classList.toggle("is-flipped");
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