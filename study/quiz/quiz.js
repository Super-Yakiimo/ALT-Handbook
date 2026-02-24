/*
check which types are selected and retun a list 
of user selected question types

GET -> PICK CORRECT
------------
IMG -> SOUND
SOUND -> IMG
TEXT -> SOUND
SOUND -> TEXT
IMG -> TEXT
TEXT -> IMG
*/

// types of questions enum
const TYPE = Object.freeze({
    SELECT_SOUND: "#selectSound",
    SELECT_IMG: "#selectImage",
    READ: "#reading"
});

const getChecked = () => {
    // check boxes
    let sound = document.querySelector(TYPE.SELECT_SOUND);
    let img = document.querySelector(TYPE.SELECT_IMG);
    let read = document.querySelector(TYPE.READ);

    // list of selected
    let list = [];


    if (sound.checked) {
        list.push(TYPE.SELECT_SOUND);
    }

    if (img.checked) {
        list.push(TYPE.SELECT_IMG);
    }

    if (read.checked) {
        list.push(TYPE.READ);
    }

    return list;
}

/*

get selected vocab

*/

const getVocab = () => {
    const INPUT = [
        "fruitCheck", "vegCheck", "jobCheck"
    ];
    const VOCAB_LIST = [
        FRUIT, VEGETABLE, JOBS
    ];

    let vocabList = [];

    for(let i = 0; i < INPUT.length; i++){
        let checked = document.querySelector(`#${INPUT[i]}`).checked
        if( checked == true){
            vocabList = vocabList.concat(VOCAB_LIST[i]);
        }
    }
    return vocabList.sort(() => Math.random() - 0.5);
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

    for(let i = 0; i < qNumb; i++){
        let temp = JSON.parse(JSON.stringify(vocab));
        let answer = temp.splice(i, 1)[0];
        let options = [answer];
        for(let i = 0; i< 3; i++){
            let rnd = Math.floor(Math.random() * temp.length);
            options.push(temp.splice(rnd, 1)[0]);
        }
        options.sort(()=>Math.random() - 0.5);
        test.push({
            answer, options, type: types[Math.floor(Math.random() * types.length)]
        });
    }

    return test;
}

/*
set buttons images and text
*/
const setBtns = (quest) => {
    const BTNS = [
        "btnOne", "btnTwo", "btnThree", "btnFour"
    ];
    const QUEST = "questBtn";

    BTNS.forEach((id, index) => {
        let btn = document.querySelector(`#${id}`);
        let btnImg = document.querySelector(`#${id}Img`);

        btnImg.src = "../../resource/img/" + quest.options[index].link;
    });

    let btn = document.querySelector(`#${QUEST}`);
    let btnImg = document.querySelector(`#${QUEST}Img`);
    btnImg.src = "../../resource/img/" + quest.answer.link;



}

/*
start function
*/

const start = () => {    
    let vocab = getVocab();
    let types = getChecked();

    if(vocab.length == 0){
        return alert('please select some vocab');
    }

    if(types.length == 0){
        return alert('please select quest type');
    }

    document.querySelector('.control').classList.add('hide');
    let test = makeTest(vocab, types);
    console.log(test);
    setBtns(test[0]);
}