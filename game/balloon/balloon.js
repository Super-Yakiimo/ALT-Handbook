const oneZero = () => {
    return Math.random() > 0.5 ? 1 : -1;
}

const rand = () => {
    return Math.random() * oneZero();
}


const start = () => {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    let vocab = getVocab();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.querySelector('#start').classList.add('hide');

    let balloons = [];

    for (let i = 0; i < 100; i++) {
        
        // pick a word
        let word = vocab[Math.floor(Math.random() * vocab.length)];
        // make image
        let img = document.createElement('img');
        img.src = `../../resource/img/${word.link}`;
        // add balloon
        balloons.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: rand(),
            dy: rand(),
            rad: 100,
            name: word.name,
            img
        });
    }


    const anim = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        ctx.textAlign = "center"; // Horizontal alignment
        ctx.textBaseline = "middle"; // Vertical alignment

        balloons.forEach((balloon, index) => {

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
            ctx.stroke();

            ctx.drawImage(balloon.img, balloon.x - balloon.rad / 2, balloon.y- balloon.rad / 2, balloon.rad , balloon.rad);

            ctx.font = "30px Arial";
            ctx.fillText(balloon.name, balloon.x, balloon.y);
        });

        window.requestAnimationFrame(anim);
    }

    window.requestAnimationFrame(anim);
}