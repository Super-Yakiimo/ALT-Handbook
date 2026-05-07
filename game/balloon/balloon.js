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
        rad: Math.random() * 50 + 100,
        name: word.name,
        img,
        color: getColor(),
        pick: false
    }

    // return object
    return balloon;
}

const makeBalloons = (vocab) => {
    let type = document.querySelector("#type").value;
    console.log('type: ', type);

    let balloons = [];

    const getState = (i) => {
        // set the state
        if(type == 0){
            // text
            return false;
        }
        if(type == 1){
            // img
            return true;
        }
        if(i < (vocab.length / 2)){
            return false;
        }
        return true;
    }

    // add balloons
    for (let i = 0; i < vocab.length; i++) {
        // pick a word
        let word = vocab[i];
        // make balloon
        let balloon = makeBalloon(word);
        // get text or img
        balloon.state = getState(i);
        // add to list
        balloons.push(balloon);
    }

    return balloons;
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

    // wind variables
    let windX = 0;
    let windY = 0;

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
            particle.x += (particle.dx + windX);
            particle.y += (particle.dy + windY);

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

            balloon.x += (balloon.dx + windX);
            balloon.y += (balloon.dy + windY);

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
            if (balloon.state) {
                ctx.drawImage(balloon.img, balloon.x - balloon.rad / 2, balloon.y - balloon.rad / 2, balloon.rad, balloon.rad);
            }

            // text
            if (!balloon.state) {
                ctx.font = "30px Arial";
                ctx.fillStyle = "rgb(255, 255, 255)";
                ctx.fillText(balloon.name, balloon.x, balloon.y);
            }


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
        //console.log(balloons);

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
            //console.log(bNumb, vocab.length);
        }
        let s = vocab.sort(() => Math.random() - 0.5).splice(0, bNumb / 2);
        s = [...s, ...s];
        balloons = makeBalloons(s);
        //console.log(s);

        let pick = null;

        let handle = setInterval(() => {
            time += 1;
        }, 1000);

        canvas.addEventListener("click", (event) => {
            let result = checkTap();

            if (result == -1) {
                return;
            }

            if (balloons[result].pick == true) {
                return;
            }

            if (pick == null) {
                pick = result;
                balloons[result].pick = true;
                return;
            }

            //console.log(balloons[pick].name == balloons[result].name);
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
        while (bNumb >= vocab.length) {
            vocab = [...vocab, ...vocab];
        }
        // get selcted number of random vocab
        let s = vocab.sort(() => Math.random() - 0.5).splice(0, bNumb);
        balloons = makeBalloons(s);
        //console.log(balloons);

        // top:0px;right:0px;z-index:5;position:absolute;background:white;
        let text = document.createElement('p');
        text.style = 'top:0px;right:0px;z-index:5;position:absolute;background:white;font-size:30px;';
        document.body.appendChild(text);
    

        let answer = null;

        const questMaker=()=>{
            if(balloons.length <= 0){
                return;
            }
            answer = balloons[0];
            setTimeout(() => {
                speakText(`Find the ${answer.name} balloon.`);
            }, 500);
            //console.log(answer.name);
            text.innerHTML = `Find the ${answer.name} balloon`;
        }

        questMaker();

        canvas.addEventListener("click", (event) => {
            let result = checkTap();
            //console.log(result);

            if (result == -1) {
                return;
            }

            if(answer == null){
                return;
            }

            // get the clicked balloon 
            let click = balloons[result];

            // check if correct balloon
            //console.log(click);
            if(answer.name != click.name){
                wrong.currentTime = 0;
                wrong.play();
                return;
            }

            // remote the ballon from the list 
            let pop = balloons.splice(result, 1)[0];

            correct.currentTime = 0;
            correct.play();

            answer = null;
            score++;

            questMaker();

            //console.log(pop);

            // say name
            speakText(pop.name);

            addPop(pop.x, pop.y);

            if (balloons.length == 0) {
                end();
            }
        });
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

    // change the wind
    setInterval(() => {
        const PATH = [-1, 0, 1]
        windX = PATH[Math.floor(Math.random() * 3)];
        windY = PATH[Math.floor(Math.random() * 3)];
        //console.log(windX, windY);
    }, 10000);

    // give the balloon new speed
    let pusher = setInterval(() => {
        if (balloons.length <= 0) {
            return clearInterval(pusher);
        }
        let randBalloon = balloons[Math.floor(Math.random() * balloons.length)];
        randBalloon.dx = rand() * 2;
        randBalloon.dy = rand() * 2;
    }, 1000);
}


window.onload = function () {
    makeCheckBox();
}

document.addEventListener('contextmenu', event => event.preventDefault());