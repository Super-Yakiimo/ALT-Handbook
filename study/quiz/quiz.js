/*
check which types are selected and retun a list 
of user selected question types

GET -> PICK CORRECT
------------
IMG -> SOUND
IMG -> TEXT

SOUND -> IMG
SOUND -> TEXT

TEXT -> SOUND
TEXT -> IMG
*/

const SOUND = "icon/sound.png";
//`../../resource/img/

// types of questions enum
const TYPE = Object.freeze({
    IMG_SOUND: 0,
    IMG_TEXT: 1,
    SOUND_IMG: 2,
    SOUND_TEXT: 3,
    TEXT_SOUND: 4,
    TEXT_IMG: 5
});

const ALL = [
    TYPE.IMG_SOUND, TYPE.IMG_TEXT, TYPE.SOUND_IMG,
    TYPE.SOUND_TEXT, TYPE.TEXT_SOUND, TYPE.TEXT_IMG
];

const QUEST_SELECT = "#questType";

const QUEST_CON = "#questCon";
const TEST_CON = "#testCon";

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
    utterance.lang = "en-US"; // English (US)
    utterance.rate = 1;       // Speed (0.1 to 10)
    utterance.pitch = 1;      // Pitch (0 to 2)
    utterance.volume = 1;     // Volume (0 to 1)

    // Optional: choose a specific English voice if available
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.startsWith("en"));
    if (englishVoice) {
        utterance.voice = englishVoice;
    }

    // Speak the text
    window.speechSynthesis.speak(utterance);
}

const getChecked = () => {
    // check boxes
    let questSelect = document.querySelector("#questType");

    // list of selected
    let list = [];

    // select questions to make
    switch (questSelect.value) {
        case "all":
            list = ALL;
            break;
        case "imgSound":
            list.push(TYPE.IMG_SOUND);
            list.push(TYPE.SOUND_IMG);
            break;
        case "imgText":
            list.push(TYPE.IMG_TEXT);
            list.push(TYPE.TEXT_IMG);
            break;
        case "textSound":
            list.push(TYPE.TEXT_SOUND);
            list.push(TYPE.SOUND_TEXT);
            break;
        default:
            list = ALL;
            break;
    }

    return list;
}

/*
get number of questions
*/

const getQuestNumb = () => {
    let qNumb = document.querySelector("#qNumb");
    return Number(qNumb.value);
}


/*
create the test
*/

const makeTest = (vocab, types) => {
    let qNumb = getQuestNumb();

    let test = [];

    for (let i = 0; i < qNumb; i++) {
        let temp = JSON.parse(JSON.stringify(vocab));
        let answer = temp.splice(i, 1)[0];
        let options = [answer];
        for (let i = 0; i < 3; i++) {
            let rnd = Math.floor(Math.random() * temp.length);
            options.push(temp.splice(rnd, 1)[0]);
        }
        options.sort(() => Math.random() - 0.5);
        let type = types[Math.floor(Math.random() * types.length)];
        test.push({
            answer, options, type
        });
    }

    return test;
}


// create a button and return it
function textBtn(name) {
    let btn = document.createElement('button');
    let text = document.createElement('p');
    text.innerHTML = name;
    btn.appendChild(text);
    return btn;
}

function imgBtn(path) {
    let btn = document.createElement('button');
    let img = document.createElement('img');
    img.src = `../../resource/img/${path}`;
    btn.appendChild(img);
    return btn;
}

// select with image
const imgSelect = (path, index) => {
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answerBtn';
    input.id = `input${index}`;
    input.className = 'vocab-input';

    let img = document.createElement('img');
    img.src = `../../resource/img/${path}`;

    let label = document.createElement('label');
    label.htmlFor = `input${index}`;

    label.appendChild(img);

    return { input, label };
}

// select with text
const textSelect = (name, index) => {
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answerBtn';
    input.id = `input${index}`;
    input.className = 'vocab-input';

    let label = document.createElement('label');
    label.htmlFor = `input${index}`;
    label.className = 'vocab-label';

    let text = document.createElement('p');
    text.innerHTML = name;
    text.className = 'quest-text';
    label.appendChild(text);

    return { input, label };
}


/*
start function
*/

const start = () => {
    let vocab = getVocab();
    let types = getChecked();

    if (vocab.length == 0) {
        return alert('please select some vocab');
    }

    document.querySelector('.control').classList.add('hide');
    let test = makeTest(vocab, types);
    console.log(test);

    let entrBtn = document.querySelector("#entrBtn");

    let select, quest;

    /*
    set buttons images and text
    */
    const setBtns = () => {

        quest = test.splice(0, 1)[0];

        // button parents
        let testCon = document.querySelector("#testCon");
        let questCon = document.querySelector("#questCon");

        // clear the buttons to make new ones
        testCon.innerHTML = "";
        questCon.innerHTML = "";

        let questBtn;

        // set the question button
        switch (quest.type) {
            case TYPE.IMG_SOUND:
            case TYPE.IMG_TEXT:
                // set quest img to answer img
                questBtn = imgBtn(quest.answer.link);
                questCon.append(questBtn);
                break;
            case TYPE.SOUND_IMG:
            case TYPE.SOUND_TEXT:
                // quest sound btn
                questBtn = imgBtn(SOUND);
                questCon.append(questBtn);
                questBtn.addEventListener('click', () => {
                    speakText(quest.answer.name);
                });
                break;
            case TYPE.TEXT_IMG:
            case TYPE.TEXT_SOUND:
                // quest sound btn
                questBtn = textBtn(quest.answer.name);
                questCon.append(questBtn);
        }

        // set the select buttons
        switch (quest.type) {
            case TYPE.IMG_SOUND:
            case TYPE.TEXT_SOUND:
                quest.options.forEach((option, index) => {
                    let result = imgSelect(SOUND, index);
                    testCon.appendChild(result.input);
                    testCon.appendChild(result.label);
                    result.label.addEventListener('click', () => {
                        speakText(option.name);
                        select = option;
                    });
                });
                break;
            case TYPE.SOUND_TEXT:
            case TYPE.IMG_TEXT:
                // text buttons
                quest.options.forEach((option, index) => {
                    let result = textSelect(option.name, index);
                    testCon.appendChild(result.input);
                    testCon.appendChild(result.label);
                    result.label.addEventListener('click', () => {
                        speakText(option.name);
                        select = option;
                    });
                });
                break;
            case TYPE.TEXT_IMG:
            case TYPE.SOUND_IMG:
                quest.options.forEach((option, index) => {
                    let result = imgSelect(option.link, index);
                    testCon.appendChild(result.input);
                    testCon.appendChild(result.label);
                    result.label.addEventListener('click', () => {
                        speakText(option.name);
                        select = option;
                    });
                });
                break;
        }
    }

    entrBtn.addEventListener("click", () => {
        console.log(quest.answer, select);
        if (quest.answer == select) {
            console.log('correct');
            setBtns();
        }
    });

    setBtns();
}

window.onload = function () {
    if (!('speechSynthesis' in window)) {
        console.log('this browser does not support sound');
        document.querySelector("#imgSound").disabled = true;
        document.querySelector("#textSound").disabled = true;
    }
}

