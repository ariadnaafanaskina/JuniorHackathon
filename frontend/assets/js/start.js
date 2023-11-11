function startGame() {
    document.querySelector("#start-container").style.display = 'none';
    document.querySelector("#game-container").style.display = 'block';
    generateGame();
    makeAllCardsFlipped();
    setTimeout(makeAllCardsNotFlipped, 5000);
}

function restartGame() {
    document.querySelector(".cards-wrapper").innerHTML = '';
    generateGame();
    makeAllCardsFlipped();
    setTimeout(makeAllCardsNotFlipped, 5000);
}