function makeCards(number) {
    let cardList = [];

    let dim = 100 * (1 / number);
    let heightText = `height: ${dim}%`;
    let widthText = `width: ${dim}%`;

    let cardRoot = document.querySelector('.card-root');

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

function start() {
    let level = document.querySelector('#level');
    let lNumb = Number(level.value);
    let vocab = getVocab();

    if (lNumb * lNumb >= vocab.length) {
        return alert('please select some more vocab vocab');
    }

    if (vocab.length == 0) {
        return alert('please select some vocab');
    }

    function setPictures() {
        picList = [];
        indexList = [];
        picList = vocab.sort(() => Math.random() - 0.5).slice(0, lNumb * lNumb);
        indexList = Array.from(picList, (value, index) => index).sort(() => Math.random() - 0.5);

        cardList.forEach((card, index) => {
            card.backImg.src = "../../resource/img/" + picList[index].link;
        });

    }


    document.querySelector('.control').classList.add('hide');

    let cardList = makeCards(lNumb);
    console.log(cardList);

    setPictures();

    cardList.forEach(card => {
        card.outer.addEventListener('click', () => {
            if (card.outer.classList.contains('flip')) {
                card.outer.classList.remove('flip');
            }
            else {
                card.outer.classList.add('flip');
            }
        });
    });
}