const oneZero = () => {
    return Math.random() > 0.5 ? 1 : -1;
}

const rand = () => {
    return Math.random() * oneZero();
}

const getColor = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r},${g},${b})`;
}

const makeBalloon = (word) => {
    // make image
    let img = document.createElement('img');
    img.src = `../../resource/img/${word.link}`;

    // create balloon
    let balloon = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: rand(),
        dy: rand(),
        rad: 100,
        name: word.name,
        img,
        color: getColor(),
        pick: false
    }

    // return object
    return balloon;
}

const makeBalloons = (vocab) => {
    let balloons = [];
    // add balloons
    for (let i = 0; i < vocab.length; i++) {
        // pick a word
        let word = vocab[i];
        // make balloon
        let balloon = makeBalloon(word);
        // add to list
        balloons.push(balloon);
    }

    return balloons;
}

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


const start = () => {

    // sound stuff
    const correct = new Audio('../../resource/sound/bell.mp3');
    const wrong = new Audio('../../resource/sound/incorrect.mp3');
    correct.preload = 'auto';
    wrong.preload = 'auto';

    // canvas
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    // vocab
    let vocab = getVocab();
    let level = document.querySelector('#level');
    // number of balloons to make
    let bNumb = Number(level.value);


    if (vocab.length == 0) {
        return alert('pleased select some vocab');
    }

    // game mode select
    let mode = Number(document.querySelector("#mode").value);

    // set the canvas width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //score
    let score = 0;

    // time
    let time = 0;

    // close the start screen
    document.querySelector('#start').classList.add('hide');

    let balloons = [], particles = [];

    const anim = () => {
        //ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        ctx.fillText(`particle ${particles.length}`, 100, 50);

        ctx.textAlign = "center"; // Horizontal alignment
        ctx.textBaseline = "middle"; // Vertical alignment

        particles = particles.filter(part => part.y < canvas.height + part.rad);

        particles.forEach((particle) => {
            // add grvity
            particle.dy += 0.1;

            // move 
            particle.x += particle.dx;
            particle.y += particle.dy;

            // draw
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.rad, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.stroke();
        });

        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for (let i = balloons.length - 1; i >= 0; i--) {
            let balloon = balloons[i];

            balloon.x += balloon.dx;
            balloon.y += balloon.dy;

            // x
            if (balloon.x - balloon.rad > canvas.width) {
                balloon.x = -balloon.rad;
            }
            else if (balloon.x + balloon.rad < 0) {
                balloon.x = canvas.width + balloon.rad;
            }

            // y
            if (balloon.y - balloon.rad > canvas.height) {
                balloon.y = -balloon.rad;
            }
            else if (balloon.y + balloon.rad < 0) {
                balloon.y = canvas.height + balloon.rad;
            }

            // circle
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.rad, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.lineWidth = 5;
            ctx.strokeStyle = balloon.color;
            ctx.fill();
            ctx.stroke();

            // img
            ctx.drawImage(balloon.img, balloon.x - balloon.rad / 2, balloon.y - balloon.rad / 2, balloon.rad, balloon.rad);

            // text
            ctx.font = "30px Arial";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText(balloon.name, balloon.x, balloon.y);

            if (balloon.pick == true) {
                // hignlight when selected
                ctx.beginPath();
                ctx.arc(balloon.x, balloon.y, balloon.rad, 0, Math.PI * 2);
                ctx.lineWidth = 10;
                ctx.strokeStyle = "pink";
                ctx.stroke();
            }
        }

        ctx.fillText(score, 50, 50);

        window.requestAnimationFrame(anim);
    }

    const checkTap = () => {
        for (let i = 0; i < balloons.length; i++) {
            let balloon = balloons[i];
            let deltaX = Math.abs(balloon.x - event.offsetX);
            let deltaY = Math.abs(balloon.y - event.offsetY);
            let dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            //console.log(dist);
            if (dist < balloon.rad) {
                return i
            }
        }
        return -1;
    }

    const addPop = (x, y) => {
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: x,
                y: y,
                rad: 20,
                dx: rand() * 5,
                dy: rand() * 5,
                color: getColor()
            });
        }
    }

    const freeMode = () => {
        while (bNumb >= vocab.length) {
            vocab = [...vocab, ...vocab];
        }
        // get selcted number of random vocab
        let s = vocab.sort(() => Math.random() - 0.5).splice(0, bNumb);
        balloons = makeBalloons(s);
        console.log(balloons);

        canvas.addEventListener("click", (event) => {
            let result = checkTap();
            console.log(result);

            if (result == -1) {
                return;
            }

            let pop = balloons.splice(result, 1)[0];
            //console.log(pop);

            // say name
            speakText(pop.name);

            addPop(pop.x, pop.y);

            if (balloons.length == 0) {
                end();
            }
        });
    }

    const matchMode = () => {
        while (bNumb >= vocab.length / 2) {
            vocab = [...vocab, ...vocab];
            console.log(bNumb, vocab.length);
        }
        let s = vocab.sort(() => Math.random() - 0.5).splice(0, bNumb / 2);
        s = [...s, ...s];
        balloons = makeBalloons(s);

        let pick = null;

        let handle = setInterval(() => {
            time += 1;
        }, 1000);

        canvas.addEventListener("click", (event) => {
            let result = checkTap();

            if (result == -1) {
                return;
            }

            if(balloons[result].pick == true){
                return;
            }

            if (pick == null) {
                pick = result;
                balloons[result].pick = true;
                return;
            }

            console.log(balloons[pick].name == balloons[result].name);
            if (balloons[pick].name == balloons[result].name) {
                correct.currentTime = 0;
                correct.play();
                // pop the balloons 
                balloons[result].pop = true;
                balloons[pick].pop = true;

                // the baloons that pop
                let pops = balloons.filter((balloon) => balloon.pop != null);
                // the balloons that do not pop
                balloons = balloons.filter((balloon) => balloon.pop == null);
                // create pop effect for ballons that pop
                pops.forEach(pop => {
                    addPop(pop.x, pop.y);
                    speakText(pop.name);
                });
                pick = null;
                score++;
            }
            else {
                wrong.currentTime = 0;
                wrong.play();
                balloons[pick].pick = false;
                pick = null;
            }

            if (balloons.length == 0) {
                clearInterval(handle);
                end();
            }


        });
    }

    const end = () => {
        // close the start screen
        document.querySelector('#end').classList.remove('hide');
        let timeText = document.querySelector('#timeText');
        let scoreText = document.querySelector('#scoreText');
        timeText.innerHTML = time;
        scoreText.innerHTML = score;
    }

    const testMode = () => {

    }


    // chose the mode
    console.log(mode);
    switch (mode) {
        case 0:
            freeMode();
            break;
        case 1:
            matchMode();
            break;
        case 2:
            testMode();
            break;
        default:
            break;
    }


    window.requestAnimationFrame(anim);

    let pusher = setInterval(() => {

        if (balloons.length <= 0) {
            return clearInterval(pusher);
        }
        let randBalloon = balloons[Math.floor(Math.random() * balloons.length)];
        randBalloon.dx = rand();
        randBalloon.dy = rand();
    }, 1000);
}


window.onload = function () {
    makeCheckBox();
}

document.addEventListener('contextmenu', event => event.preventDefault());