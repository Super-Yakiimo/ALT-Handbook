
const WIDTH = 5;
const HEIGHT = 2;
const comicPath = "./old/comicteacher.png";

const TSTART = '<table>';
const TEND = '</table>'

const WC = "wc";


const RSTART = '<tr>';
const REND = '</tr>'

function makeDict(vocab) {
    let dictString = '<table id="dict">';

    // make dictionary
    for (let j = 0; j < HEIGHT; j++) {
        dictString += RSTART;
        for (let i = 0; i < WIDTH; i++) {
            // add row
            let obj = vocab[j * 5 + i];
            let path = "../../resource/img/" + obj.link;
            let tds = `<td><img src="${path}"><p>${obj.name}</p></td>`;
            dictString += tds;
        }
        dictString += REND;
    }

    dictString += TEND;

    return dictString;
}

function makeWords(vocab, quest, resp) {
    let result = "<div id='words'>";
    vocab.forEach(obj => {
        let fQuest = quest.replace(WC, obj.name);
        let fResp = resp.replace(WC, obj.name);
        // add words
        result += `<p class="trace">${fQuest}</p><p class="trace">${fResp}</p>`;
    });
    result += "</div>";
    return result;
}

function makePuzzle(vocab, quest, resp) {
    let puzzle = '<table id="puzzle">';

    // make puzzle
    for (let j = 0; j < WIDTH; j++) {
        puzzle += TSTART;
        for (let i = 0; i < HEIGHT; i++) {
            let obj = vocab[i * WIDTH + j];
            let fQuest = quest.replace(WC, obj.name);
            let fResp = resp.replace(WC, "");
            let path = "../../resource/img/" + obj.link;
            puzzle += `<td><img src="${comicPath}"><p class='quest'>${fQuest}</p>`;
            puzzle += `<p class='answer'>${fResp} ______.</p>`;
            puzzle += `<img class="corner" src="${path}"></td>`;
        }
        puzzle += REND;
    }

    puzzle += TEND;
    return puzzle;
}

function start() {
    let vocab = getVocab(false);

    // return alert if none selected
    if (vocab == null || vocab.length == 0) {
        return alert('select something to study');
    }

    let list = getWords();
    console.log(list);

    if(list.length == 0){
        list = vocab;
    }

    let quest = document.querySelector('#quest').value;
    let resp = document.querySelector('#answer').value;

    let printArea = document.querySelector("#printArea");
    let editBox = document.querySelector("#editBox");

    let htmlCon = "";

    // dictionary
    htmlCon += "\n<h1>Dictionary</h1>\n"
    htmlCon += makeDict(list);

    // tracing words
    htmlCon += "\n<h1>Tracing</h1>\n"
    htmlCon += makeWords(list, quest, resp);

    // puzzle 
    htmlCon += "\n<h1>Puzzle</h1>\n"
    htmlCon += makePuzzle(list, quest, resp);

    // add to print preview
    printArea.innerHTML = htmlCon;
    editBox.value = htmlCon;
}


function edit() {
    let editBox = document.querySelector("#editBox");
    let printArea = document.querySelector("#printArea");

    if (editBox.innerHTML = "") {
        return;
    }

    printArea.innerHTML = editBox.value;
}

function printPreview() {
    let printArea = document.querySelector("#printArea");
    print()
}

window.onload = function () {
    makeCheckBox();

    let wordSelect = document.querySelector("#wordSelect");

    for (let i = 0; i < INPUT.length; i++) {
        let box = document.querySelector(`#${INPUT[i]}`);
        box.addEventListener("change", () => {
            let vocab = getVocab(false);
            if (vocab.length == 0) {
                wordSelect.innerHTMLm = "";
                return;
            }

            let s = "";
            vocab.forEach((word, i) => {
                let id = `input${i}`;
                s += `<label>${word.name}</label><input value="${word}" id="${id}" type="checkbox">`;
            });
            wordSelect.innerHTML = s;
        });
    }
}


function getWords() {
    let vocab = getVocab(false);
    let list = [];
    vocab.forEach((word, i) => {
        let id = `input${i}`;
        let input = document.querySelector(`#${id}`);
        if(input.checked){
            console.log('check');
            list.push(word);
        }
    });
    return list;
}
