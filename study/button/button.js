/* 

vocab stufy stuff learn screen 

*/

// vocab container
const VOCAB_ID = "#vocabCardBox";

// create buttons for vocab words
// get list of vocab and create vocab buttons
function start() {

    let scramble = document.querySelector('#scramble').checked;

    console.log(scramble);

    let words = getVocab(scramble);
    let vocabBox = document.querySelector(VOCAB_ID);

    // return alert if none selected
    if (words == null || words.length == 0) {
        return alert('select something to study');
    }

    document.querySelector('.control').classList.add('hide');

    vocabBox.innerHTML = "";

    words.forEach((obj) => {
        // vocab box
        let div = document.createElement("div");
        div.className = "vocab-card";

        // button
        let btn = document.createElement("button");


        // image
        let img = document.createElement("img");

        // add image to button
        btn.appendChild(img);

        // name text
        let nameText = document.createElement("h1");
        nameText.innerHTML = obj.name;

        img.src = "../../resource/img/" + obj.link;
        div.appendChild(nameText);
        div.appendChild(btn);
        vocabBox.appendChild(div);

        btn.addEventListener("click", () => {
            speakText(obj.name);
        });
    });
}

window.onload = function(){
    makeCheckBox();
}

document.addEventListener('contextmenu', event => event.preventDefault());
