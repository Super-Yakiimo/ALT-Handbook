const E5 = [
    "the flower shop opens at ten o'clock every day",
    "Julia what are you doing now",
    "today is the first day of our school trip",
    "my aunt lives in London",
    "does your sister go skiing",
];

const E4 = [
    "Bill didn't have time to eat breakfast",
    "Harumi had a great weeking in Kyoto",
    "Can your father speak both Chinese and French",
    "did you see the lions at that zoo?",
    "I asked Mr.Kent about his bobbies.",
    "",
];

const E3 = [
    "My mom’s taking me by car. You can come with us.",
    "Do you want to go jogging with me on the beach tomorrow?",
    "Can you turn down the radio, please?",
    "Mr. Ford often buys a newspaper at the station in the morning on his way to work.",
    "Mr. Jones has a meeting at 5:00. He has to leave right now.",
    "Mom, have you checked the mail yet today?",
];

const E2 = [
    "The characteristics that make rabbits different from other animals are that they have long ears and short tails.",
    "Do you get nervous before giving a speech in front of the class?",
    "Haruka wanted to enter a popular university, so she devoted all her attention to studying for the entrance exam.",
    "The hard, wooden bench in the park was uncomfortable, so Anna and Cathy decided to sit on the grass.",
    "In order to go on a trip to Europe next year, John is trying to save up enough money. He is only eating out on weekends to cut down on spending.",
    "I’m going to work for an organization that helps children. I’m going to help people who are in need and try to improve their welfare.",
];

const LIST = [E5, E4, E3, E2];

const WIDTH = 100;
const HEIGHT = 10;

const randRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

function start() {


    let level = document.querySelector('#level');
    let lNumb = Number(level.value);
    console.log(lNumb);
    let words = LIST[lNumb];

    let canCon = document.querySelector('#canCon');
    let canvas = document.querySelector("#can");
    let ctx = canvas.getContext("2d");
    canvas.width = canCon.clientWidth;
    canvas.height = canCon.clientHeight;

    // check answer
    let checkBtn = document.querySelector('#checkBtn');

    // sound stuff
    const correct = new Audio('../../resource/sound/bell.mp3');
    const wrong = new Audio('../../resource/sound/incorrect.mp3');
    correct.preload = 'auto';
    wrong.preload = 'auto';

    let wordBoxes;
    let aList;

    let select = null;
    let mouse = {
        x: 0,
        y: 0,
        offX: 0,
        offY: 0
    };


    const setup = () => {
        wordBoxes = [];
        let answer = words[Math.floor(Math.random() * words.length)];
        aList = answer.split(" ");

        for (let i = 0; i < aList.length; i++) {
            let word = aList[i];
            let w = word.length * 20 + 5;

            let x = randRange(canvas.width * 0.1, canvas.width * 0.9);
            let y = randRange(canvas.height * 0.1, canvas.height * 0.9);

            wordBoxes.push({
                word, x, y, w, h: 50, order: 0
            });
        }
    }

    const start = (event) => {
        const getClick = () => {
            for (let i = 0; i < wordBoxes.length; i++) {
                let box = wordBoxes[i];
                if (mouse.x > box.x && mouse.x < box.x + box.w && mouse.y > box.y && mouse.y < box.y + box.h) {
                    return box;
                }
            }
            return null;
        }

        select = getClick();

        if (select == null) {
            return;
        }

        mouse.offX = mouse.x - select.x;
        mouse.offY = mouse.y - select.y;
    }

    const move = (event) => {
        if (select == null) {
            return;
        }

        select.x = mouse.x - mouse.offX;
        select.y = mouse.y - mouse.offY;
    }

    const end = () => {
        select = null;
    }


    // click 
    canvas.addEventListener("mousedown", (event)=>{
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
        start();
    });
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", (event) => {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
        move();
    });

    // touch screen
    canvas.addEventListener("touchstart", ()=>{
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        start();
    });
    canvas.addEventListener("touchend", end);
    canvas.addEventListener("touchmove", (event) => {
        // event.touches[0].clientX, event.touches[0].clientY
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        move();
    });

    checkBtn.addEventListener("click", () => {

        const checkAnswer = () => {
            let sArray = Array.from(wordBoxes, (word) => word.word);
            let len = sArray.length;
            for(let i = 0; i < len; i++){
                console.log(sArray[i], aList[i]);
                if(sArray[i] != aList[i]){
                    return false;
                }
            }
            return true;
        }

        if(checkAnswer()){
            correct.currentTime = 0;
            correct.play();
            setup();
        }
        else {
            wrong.currentTime = 0;
            wrong.play();
        }

        console.log(checkAnswer());
    });

    const anim = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        wordBoxes.forEach((box, index) => {
            // rectangle
            ctx.fillStyle = "black";
            ctx.fillRect(box.x, box.y, box.w, box.h);


            // word text
            ctx.fillStyle = "red";
            ctx.font = `20px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${box.word}`, box.x + box.w / 2, box.y + box.h / 2);

            // circle
            ctx.beginPath();
            ctx.arc(box.x, box.y, box.h / 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "black";
            let orderX = Math.floor(box.x / canvas.width * WIDTH);
            let orderY = Math.floor(box.y / canvas.height * HEIGHT);
            let order = orderX + orderY * WIDTH;
            box.order = order;
            ctx.fillText(`${index + 1}`, box.x, box.y);

        });

        wordBoxes.sort((a, b) => a.order - b.order);

        window.requestAnimationFrame(anim);
    }


    setup();
    document.querySelector('#start').classList.add('hide');
    window.requestAnimationFrame(anim);
}