function startGame() {
    document.querySelector("#start-container").style.display = 'none';
    document.querySelector("#game-container").style.display = 'block';
    generateGame();
    setTimeout(hideCards, 5000);
}

function restartGame() {
    document.querySelector(".cards-wrapper").innerHTML = '';
    generateGame();
    setTimeout(hideCards, 5000);
}