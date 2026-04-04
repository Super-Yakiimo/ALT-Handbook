/*

get selected vocab

*/

const synth = window.speechSynthesis;
// speak
function speakText(text) {

    // Input validation
    if (!text) {
        alert("Please enter some text to speak.");
        return;
    }

    // Check browser support
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser does not support Text-to-Speech.");
        return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    //utterance.lang = "en-US"; // English (US)
    utterance.rate = 1;       // Speed (0.1 to 10)
    utterance.pitch = 1;      // Pitch (0 to 2)
    utterance.volume = 1;     // Volume (0 to 1)

    // Speak the text
    synth.speak(utterance);
}


function makeCards(number) {
    let cardList = [];

    let dim = 100 * (1 / number);
    let heightText = `height: ${dim}%`;
    let widthText = `width: ${dim}%`;

    let cardRoot = document.querySelector('.card-root');
    let replaceText = document.querySelector('#replaceText');

    let allVocab = getAll();
    //console.log(allVocab);

    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.className = 'card-row';
        row.style = heightText;
        for (let j = 0; j < number; j++) {
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
            frontImg.src = "../../resource/img/" + allVocab[Math.floor(Math.random() * allVocab.length)].link;
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

// start function
function start() {
    let level = document.querySelector('#level');
    let lNumb = Number(level.value);
    let vocab = getVocab();

    // audio files
    const correct = new Audio('../../resource/sound/bell.mp3');
    const wrong = new Audio('../../resource/sound/incorrect.mp3');
    correct.preload = 'auto';
    wrong.preload = 'auto';

    let wait = true;

    // test info
    let picList, aIndex, indexList;


    if (lNumb * lNumb >= vocab.length) {
        return alert('please select some more vocab vocab');
    }

    if (vocab.length == 0) {
        return alert('please select some vocab');
    }

    function checkAnswer(select) {
        if (wait == true) {
            return;
        }

        if (aIndex == select && indexList.length <= 0) {
            setPictures();
            correct.currentTime = 0;
            correct.play();
        }
        else if (aIndex == select) {
            makeQuestion();
            correct.currentTime = 0;
            correct.play();
        }
        else {
            wrong.currentTime = 0;
            wrong.play();
        }
    }

    function flipStagered() {
        let index = 0;
        let stagerTime = 1000 / cardList.length;
        let jstOut = Array.from(cardList, card => card.outer).sort(() => Math.random() - 0.5);
        let handle = setInterval(() => {
            let card = jstOut[index];
            if (card.classList.contains('flip')) {
                card.classList.remove('flip');
            }
            else {
                card.classList.add('flip');
            }
            index++;
            if (index >= cardList.length) {
                clearInterval(handle);
                wait = false;
            }
        }, stagerTime);
    }

    function setPictures() {
        picList = [];
        indexList = [];
        picList = vocab.sort(() => Math.random() - 0.5).slice(0, lNumb * lNumb);
        indexList = Array.from(picList, (value, index) => index).sort(() => Math.random() - 0.5);

        flipStagered();
        setTimeout(() => {
            cardList.forEach((card, index) => {
                card.frontImg.src = "../../resource/img/" + picList[index].link;
            });
            flipStagered();
        }, 1000);

        setTimeout(() => {
            makeQuestion();
        }, 500);

    }

    function makeQuestion() {
        aIndex = indexList.splice(0, 1)[0];
        //console.log(aIndex, picList[aIndex]);
        let answer = picList[aIndex];
        replaceText.innerHTML = answer.name;
        speakText(`Find the ${answer.name} card`);
    }

    document.querySelector('.control').classList.add('hide');
    let cardList = makeCards(lNumb);
    //console.log(cardList);

    cardList.forEach((card, index) => {
        card.outer.addEventListener('click', () => {
            //console.log(picList[index].name);
            checkAnswer(index);
        });

    });

    setPictures();
}

window.onload = function(){
    makeCheckBox();
}