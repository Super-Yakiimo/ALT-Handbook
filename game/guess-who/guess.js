let BOY = [
    "Curious_George.png",
    "charlie.jpg",
    "doraemon.png",
    "harry-potter.png",
    "itadori_yuuji__jjk.png",
    "luffy.png",
    "nobita.png",
    "patrick.webp",
    "snoopy.jpg",
    "spongebob_PNG1.png",
    "tom.webp",
    "woody.jpeg",
    "Buzz_Lightyear.png",
    "mario.png",
    "luigi.png",
    "link.jpg",
    "Donkey-kong.png",
    "steve.png"
];

let GIRL = [
    "Chihiro.jpg",
    "anna.png",
    "ariel.png",
    "Frozen-Elsa-PNG-Photo.png",
    "hello kitty.png",
    "hermione granger.jpg",
    "mei.png",
    "moana-png-8.png",
    "nami.jpg",
    "satsuki.png",
    "jessie.png",
    "peach.png",
    "daisy.png",
    "zelda.jpg",
    "Inkling_Girl.png",
    "rosalina.png",
    "Nobara_Kugisaki.png",
]

const WIDTH = 6;
const HEIGHT = 5;

function makeCard(path, name) {

    let card = document.createElement('div');
    card.className = 'card-outer';

    let inner = document.createElement('div');
    inner.className = 'card-inner';

    // front img
    let frontImg = document.createElement("img");
    frontImg.src = path;

    // back img
    let backImg = document.createElement("img");
    backImg.src = "./img/back.jpg";

    // front
    let cardFront = document.createElement("div");
    cardFront.className = "card-front";
    cardFront.appendChild(frontImg);

    // back 
    let cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.appendChild(backImg);

    // add to card
    inner.appendChild(cardFront);
    inner.appendChild(cardBack);

    // add inner to card
    card.appendChild(inner);

    return card;
}

function makeCards(parent, charList) {
    for (let i = 0; i < HEIGHT; i++) {

        let row = document.createElement('div');
        row.className = 'card-row';

        for (let j = 0; j < WIDTH; j++) {

            let cardBox = document.createElement('div');
            cardBox.className = "card-row-box";

            let path = charList[i + j * 5];
            let card = makeCard(path, "");

            // add card to row box
            cardBox.appendChild(card);

            /// add to row
            row.appendChild(cardBox);

            // add click event
            card.addEventListener('click', () => {
                if (card.classList.contains('flip')) {
                    card.classList.remove('flip');
                }
                else {
                    card.classList.add('flip');
                }
            })

        }

        parent.appendChild(row);
    }
}


function showLeft() {
    document.querySelector('#answerLeft').classList.remove('hide');
}

function hideLeft() {
    document.querySelector('#answerLeft').classList.add('hide');
}

function showRight() {
    document.querySelector('#answerRight').classList.remove('hide');
}

function hideRight() {
    document.querySelector('#answerRight').classList.add('hide');
}

window.onload = function () {
    let playerOne = document.querySelector('#playerOne');
    let playerTwo = document.querySelector('#playerTwo');


    let len = WIDTH * HEIGHT / 2;
    let bselect = Array.from(BOY.sort(() => Math.random() - 0.5).slice(0, len), (name, i) => `./img/char/boy/${name}`);
    let gselect = Array.from(GIRL.sort(() => Math.random() - 0.5).slice(0, len), (name, i) => `./img/char/girl/${name}`);

    let format = bselect.concat(gselect).sort(() => Math.random() - 0.5);
    console.log(format);

    makeCards(playerOne, format);
    makeCards(playerTwo, format);

    let leftCardCon = document.querySelector('#leftCardCon');
    let rightCardCon = document.querySelector('#rightCardCon');

    let pathOne = format[Math.floor(Math.random() * format.length)];
    let pathTwo = format[Math.floor(Math.random() * format.length)];

    let c1 = makeCard(pathOne, "");
    let c2 = makeCard(pathTwo, "");
    c1.classList.add('flip');
    c2.classList.add('flip');

    leftCardCon.appendChild(c1);
    rightCardCon.appendChild(c2);

    c1.addEventListener("click", () => {
        if (c1.classList.contains('flip')) {
            c1.classList.remove('flip');
        }
        else {
            c1.classList.add('flip');
        }
    });

    c2.addEventListener("click", () => {
        if (c2.classList.contains('flip')) {
            c2.classList.remove('flip');
        }
        else {
            c2.classList.add('flip');
        }
    });

}