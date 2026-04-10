/* 

vocab stufy stuff learn screen 

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


// vocab container
const VOCAB_ID = "#vocabCardBox";

// create buttons for vocab words
// get list of vocab and create vocab buttons
function start() {
    let words = getVocab();
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
