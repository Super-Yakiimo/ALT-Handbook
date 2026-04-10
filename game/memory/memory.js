function makeCards(width, height) {
    let cardList = [];

    let dim = 100 * (1 / width);
    let heightText = `height: ${dim}%`;
    let widthText = `width: ${dim}%`;

    let cardRoot = document.querySelector('.card-root');

    for (let i = 0; i < width; i++) {
        let row = document.createElement('div');
        row.className = 'card-row';
        row.style = heightText;
        for (let j = 0; j < height; j++) {
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
            frontImg.src = BACK;
            frontImg.alt = "back";
            frontImg.className = "card-img";

            // back img
            let backImg = document.createElement('img');
            backImg.src = BACK;
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
                outer: card, frontImg, backImg
            });
        }
        cardRoot.appendChild(row);
    }

    return cardList;
}

const DIM = [
    {x: 3, y: 4},
    {x: 4, y: 4},
    {x: 6, y: 6},
    {x: 8, y: 8},
    {x: 10, y: 10},
]

function start() {
    // sound stuff
    const correct = new Audio('../../resource/sound/bell.mp3');
    const wrong = new Audio('../../resource/sound/incorrect.mp3');
    correct.preload = 'auto';
    wrong.preload = 'auto';

    // level dimensions
    let level = document.querySelector('#level');
    let lNumb = Number(level.value);
    let pick = DIM[lNumb];
    let vocab = getVocab();

    // text ui
    let scoreText = document.querySelector('#scoreText');
    let timeText = document.querySelector('#timeText');


    // last clicked card
    let last = null;

    // how many cards
    let cardNumb = pick.x * pick.y;

    // card number over 2 how many unique images
    let imgNumb = cardNumb / 2;

    // wait time
    let wait = false;
    let score = 0; 
    let time = -1;
    let matchTime = 0;
    let count = 0;

    // check if bad input
    if (imgNumb >= vocab.length) {
        return alert('please select some more vocab vocab');
    }

    if (vocab.length == 0) {
        return alert('please select some vocab');
    }

    function setPictures() {
        picList = [];
        indexList = [];
        // get picture images
        picList = vocab.sort(() => Math.random() - 0.5).slice(0, imgNumb);
        // make two of each
        picList = picList.flatMap(item => [item, item]).sort(() => Math.random() - 0.5);
        indexList = Array.from(picList, (value, index) => index).sort(() => Math.random() - 0.5);

        cardList.forEach((card, index) => {
            card.backImg.src = "../../resource/img/" + picList[index].link;
        });

    }

    document.querySelector('#start').classList.add('hide');

    let cardList = makeCards(pick.x, pick.y);
    //console.log(cardList);

    setPictures();

    let handle = setInterval(()=>{
        time += 1;
        timeText.innerHTML = time;
    }, 1000);
    // set score text to zero
    scoreText.innerHTML = score;

    // add listeners to cards
    cardList.forEach(card => {
        card.outer.addEventListener('click', () => {

            // check if already flipped
            if(card.outer.classList.contains('flip')){
                return;
            }

            // flip
            card.outer.classList.add('flip');

            if(last == null){
                last = card;
                console.log('first');
            }


            else if(last.backImg.src == card.backImg.src){
                // check match
                console.log('match');
                last = null;
                correct.currentTime = 0;
                correct.play();
                count++;
                if(count >= imgNumb){
                    console.log('finish');
                    clearInterval(handle);
                    document.querySelector('#end').classList.remove('hide');
                    document.querySelector('#endScoreText').innerHTML = score;
                    document.querySelector('#endTimeText').innerHTML = time;
                }
                // the faster the match the higher the score
                let calc = 20 - (time - matchTime);
                score += (calc < 1) ? 1 : calc;
            }
            else {
                wait = true;
                console.log('no match');
                wrong.currentTime = 0;
                wrong.play();
                // flip cards back over
                setTimeout(() => {
                    card.outer.classList.remove('flip');
                    last.outer.classList.remove('flip');
                    last = null;
                    wait = false;
                }, 500);    
            }

            scoreText.innerHTML = score;
        });
    });
}

window.onload = function(){
    makeCheckBox();
}

document.addEventListener('contextmenu', event => event.preventDefault());
