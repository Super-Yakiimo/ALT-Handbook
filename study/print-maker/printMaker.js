
const WIDTH = 5;
const HEIGHT = 2;
const comicPath = "./old/comicteacher.png";

const TSTART = '<table>';
const TEND = '</table>'


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
        // add words
        result += `<p class="trace">${quest}</p><p class="trace">${resp} ${obj.name}</p>`;
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
            let path = "../../resource/img/" + obj.link;
            puzzle += `<td><img src="${comicPath}"><p class='quest'>${quest}</p>`;
            puzzle += `<p class='answer'>${resp} ______.</p>`;
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

    let quest = document.querySelector('#quest').value;
    let resp = document.querySelector('#answer').value;

    let printArea = document.querySelector("#printArea");
    let editBox = document.querySelector("#editBox");
    
    let htmlCon = "";

    // dictionary
    htmlCon += "\n<h1>Dictionary</h1>\n"
    htmlCon += makeDict(vocab);

    // tracing words
    htmlCon += "\n<h1>Tracing</h1>\n"
    htmlCon += makeWords(vocab, quest, resp);

    // puzzle 
    htmlCon += "\n<h1>Puzzle</h1>\n"
    htmlCon += makePuzzle(vocab, quest, resp);

    // add to print preview
    printArea.innerHTML = htmlCon; 
    editBox.value = htmlCon;
}


function edit(){
    let editBox = document.querySelector("#editBox");
    let printArea = document.querySelector("#printArea");

    if(editBox.innerHTML = ""){
        return;
    }

    printArea.innerHTML = editBox.value;
}

function printPreview(){
    let printArea = document.querySelector("#printArea");
    print()
}

window.onload = function () {
    makeCheckBox();
}
