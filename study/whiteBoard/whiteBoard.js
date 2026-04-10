const Mode = {
    Draw: 0,
    Earase: 1,
    Stamp: 2
};

const randColor = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r},${g},${b})`;
}

const rand = () => {
    return Math.random() * (Math.random() > 0.5 ? 1 : -1);
}

const start = () => {
    const draw = this.document.querySelector("#draw");
    const tool = this.document.querySelector("#tool");
    const canCon = this.document.querySelector(".canCon");


    const drawBtn = this.document.querySelector("#drawBtn");
    const earaseBtn = this.document.querySelector("#earaseBtn");
    const stampBtn = this.document.querySelector("#stampBtn");
    const clearBtn = this.document.querySelector("#clearBtn");

    const backColor = this.document.querySelector("#backColor");
    const color = this.document.querySelector("#color");
    const randColor = this.document.querySelector("#randColor");

    const dctx = draw.getContext('2d');
    const tctx = draw.getContext('2d');

    let mode = Mode.Draw;

    let widthPx, heightPx;

    const setDim = () => {
        widthPx = canCon.clientWidth;
        heightPx = canCon.clientHeight;
        console.log(widthPx, heightPx);
        draw.width = widthPx;
        draw.height = heightPx;
        tool.width = widthPx;
        tool.height = heightPx;
    }

    const control = (xPos, yPos) => {
        if (active == false) {
            return;
        }

        let pickColor = sColor;

        if (randColorCheck) {
            pickColor = randColor();
        }

        switch (mode) {
            case Mode.Draw:
                particles.push({
                    x: xPos,
                    y: yPos,
                    rad: 20,
                    dx: 0,
                    dy: 0,
                    g: 0,
                    color: pickColor
                });
                break;
            case Mode.Earase:
                particles.forEach((particle) => {
                    let deltaX = Math.abs(particle.x - xPos);
                    let deltaY = Math.abs(particle.y - yPos);
                    let dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                    if (dist < particle.rad) {
                        particle.g = Math.random();
                        particle.dx = rand() * 5;
                        particle.dy = rand() * 5;
                    }
                });
                break;
            default:
                break;
        }
    }

    // store when user is drawing
    let particles = [];
    // mouse / user touch screen
    let active = false;
    // selected user color
    let sColor;
    // select background color
    let sBackColor = "rgba(255, 255, 255, 0.04)";
    // is rand color selected
    let randColorCheck = false;

    // click
    tool.addEventListener("mousedown", () => {
        active = true;
        console.log('start');
    });

    tool.addEventListener("mouseup", () => {
        console.log('end');
        active = false;
    });

    tool.addEventListener("mousemove", (event) => {
        control(event.offsetX, event.offsetY);
    });

    // touch

    tool.addEventListener("touchstart", () => {
        active = true;
        console.log('start');
    });

    tool.addEventListener("touchend", () => {
        active = false;
        console.log('end');
    });

    tool.addEventListener("touchmove", (event) => {
        control(event.touches[0].clientX, event.touches[0].clientY);
    });

    // buttons
    drawBtn.addEventListener("click", () => {
        mode = Mode.Draw;
    });

    earaseBtn.addEventListener("click", () => {
        mode = Mode.Earase;
    });

    stampBtn.addEventListener("click", () => {
        mode = Mode.Stamp;
    });

    clearBtn.addEventListener("click", () => {
        particles.forEach((particle) => {
            particle.g = 0.1;
            particle.dx = rand() * 5;
            particle.dy = rand() * 5;
        });
    });

    // color picker
    color.addEventListener("change", () => {
        console.log(color.value);
        sColor = color.value;
    });

    backColor.addEventListener("change", () => {
        let hex = backColor.value;
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        const rgba = `rgba(${r}, ${g}, ${b}, ${0.04})`;
        sBackColor = rgba;
    });

    randColor.addEventListener("click", () => {
        randColorCheck = !randColorCheck;
    });

    // anim function
    const anim = () => {
        //dctx.clearRect(0, 0, innerWidth, innerHeight);
        dctx.fillStyle = sBackColor;
        dctx.fillRect(0, 0, innerWidth, innerHeight);

        particles = particles.filter(part => part.y < heightPx + part.rad);

        particles.forEach((particle) => {
            // add grvity
            particle.dy += particle.g;

            // move 
            particle.x += particle.dx;
            particle.y += particle.dy;

            // draw
            dctx.beginPath();
            dctx.arc(particle.x, particle.y, particle.rad, 0, Math.PI * 2);
            dctx.fillStyle = particle.color;
            dctx.fill();
        });

        window.requestAnimationFrame(anim);
    }

    setDim();
    window.addEventListener('resize', setDim);
    window.requestAnimationFrame(anim);

}

window.onload = function () {
    start();
}


document.addEventListener('contextmenu', event => event.preventDefault());
