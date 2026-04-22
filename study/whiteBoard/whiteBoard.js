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

    const size = this.document.querySelector("#size");
    const sizeOut = this.document.querySelector("#sizeOut");

    const stampSize = this.document.querySelector("#stampSize");
    const stampSizeOut = this.document.querySelector("#stampSizeOut");

    const selectType = document.querySelector("#selectType");
    const selectImg = document.querySelector("#selectImg");

    const dctx = draw.getContext('2d');
    const tctx = tool.getContext('2d');

    let mode = Mode.Draw;

    let widthPx, heightPx;

    let radias = 10;
    let stampDim = 100;

    const setDim = () => {
        widthPx = canCon.clientWidth;
        heightPx = canCon.clientHeight;
        console.log(widthPx, heightPx);
        draw.width = widthPx;
        draw.height = heightPx;
        tool.width = widthPx;
        tool.height = heightPx;
    }

    const genImg = () => {
        let pic = getType(selectType.value);
        console.log(pic);
        selectImg.innerHTML = "";
        pic.forEach((value, index) => {
            let input = document.createElement('input');
            input.id = value.name;
            input.type = 'radio';
            input.name = 'type';

            let img = document.createElement('img');
            img.src = `../../resource/img/${value.link}`;

            let label = document.createElement('label');
            label.htmlFor = value.name;
            label.appendChild(img);


            selectImg.appendChild(input);
            selectImg.appendChild(label);

            label.addEventListener("click", () => {
                selectStamp = img;
                mode = Mode.Stamp;
            });
        });
    }

    const control = () => {
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
                    type: "part",
                    x: pos.x,
                    y: pos.y,
                    rad: radias,
                    dx: 0,
                    dy: 0,
                    g: 0,
                    color: pickColor
                });
                break;
            case Mode.Earase:
                particles.forEach((particle) => {
                    let deltaX = Math.abs(particle.x - pos.x);
                    let deltaY = Math.abs(particle.y - pos.y);
                    let dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                    if (dist < (particle.rad + radias)) {
                        particle.g = Math.random();
                        particle.dx = rand() * 5;
                        particle.dy = rand() * 5;
                    }
                });
                break;
            case Mode.Stamp:
                particles.push({
                    type: "img",
                    x: pos.x - stampDim / 2,
                    y: pos.y - stampDim / 2,
                    rad: stampDim,
                    dx: 0,
                    dy: 0,
                    g: 0,
                    color: pickColor,
                    img: selectStamp
                });
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

    // position of click or touch
    let pos = {
        x: 0,
        y: 0
    }

    // click
    tool.addEventListener("mousedown", (event) => {
        active = true;
        pos = {
            x: event.offsetX,
            y: event.offsetY
        }
        control();
    });

    tool.addEventListener("mouseup", () => {
        console.log('end');
        active = false;
    });

    tool.addEventListener("mousemove", (event) => {
        pos = {
            x: event.offsetX,
            y: event.offsetY
        }
        control();
    });

    // touch

    tool.addEventListener("touchstart", (event) => {
        active = true;
        pos = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
        control();
    });

    tool.addEventListener("touchend", () => {
        active = false;
        console.log('end');
        pos = {
            x: -radias,
            y: -radias
        }
    });

    tool.addEventListener("mouseout", () => {
        console.log('out');
        pos = {
            x: -radias,
            y: -radias
        }
    });


    tool.addEventListener("touchmove", (event) => {
        pos = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
        control();
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
    sColor = color.value;
    color.addEventListener("change", () => {
        console.log(color.value);
        sColor = color.value;
    });


    // the selected image to stamp
    let selectStamp = null;

    const getBackColor = () => {
        let hex = backColor.value;
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        const rgba = `rgba(${r}, ${g}, ${b}, ${0.04})`;
        sBackColor = rgba;
    }

    getBackColor();
    backColor.addEventListener("change", getBackColor);

    randColor.addEventListener("click", () => {
        randColorCheck = !randColorCheck;
    });

    // control draw size
    radias = Number(size.value);
    sizeOut.innerHTML = radias;

    size.addEventListener("change", () => {
        radias = Number(size.value);
        sizeOut.innerHTML = radias;
    });

    // stamp dimensions
    stampDim = Number(stampSize.value);
    stampSizeOut.innerHTML = stampDim;

    stampSize.addEventListener("change", () => {
        stampDim = Number(stampSize.value);
        stampSizeOut.innerHTML = stampDim;
    });


    // anim function
    const anim = () => {
        //dctx.clearRect(0, 0, innerWidth, innerHeight);
        dctx.fillStyle = sBackColor;
        dctx.fillRect(0, 0, innerWidth, innerHeight);

        tctx.clearRect(0, 0, innerWidth, innerHeight);

        particles = particles.filter(part => part.y < heightPx + part.rad);

        particles.forEach((particle) => {
            // add grvity
            particle.dy += particle.g;

            // move 
            particle.x += particle.dx;
            particle.y += particle.dy;

            if (particle.type == 'img') {
                dctx.drawImage(particle.img, particle.x, particle.y,  particle.rad,  particle.rad);
            }

            if (particle.type == 'part') {
                // draw
                dctx.beginPath();
                dctx.arc(particle.x, particle.y, particle.rad, 0, Math.PI * 2);
                dctx.fillStyle = particle.color;
                dctx.fill();
            }


        });

        if (mode == Mode.Earase || mode == Mode.Draw) {
            tctx.lineWidth = 2;
            tctx.beginPath();
            tctx.strokeStyle = "white";
            tctx.arc(pos.x, pos.y, radias, 0, Math.PI * 2);
            tctx.stroke();
            tctx.beginPath();
            tctx.strokeStyle = "black";
            tctx.arc(pos.x, pos.y, radias + 2, 0, Math.PI * 2);
            tctx.stroke();
        }

        if (mode == Mode.Stamp && selectStamp != null) {
            tctx.drawImage(selectStamp, pos.x - stampDim / 2, pos.y - stampDim / 2, stampDim, stampDim);
        }

        window.requestAnimationFrame(anim);
    }

    // img select for stamps
    LABEL_NAMES.forEach((value, index) => {
        let opt = document.createElement('option');
        opt.innerHTML = value;
        opt.id = INPUT[index];
        selectType.appendChild(opt);
    });

    selectType.addEventListener('change', genImg);


    genImg();
    setDim();
    window.addEventListener('resize', setDim);
    window.requestAnimationFrame(anim);

}

window.onload = function () {
    start();
}


document.addEventListener('contextmenu', event => event.preventDefault());
