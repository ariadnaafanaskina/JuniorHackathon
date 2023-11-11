
let imgArr = ['https://www.svgrepo.com/show/415020/yoyo-toys-kids.svg', 'https://www.svgrepo.com/show/415006/skates-rollerblade-skating.svg',
    'https://www.svgrepo.com/show/415008/teddy-bear-child.svg', 'https://www.svgrepo.com/show/415013/dinosaur-kids-play.svg', //1
    'https://www.svgrepo.com/show/415013/dinosaur-kids-play.svg', 'https://www.svgrepo.com/show/415007/console-device-game.svg',
    'https://www.svgrepo.com/show/415020/yoyo-toys-kids.svg', 'https://www.svgrepo.com/show/415016/horse-rocking-child.svg', //2
    'https://www.svgrepo.com/show/415006/skates-rollerblade-skating.svg', 'https://www.svgrepo.com/show/415008/teddy-bear-child.svg',
    'https://www.svgrepo.com/show/415007/console-device-game.svg', 'https://www.svgrepo.com/show/415012/baseball-ball-bat.svg', //3
    'https://www.svgrepo.com/show/415016/horse-rocking-child.svg', 'https://www.svgrepo.com/show/415018/baby-bottle-milk.svg',
    'https://www.svgrepo.com/show/415012/baseball-ball-bat.svg', 'https://www.svgrepo.com/show/415018/baby-bottle-milk.svg',];
let hasWon = false;

function generateGame() {
    let gameWrap = document.querySelector(".cards-wrapper");
    hasWon = false;

    imgArr.forEach(img => {
        gameWrap.innerHTML += `<div class="card">
                    <img class="card-icon" src="${img}" alt="">
                </div>`;
    })
}

function hideCards() {
    const cards = document.querySelectorAll('.card-icon');
    cards.forEach((card) => card.style.visibility = 'hidden')
}