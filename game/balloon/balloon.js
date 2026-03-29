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
        color: getColor()
    }

    // return object
    return balloon;
}

const makeBalloons = (numb, vocab) => {
    let balloons = [];
    // add balloons
    for (let i = 0; i < numb; i++) {
        // pick a word
        let word = vocab[Math.floor(Math.random() * vocab.length)];
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
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    let vocab = getVocab();
    let level = document.querySelector('#level');
    let bNumb = Number(level.value);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.querySelector('#start').classList.add('hide');

    let balloons = makeBalloons(bNumb, vocab);
    let particles = [];

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

        for(let i = balloons.length - 1; i >= 0; i--){
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

            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.rad, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.fill();
            ctx.stroke();

            ctx.drawImage(balloon.img, balloon.x - balloon.rad / 2, balloon.y - balloon.rad / 2, balloon.rad, balloon.rad);

            ctx.font = "30px Arial";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText(balloon.name, balloon.x, balloon.y);
        }

         ctx.fillText(particles.length, 50, 50);

        window.requestAnimationFrame(anim);
    }


    canvas.addEventListener("click", (event) => {

        // ctx.beginPath();
        // ctx.arc(event.offsetX, event.offsetY, 20, 0, Math.PI * 2);
        // ctx.fill()
        // ctx.stroke();

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

        let result = checkTap();
        console.log(result);

        if (result == -1) {
            return;
        }

        let pop = balloons.splice(result, 1)[0];
        //console.log(pop);

        // say name
        speakText(pop.name);

        for (let i = 0; i < 20; i++) {
            particles.push({
                x: pop.x,
                y: pop.y,
                rad: 20,
                dx: rand() * 5,
                dy: rand() * 5,
                color: getColor()
            });
        }
    });

    window.requestAnimationFrame(anim);
}