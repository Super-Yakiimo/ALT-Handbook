const DIM = [
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 6, y: 6 },
    { x: 8, y: 8 },
    { x: 10, y: 10 },
]

const TYPHOON = [
    "typhoon/ten.png",
    "typhoon/minus10.png",
    "typhoon/twenty.png",
    "typhoon/minus20.png",
    "typhoon/thirty.png",
    "typhoon/minus30.png",
    "typhoon/fourty.png",
    "typhoon/minus40.png",
    "typhoon/fifty.png",
    "typhoon/minus50.png",
    "typhoon/switch.jpg",
    "typhoon/timesTwo.png",
    "typhoon/typhoon.jpg",
]

function makeCards(width, height, vocab) {
    let cardList = [];

    let dim = 100 * (1 / width);
    let heightText = `height: ${dim}%`;
    let widthText = `width: ${dim}%`;

    let cardRoot = document.querySelector('.game');

    for (let i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.className = 'game-row';
        row.style = heightText;
        for (let j = 0; j < height; j++) {

            let pick = vocab[i + j * width];

            let card = document.createElement('div');
            card.className = 'flip-card';
            card.style = widthText;

            let cardInner = document.createElement('div');
            cardInner.className = "flip-card-inner";

            let front = document.createElement('div');
            let back = document.createElement('div');

            front.className = "flip-card-front";
            back.className = "flip-card-back";

            // front img
            let frontImg = document.createElement('img');
            frontImg.src = "../../resource/img/" + pick.link;
            frontImg.alt = "back";
            frontImg.className = "card-img";

            // back img
            let backImg = document.createElement('img');
            backImg.src = "../../resource/img/" + TYPHOON[Math.floor(Math.random() * TYPHOON.length)];
            backImg.alt = "front";
            backImg.className = "card-img";

            front.appendChild(frontImg);
            back.appendChild(backImg);

            cardInner.appendChild(front);
            cardInner.appendChild(back);

            card.appendChild(cardInner);
            row.appendChild(card);
            // add handles to list
            cardList.push({
                outer: card, frontImg, backImg, name: pick.name
            });
        }
        cardRoot.appendChild(row);
    }

    return cardList;
}

const start = () => {

    let vocab = getVocab();
    let team = Number(document.querySelector('#team').value);
    let size = Number(document.querySelector('#size').value);
    // get dim of borad and find number of cards
    let gWidth = DIM[size].x;
    let gHeight = DIM[size].y;
    let cardNumb = gWidth * gHeight;


    //console.log(vocab);

    if (vocab.length == 0) {
        return alert('please select some vocab');
    }

    // check if bad input
    if (cardNumb >= vocab.length) {
        return alert('please select some more vocab vocab');
    }

    // sound stuff
    const correct = new Audio('../../resource/sound/bell.mp3');
    const wrong = new Audio('../../resource/sound/incorrect.mp3');
    correct.preload = 'auto';
    wrong.preload = 'auto';

    let gameControl = document.querySelector(".game-control");

    console.log(team, size);

    let ratio = window.innerHeight / window.innerWidth;
    let width = (ratio > 0.8) ? `${100 / team}%` : "100%";
    let height = (ratio > 0.8) ? "100%" : `${100 / team}%`;

    let scoreList = Array.from({ length: team }, () => 0);

    const updateScore = (i, value) => {
        scoreList[i] += value;
    };

    for (let i = 0; i < team; i++) {
        let score = 0;

        let div = document.createElement('div');
        div.style = `width:${width};height:${height};`

        let name = document.createElement('input');
        name.type = "text";
        name.value = `Team ${i}`;

        let scoreText = document.createElement('input');
        scoreText.type = "number";
        scoreText.value = 0;

        let addTen = document.createElement('button');
        addTen.innerHTML = "+10";

        let minusTen = document.createElement('button');
        minusTen.innerHTML = "-10";

        let addFifty = document.createElement('button');
        addFifty.innerHTML = "+50";

        let minusFifty = document.createElement('button');
        minusFifty.innerHTML = "-50";

        addTen.addEventListener('click', () => {
            //console.log('add 10');
            score += 10;
            scoreText.value = score;
        });

        minusTen.addEventListener('click', () => {
            score -= 10;
            scoreText.value = score;
        });

        addFifty.addEventListener('click', () => {
            score += 50;
            scoreText.value = score;
        });

        minusFifty.addEventListener('click', () => {
            score -= 50;
            scoreText.value = score;
        });

        scoreText.addEventListener("change", () => {
            score = Number(scoreText.value);
        });

        div.appendChild(name);
        div.appendChild(scoreText);
        div.appendChild(addTen);
        div.appendChild(minusTen);
        div.appendChild(addFifty);
        div.appendChild(minusFifty);

        gameControl.appendChild(div);

    }

    document.querySelector('#start').classList.add('hide');

    // random sort 
    vocab = vocab.sort(()=>Math.random() - 0.5);

    let cards = makeCards(gWidth, gHeight, vocab);
    let wait = false;

    cards.forEach(card => {
        //console.log(card);
        card.outer.addEventListener("click", () => {

            if(wait){
                return;
            }

            wait = true;

            if (card.outer.classList.contains('flip')) {
                setTimeout(() => {
                    card.backImg.src = "../../resource/img/" + TYPHOON[Math.floor(Math.random() * TYPHOON.length)];
                    wait = false;
                }, 500);
                card.outer.classList.remove('flip');
            }
            else {
                setTimeout(()=>{
                    card.outer.classList.add('flip');
                    wait = false;
                }, 500);
                speakText(card.name);
            }

        });
    });
}

window.onload = function () {
    document.addEventListener('contextmenu', event => event.preventDefault());
    makeCheckBox();
}