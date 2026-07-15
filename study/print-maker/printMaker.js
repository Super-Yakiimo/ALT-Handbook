
const WIDTH = 5;
const HEIGHT = 2;
const comicPath = "./old/comicteacher.png";

function start() {

    let vocab = getVocab(false);

    // return alert if none selected
    if (vocab == null || vocab.length == 0) {
        return alert('select something to study');
    }

    let quest = document.querySelector('#quest').value;
    let resp = document.querySelector('#answer').value;

    let table = document.querySelector("#table");
    let words = document.querySelector("#words");
    let puzzle = document.querySelector("#puzzle");


    document.querySelector('.control').classList.add('hide');


    // make dictionary
    for (let j = 0; j < HEIGHT; j++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < WIDTH; i++) {
            // add row
            let td = document.createElement('td');
            let obj = vocab[j * 5 + i];
            let path = "../../resource/img/" + obj.link;
            td.innerHTML = `<img src="${path}"><p>${obj.name}</p>`;
            tr.appendChild(td);

            // add words
            words.innerHTML += `<p>${quest}</p><p>${resp} ${obj.name}</p>`;

        }
        table.appendChild(tr);
    }

    // make words


    // make puzzle
    for (let j = 0; j < WIDTH; j++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < HEIGHT; i++) {
            let obj = vocab[i * WIDTH + j];
            let path = "../../resource/img/" + obj.link;

            // add row
            let td = document.createElement('td');
            td.innerHTML = `<img src="${comicPath}"><p class='quest'>${quest}</p><p class='trace'>${resp} ______.</p><img class="corner" src="${path}">`;

            tr.appendChild(td);
        }
        puzzle.appendChild(tr);
    }
}

window.onload = function () {
    makeCheckBox();
}