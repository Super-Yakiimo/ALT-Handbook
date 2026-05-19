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
    "Buzz_Lightyear.png"
];

let GIRL = [
    "Chihiro.jpg",
    "anna.jpg",
    "ariel.jpg",
    "Frozen-Elsa-PNG-Photo.png",
    "hello kitty.png",
    "hermione granger.jpg",
    "mei.png",
    "moana-png-8.png",
    "nami.jpg",
    "satsuki.png",
    "jessie.jpeg"
]


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
    for (let i = 0; i < 5; i++) {

        let row = document.createElement('div');
        row.className = 'card-row';

        for (let j = 0; j < 4; j++) {

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


    let bselect = Array.from(BOY.sort(() => Math.random() - 0.5).slice(0, 10), (name, i) => `./img/char/boy/${name}`);
    let gselect = Array.from(GIRL.sort(() => Math.random() - 0.5).slice(0, 10), (name, i) => `./img/char/girl/${name}`);

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

    leftCardCon.appendChild(c1);
    rightCardCon.appendChild(c2);

}