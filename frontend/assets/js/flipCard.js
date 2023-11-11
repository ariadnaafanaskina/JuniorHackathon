let cardTransitionTime = 500;
const cards = document.querySelectorAll(".card");
let switching = false;

cards.forEach((card) => card.addEventListener("click", flipCard = () => {
    card.classList.toggle("is-flipped");
}));

function makeAllCardsNotFlipped() {
    cards.forEach((card) => {
        card.classList.remove("is-flipped");
    });
}