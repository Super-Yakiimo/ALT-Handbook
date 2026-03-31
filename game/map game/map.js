
/* 

sound variables

*/

const CORRECT = "../../resource/sound/bell.mp3";


function speakText(text) {

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


/*
entry point
*/

function start() {
    //hide the control screen
    document.querySelector(".mode-select").classList.add("hide");

    //audio
    var correctAudio = new Audio(CORRECT);

    // game mode selection inputs
    const mapSelect = this.document.querySelector("#mapSelect");
    const modeSelect = this.document.querySelector("#modeSelect");

    // html elements
    const gameRoot = this.document.querySelector(".game");
    const canCon = this.document.querySelector(".canCon");

    // canvases 
    const mapCan = this.document.querySelector("#map");
    const charCan = this.document.querySelector("#char");
    charCtx = charCan.getContext('2d');

    // sound btns
    let locSound = document.querySelector("#locSound");
    let questSound = document.querySelector("#questSound");

    /*
    player control input and text display
    */

    const left = this.document.querySelector("#left");
    const straight = this.document.querySelector("#straight");
    const right = this.document.querySelector("#right");

    const xText = this.document.querySelector("#xText");
    const yText = this.document.querySelector("#yText");
    const nameText = this.document.querySelector("#nameText");
    const goalText = this.document.querySelector("#goalText");


    /*
    player variables
    */

    // directions
    const DIR = {
        DOWN: [0, 1, 2, 3],
        RIGHT: [4, 5, 6, 7],
        LEFT: [8, 9, 10, 11],
        UP: [12, 13, 14, 15]
    };
    const ORDER = [DIR.DOWN, DIR.LEFT, DIR.UP, DIR.RIGHT];

    let moving = false;
    let xIndex = 0;
    let yIndex = 0;
    let playerInfo = {
        x: 0,
        y: 0,
        xIndex: 0,
        yIndex: 0,
        animIndex: 0,
        index: 0,
        dir: DIR.UP,
        dirIndex: 2
    };

    // sprite sheet dimensions for slicing and drawing 
    const SWIDTH = 4;
    const SHEIGHT = 4;

    // how big the slice is
    let SLICE_WIDTH;
    let SLICE_HEIGHT;

    // char img
    let charImg = document.querySelector('#charImg');
    charImg.onload = () => {
        SLICE_WIDTH = charImg.width / SWIDTH;
        SLICE_HEIGHT = charImg.height / SHEIGHT;
    }
    charImg.src = src = "../../../resource/img/character.png";

    // block dimensions
    let blockDim;

    // the selected layout to use
    let selectMap = null;

    // use town or school locations 
    let selectList = (mapSelect.value == "school") ? SCHOOL : TOWN;
    let vertMap = (mapSelect.value == "school") ? SCHOOL_V : TOWN_V;
    let horMap = (mapSelect.value == "school") ? SCHOOL_H : TOWN_H;

    // pos list for player to move to the center of each tile
    let posList = [];

    // make quiz question
    const makeQuiz = () => {
        // get current tile
        let currName = selectMap.layout[selectMap.row * yIndex + xIndex].room.name;
        // filter out road and hallway // filter out current place
        let filterMap = selectMap.layout.filter(block => block.room.name != 'hallway' && block.room.name != 'road' && block.room.name != 'none' &&  block.room.name != currName);
        console.log(filterMap);
        let rand = Math.floor(Math.random() * filterMap.length);
        goalText.innerHTML = filterMap[rand].room.name;
    }

    // upate ui info
    const updateUI = () => {
        let name = selectMap.layout[selectMap.row * yIndex + xIndex].room.name
        xText.innerHTML = xIndex;
        yText.innerHTML = yIndex;
        nameText.innerHTML = name;

        if (modeSelect.value == 'quiz' && goalText.innerHTML == name) {
            console.log('correct');
            correctAudio.play();
            makeQuiz();
        }
    }

    // draw the board
    const drawBoard = () => {
        // map canvas draw context
        let mCtx = mapCan.getContext('2d');

        for (let i = 0; i < selectMap.width; i++) {
            for (let j = 0; j < selectMap.height; j++) {
                mCtx.fillStyle = `rgb(${i * selectMap.width}, ${j * selectMap.height}, 0)`;
                mCtx.fillRect(i * blockDim, j * blockDim, blockDim, blockDim);
            }
        }

        selectMap.layout.forEach(block => {
            if (block.room.link == null) {
                // don't draw null tiles not meant to be seen
                return;
            }
            let img = document.createElement('img');
            img.onload = function () {
                mCtx.drawImage(img, 0, 0, img.width, img.height, block.x * blockDim, block.y * blockDim, block.w * blockDim, block.h * blockDim);
            }
            let path = `../../resource/img/${mapSelect.value}/${block.room.link}`;
            img.src = path;
        });
    }


    // move 
    const move = () => {
        if (moving == true) {
            return;
        }
        moving = true;

        // store current postion before move
        let nextX = xIndex;
        let nextY = yIndex;

        switch (playerInfo.dir) {
            case DIR.UP:
                nextY += 1;
                break;
            case DIR.RIGHT:
                nextX += 1;
                break;
            case DIR.DOWN:
                nextY -= 1;
                break;
            case DIR.LEFT:
                nextX -= 1;
                break;
        }

        // check boundaries stop if about to move out of bounds
        if (nextX < 0 || nextX >= selectMap.row || nextY < 0 || nextY >= selectMap.col) {
            moving = false;
            return console.log('stop!');
        }

        // check if the next room is a null room and should not be moved to
        if (selectMap.layout[selectMap.row * nextY + nextX].room.link == null) {
            moving = false;
            return console.log('null');
        }

        speakText('go straight');

        // update the player index
        xIndex = nextX;
        yIndex = nextY;

        // get the next position
        let nextRaw = posList[yIndex * selectMap.row + xIndex];

        // get the dist to next spot
        let distX = nextRaw.x - playerInfo.x;
        let distY = nextRaw.y - playerInfo.y;

        // number of steps to go from start to end
        let step = 20;
        // step counter
        let count = 0;

        let xStep = distX / step;
        let yStep = distY / step;

        // move in 20 steps and stop
        let handle = setInterval(() => {
            if (count > step) {
                clearInterval(handle);
                playerInfo.x = nextRaw.x;
                playerInfo.y = nextRaw.y;
                moving = false;
            }
            playerInfo.x += xStep;
            playerInfo.y += yStep;
            count++;
        }, step);

        // udpate ui 
        updateUI();
    }


    // turn dir is -1 or 1
    const turn = (dir) => {
        if (moving == true) {
            return;
        }
        moving = true;

        // speak when turning
        let text = (dir == -1) ? 'turn left' : 'turn right';
        speakText(text);

        playerInfo.dirIndex += dir;

        if (playerInfo.dirIndex < 0) {
            playerInfo.dirIndex = 3;
        }
        if (playerInfo.dirIndex >= 4) {
            playerInfo.dirIndex = 0;
        }

        playerInfo.dir = ORDER[playerInfo.dirIndex];
        moving = false;
    }

    // set dimenions
    const setDim = () => {
        let pxWidth, pxHeight;

        // check for vetical vs horizontal map layout
        if (gameRoot.clientWidth > gameRoot.clientHeight) {
            selectMap = horMap;
            // width > height horizontal map
            blockDim = gameRoot.clientWidth / selectMap.width;
        }
        else {
            // vetical map
            selectMap = vertMap;
            blockDim = gameRoot.clientHeight / selectMap.height;
        }

        posList = [];
        // create the map get the pictures add to layout
        let copyList = JSON.parse(JSON.stringify(selectList)).sort(() => Math.random() - 0.5);
        // add the rooms to the map 
        selectMap.layout.forEach((block) => {
            if (block.room == null) {
                block.room = copyList.splice(0, 1)[0];
            }

            // create pos list
            let x = (block.x + block.w / 2) * blockDim - blockDim / 2;
            let y = (block.y + block.h / 2) * blockDim - blockDim / 2;
            posList.push({ x, y });
        });

        // create quiz question 
        if (modeSelect.value == 'quiz') {
            questSound.disabled = false;
            makeQuiz();
        }

        let initPos = posList[selectMap.width * yIndex + xIndex];
        playerInfo.x = initPos.x;
        playerInfo.y = initPos.y;

        // set the dim of the canvases
        pxWidth = blockDim * selectMap.width;
        pxHeight = blockDim * selectMap.height;

        // set dim of the container
        canCon.style.width = pxWidth + "px";
        canCon.style.height = pxHeight + "px";

        // map canvas set dim
        mapCan.width = pxWidth;
        mapCan.height = pxHeight;

        // map canvas set height
        charCan.width = pxWidth;
        charCan.height = pxHeight;

        // set the player drawing variables
        playerInfo.dim = blockDim / 2;

        // draw the board after resize
        drawBoard();
    }

    setInterval(() => {
        playerInfo.animIndex = playerInfo.dir[playerInfo.index];
        playerInfo.index++;
        if (playerInfo.index >= 4) {
            playerInfo.index = 0;
        }
    }, 300);

    const anim = () => {
        // clear
        charCtx.clearRect(0, 0, innerWidth, innerHeight);

        // draw character
        let xPos = playerInfo.x;
        let yPos = playerInfo.y;

        // soure where to pull the image from 
        let sX = playerInfo.animIndex % SWIDTH * SLICE_WIDTH;
        let sY = Math.floor(playerInfo.animIndex / SWIDTH) * (charImg.height / SHEIGHT);

        // draw the character
        charCtx.drawImage(charImg, sX, sY, SLICE_WIDTH, SLICE_HEIGHT, xPos, yPos, blockDim, blockDim);

        // loop
        window.requestAnimationFrame(anim);
    }

    setDim();
    updateUI();


    locSound.addEventListener("click", ()=>{
        let name = selectMap.layout[selectMap.row * yIndex + xIndex].room.name;
        console.log(name);
        speakText(name);
    });

    questSound.addEventListener("click", ()=>{
        console.log(goalText.innerHTML);
        let text = `Where is the ${goalText.innerHTML}?`;
        speakText(text);
    });

    left.addEventListener('click', () => {
        turn(-1);
    });

    right.addEventListener('click', () => {
        turn(1);
    });

    straight.addEventListener('click', move);

    window.requestAnimationFrame(anim);

    window.addEventListener('resize', setDim);
}