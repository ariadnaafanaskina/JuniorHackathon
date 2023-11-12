
// let imgArr = ['https://www.svgrepo.com/show/415020/yoyo-toys-kids.svg', 'https://www.svgrepo.com/show/415006/skates-rollerblade-skating.svg',
//     'https://www.svgrepo.com/show/415008/teddy-bear-child.svg', 'https://www.svgrepo.com/show/415013/dinosaur-kids-play.svg', //1
//     'https://www.svgrepo.com/show/415013/dinosaur-kids-play.svg', 'https://www.svgrepo.com/show/415007/console-device-game.svg',
//     'https://www.svgrepo.com/show/415020/yoyo-toys-kids.svg', 'https://www.svgrepo.com/show/415016/horse-rocking-child.svg', //2
//     'https://www.svgrepo.com/show/415006/skates-rollerblade-skating.svg', 'https://www.svgrepo.com/show/415008/teddy-bear-child.svg',
//     'https://www.svgrepo.com/show/415007/console-device-game.svg', 'https://www.svgrepo.com/show/415012/baseball-ball-bat.svg', //3
//     'https://www.svgrepo.com/show/415016/horse-rocking-child.svg', 'https://www.svgrepo.com/show/415018/baby-bottle-milk.svg',
//     'https://www.svgrepo.com/show/415012/baseball-ball-bat.svg', 'https://www.svgrepo.com/show/415018/baby-bottle-milk.svg',];

async function getCards() {
    const apiUrl = `https://80.90.188.96:5000/Game/GetGameToStart`;

    return await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            return data.gameCardWithPlacements;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
async function generateGame() {
    const arr = await getCards();
    let gameWrap = document.querySelector(".cards-wrapper");
    let n = 1;
    arr.forEach(img => {
        gameWrap.innerHTML += `<div id="${n}" class="card is-flipped unclickable">
                            <div class="card__face card__face--front"></div>
                            <div class="card__face card__face--back">
                                <img src="${img.url}" alt="">
                            </div>
                        </div>`;
        n++;
    });
    cards = document.querySelectorAll(".card")
    flipCardListener();
}
