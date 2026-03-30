const getColor = () => {
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

    const dctx = draw.getContext('2d');
    const tctx = draw.getContext('2d');

    let widthPx, heightPx;

    const setDim = () => {
        console.log(canCon);
        widthPx = canCon.clientWidth;
        heightPx = canCon.clientHeight;
        console.log(widthPx, heightPx);
        draw.width = widthPx;
        draw.height = heightPx;
        tool.width = widthPx;
        tool.height = heightPx;
    }

    let particles = [];
    let earase = false;


    window.addEventListener("keydown", () => {
        particles.forEach((particle) => {
            particle.g = 0.1;
            particle.dx = rand() * 5;
            particle.dy = rand() * 5;
        });
    });

    tool.addEventListener("mousedown", () => {
        earase = true;
    });

    tool.addEventListener("mouseup", () => {
        earase = false;
    });

    tool.addEventListener("mousemove", (event) => {
        if (earase) {
            particles.forEach((particle) => {
                let deltaX = Math.abs(particle.x - event.offsetX);
                let deltaY = Math.abs(particle.y - event.offsetY);
                let dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                if (dist < particle.rad) {
                    particle.g = Math.random();
                    particle.dx = rand() * 5;
                    particle.dy = rand() * 5;
                }
            });

            return;
        }
        particles.push({
            x: event.offsetX,
            y: event.offsetY,
            rad: 20,
            dx: 0,
            dy: 0,
            g: 0,
            color: getColor()
        });
    });

    const anim = () => {
        //dctx.clearRect(0, 0, innerWidth, innerHeight);
        dctx.fillStyle = "rgba(0, 0, 0, 0.1)";
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
    window.requestAnimationFrame(anim);

}

window.onload = function () {
    start();
}

