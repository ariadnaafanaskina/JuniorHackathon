function startGame() {
    document.querySelector("#start-container").style.display = 'none';
    document.querySelector("#game-container").style.display = 'block';
    generateGame();
    setTimeout(() => {
        makeAllCardsNotFlipped();
        makeClickable()
    }, 4000);
}

function restartGame() {
    closeModal();
    document.querySelector(".cards-wrapper").innerHTML = '';
    movesNumber = 0;
    correctPairsNumber = 0;
    movesNumberElem.innerHTML = '0';
    generateGame();
    setTimeout(() => {
        makeAllCardsNotFlipped();
        makeClickable()
    }, 4000);
}

function makeClickable() {
    cards = document.querySelectorAll(".card");

    cards.forEach((card) => card.classList.remove("unclickable"));
}