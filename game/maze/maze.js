const UP = 1;
const DOWN = 2;
const LEFT = 4;
const RIGHT = 8;
const VISITED = 16;

const WALL = 32;
const FLOOR = 64;

function mazeGen(width, height) {
    let maze = [];
    let posQue = [];

    let currPos = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    }

    for (let i = 0; i < width * height; i++) {
        maze.push(0);
    }

    const getPos = (x, y) => {
        if (x < 0 || x >= width || y < 0 || y >= height) {
            return -1;
        }
        return maze[y * width + x];
    }

    const setBit = (bit) => {
        if (currPos.x < 0 || currPos.x >= width || currPos.y < 0 || currPos.y >= height) {
            return -1;
        }
        maze[currPos.y * width + currPos.x] |= bit;
    }

    const checkOpen = (x, y) => {
        let pos = getPos(x, y);
        if (pos == -1) {
            return false;
        }
        if ((pos & VISITED) > 0) {
            return false;
        }
        return true;
    }

    setBit(VISITED);
    posQue.push(JSON.parse(JSON.stringify(currPos)));

    while (posQue.length > 0) {
        //console.log('pos: ', currPos);
        //console.log(maze);
        //console.log(posQue);
        let options = [];

        // check up
        if (checkOpen(currPos.x, currPos.y + 1)) {
            options.push(UP);
        }

        // check right
        if (checkOpen(currPos.x + 1, currPos.y)) {
            options.push(RIGHT);
        }

        // check down
        if (checkOpen(currPos.x, currPos.y - 1)) {
            options.push(DOWN)
        }

        // check left
        if (checkOpen(currPos.x - 1, currPos.y)) {
            options.push(LEFT);
        }

        //console.log('options: ', options);

        // check number of options
        if (options.length > 0) {
            let randDir = options[Math.floor(Math.random() * options.length)];
            //console.log('dir: ', randDir);
            switch (randDir) {
                case UP:
                    //console.log('up');
                    setBit(UP);
                    currPos.y++;
                    setBit(DOWN);
                    break;
                case DOWN:
                    //console.log('down');
                    setBit(DOWN);
                    currPos.y--;
                    setBit(UP);
                    break;
                case LEFT:
                    //console.log('left');
                    setBit(LEFT);
                    currPos.x--;
                    setBit(RIGHT);
                    break;
                case RIGHT:
                    //console.log('right');
                    setBit(RIGHT);
                    currPos.x++;
                    setBit(LEFT);
                    break;
                default:
                    console.error('not valid direction');
            }
            setBit(VISITED);
            posQue.push(JSON.parse(JSON.stringify(currPos)));
        }
        else {
            //console.log('back');
            // pop end
            posQue.pop();
            currPos = posQue[posQue.length - 1];
        }
    }
    return maze;
}

function tileMapGen(maze, width, height) {
    const TILE_DIM = 4;
    const CELL_TYPES = [
        [
            WALL, WALL, WALL, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, WALL, WALL, WALL
        ], // 16 V
        [
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, WALL, WALL, WALL
        ], // 17 VU
        [
            WALL, WALL, WALL, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL
        ], // 18 VD
        [
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL
        ], // 19 VDU
        [
            WALL, WALL, WALL, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            WALL, WALL, WALL, WALL
        ], // 20 VL
        [
            WALL, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            WALL, WALL, WALL, WALL
        ], // 21 VLU
        [
            WALL, WALL, WALL, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL
        ], // 22 VLD
        [
            WALL, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, WALL
        ], // 23 VLDU
        [
            WALL, WALL, WALL, WALL,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, WALL, WALL, WALL
        ], // 24 VR
        [
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, WALL, WALL, WALL
        ], // 25 VRU
        [
            WALL, WALL, WALL, WALL,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, WALL
        ], // 26 VRD
        [
            WALL, FLOOR, FLOOR, WALL,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, WALL
        ], // 27 VRDU
        [
            WALL, WALL, WALL, WALL,
            FLOOR, FLOOR, FLOOR, FLOOR,
            FLOOR, FLOOR, FLOOR, FLOOR,
            WALL, WALL, WALL, WALL
        ], // 28 V
        [
            WALL, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, FLOOR,
            FLOOR, FLOOR, FLOOR, FLOOR,
            WALL, WALL, WALL, WALL
        ], // 29
        [
            WALL, WALL, WALL, WALL,
            FLOOR, FLOOR, FLOOR, FLOOR,
            FLOOR, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, WALL
        ], // 30
        [
            WALL, FLOOR, FLOOR, WALL,
            FLOOR, FLOOR, FLOOR, FLOOR,
            FLOOR, FLOOR, FLOOR, FLOOR,
            WALL, FLOOR, FLOOR, WALL
        ], // 31 VRDUL
    ]

    let tileMap = [];

    // dim of time map
    let mapW = width * TILE_DIM;
    let mapH = height * TILE_DIM;

    // gen blank map
    let len = mapW * mapH;
    for (let i = 0; i < len; i++) {
        tileMap.push(0);
    }

    // set walls and floor
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {

            let cell = maze[j * width + i];
            let set = CELL_TYPES[cell - 16];
            //console.log(cell, cell - 16);
            //console.log(set);

            for (let x = 0; x < TILE_DIM; x++) {
                for (let y = 0; y < TILE_DIM; y++) {
                    let baseX = i * TILE_DIM + x;
                    let baseY = j * TILE_DIM + y;

                    tileMap[baseX + baseY * mapW] = set[(TILE_DIM - 1 - y) * TILE_DIM + x];

                }
            }
        }
    }

    return { tileMap, mapW, mapH };
}

const drawMazeOld = (maze) => {
    let mazeCanvas = document.querySelector("#maze");
    let mctx = mazeCanvas.getContext("2d");

    const CWIDTH = 800;
    const CHEIGHT = 800;

    mazeCanvas.width = CWIDTH;
    mazeCanvas.height = CHEIGHT;

    let BW = CWIDTH / width;
    let BWQ = BW / 4;
    let BWH = BW / 2;
    let BW3Q = BWQ * 3;

    let BH = CHEIGHT / height;
    let BHQ = BH / 4;
    let BHH = BH / 2;
    let BH3Q = BHQ * 3;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let val = maze[(height - 1 - j) * width + i];

            mctx.fillStyle = "black";
            mctx.fillRect(i * BW, j * BH, BWQ, BHQ);
            mctx.fillRect(i * BW, j * BH + BH3Q, BWQ, BHQ);
            mctx.fillRect(i * BW + BW3Q, j * BH, BWQ, BHQ);
            mctx.fillRect(i * BW + BW3Q, j * BH + BH3Q, BWQ, BHQ);

            mctx.textAlign = "center";
            //mctx.strokeText(`${val}`, i * BW + BWH, j * BH + BWH);

            if ((val & UP) == 0) {
                mctx.fillStyle = "red";
                mctx.fillRect(i * BW + BWQ, j * BH, BWH, BHQ);
            }

            if ((val & DOWN) == 0) {
                mctx.fillStyle = "green";
                mctx.fillRect(i * BW + BWQ, j * BH + BH3Q, BWH, BHQ);
            }

            if ((val & LEFT) == 0) {
                mctx.fillStyle = "orange";
                mctx.fillRect(i * BW, j * BH + BHQ, BWQ, BHH);
            }

            if ((val & RIGHT) == 0) {
                mctx.fillStyle = "blue";
                mctx.fillRect(i * BW + BW3Q, j * BH + BHQ, BHQ, BHH);
            }
        }
    }
}

function drawMaze(maze) {
    let canvas = document.querySelector('#tiles');
    let ctx = canvas.getContext('2d');

    let DIM = 100;
    let BDIM = DIM / 3;
    canvas.width = width * DIM;
    canvas.height = height * DIM;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let pos = maze[(tileMap.mapH - 1 - j) * width + i];
            console.log(pos);

            if ((pos & VISITED) > 0) {
                ctx.fillStyle = "pink";
                ctx.fillRect(i * DIM + BDIM, j * DIM + BDIM, BDIM, BDIM);
            }
            if ((pos & DOWN) > 0) {
                ctx.fillStyle = "yellow";
                ctx.fillRect(i * DIM + BDIM, j * DIM + 2 * BDIM, BDIM, BDIM);
            }
            if ((pos & UP) > 0) {
                ctx.fillStyle = "green";
                ctx.fillRect(i * DIM + BDIM, j * DIM, BDIM, BDIM);
            }
            if ((pos & LEFT) > 0) {
                ctx.fillStyle = "red";
                ctx.fillRect(i * DIM, j * DIM + BDIM, BDIM, BDIM);
            }
            if ((pos & RIGHT) > 0) {
                ctx.fillStyle = "blue";
                ctx.fillRect(i * DIM + 2 * BDIM, j * DIM + BDIM, BDIM, BDIM);
            }

            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(`${pos}`, i * DIM + BDIM, j * DIM + 2 * BDIM);
        }
    }
}

function drawSomeTiles(tileMap) {
    let canvas = document.querySelector('#tiles');
    let ctx = canvas.getContext('2d');

    let dim = 50;

    canvas.width = dim * tileMap.mapW;
    canvas.height = dim * tileMap.mapH;
    for (let i = 0; i < tileMap.mapW; i++) {
        for (let j = 0; j < tileMap.mapH; j++) {
            let tile = tileMap.tileMap[(tileMap.mapH - 1 - j) * tileMap.mapW + i];

            if (tile == WALL) {
                ctx.fillStyle = "pink";

            } else if (tile == FLOOR) {
                ctx.fillStyle = "lightblue";
            }
            else {
                ctx.fillStyle = "grey";
            }

            ctx.fillRect(i * dim, j * dim, dim, dim);
            ctx.beginPath();
            ctx.rect(i * dim, j * dim, dim, dim);
            ctx.stroke();

            ctx.font = "15px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(`(${i}:${j})${i + j * tileMap.mapW}`, i * dim + dim / 4, (j + 1) * dim - dim / 2);
        }
    }
}

/*

start

*/

// the number of visable tiles horizontally
const VIS_TILE_HOR = 12;

const genMaze = (width, height) => {
    let maze = mazeGen(width, height);
    let tileMap = tileMapGen(maze, width, height);

    // create cat
    let catCan = document.createElement('canvas');
    let cat = createCat(LOW);
    catCan.width = 300;
    catCan.height = 300;
    drawCat(cat, catCan);

    //console.log(maze);
    //console.log(tileMap);

    //drawMazeOld(maze);
    //drawSomeTiles(tileMap);

    let canvas = document.querySelector('#game');
    let ctx = canvas.getContext('2d');

    // game dimensions
    let px_game_width = window.innerWidth * 0.8;
    let px_game_height = window.innerHeight * 0.8;

    // set the dimensions of game screen
    canvas.width = px_game_width;
    canvas.height = px_game_height;

    let px_tile_dim = px_game_width / VIS_TILE_HOR;

    // vis able number of tiles vertically that appear on the screen
    let vis_tile_vert = px_game_height / px_tile_dim;

    // player info
    // player pos
    let player = {
        x: 1.5,
        y: 1.5,
        dx: 0,
        dy: 0
    }

    let tl, tr, bl, br;

    /*
    draw tiles
    */
    function drawTiles() {

        // camera position
        let cam_x = player.x;
        let cam_y = player.y;

        // get position at top left of screen
        let cam_zero_x = cam_x - VIS_TILE_HOR / 2;
        let cam_zero_y = cam_y - vis_tile_vert / 2;

        // tile offset
        let cam_off_x = cam_zero_x - Math.floor(cam_zero_x);
        let cam_off_y = cam_zero_y - Math.floor(cam_zero_y);

        // loop throught tiles and draw them
        for (let i = 0; i < VIS_TILE_HOR + 2; i++) {
            for (let j = 0; j < vis_tile_vert + 2; j++) {

                // get the tileindex
                let xIndex = Math.floor(cam_zero_x + i);
                let yIndex = Math.floor(cam_zero_y + j);

                let index = yIndex * tileMap.mapW + xIndex;

                const getTile = () => {
                    if (xIndex < 0 || yIndex < 0 || xIndex >= tileMap.mapW || yIndex >= tileMap.mapH) {
                        return -1;
                    }
                    return tileMap.tileMap[index];
                }

                const getColor = (cIndex) => {
                    switch (cIndex) {
                        case -1:
                            return "grey";
                        case WALL:
                            return "blue";
                        case FLOOR:
                            return "red";
                        default:
                            return "grey";
                    }
                }

                let tile = getTile();

                // position to draw
                let x = (i - cam_off_x - 0.5) * px_tile_dim;
                let y = (j - cam_off_y - 0.5) * px_tile_dim;

                // draw 
                ctx.fillStyle = getColor(tile);
                ctx.fillRect(x, y, px_tile_dim, px_tile_dim);
                ctx.beginPath();
                ctx.rect(x, y, px_tile_dim, px_tile_dim);
                ctx.stroke();

                //tile info
                // let info = `${tile}:(${xIndex},${yIndex})`;
                // ctx.font = "15px Arial";
                // ctx.fillStyle = "black";
                // ctx.textAlign = "center";
                // ctx.fillText(info, x + px_tile_dim / 2, y + px_tile_dim / 2);
            }
        }

        // draw player character
        let xPos = (player.x - cam_zero_x - 0.5) * px_tile_dim;
        let yPos = (player.y - cam_zero_y - 0.5) * px_tile_dim;
        //ctx.fillStyle = 'pink';
        //ctx.fillRect(xPos, yPos, px_tile_dim, px_tile_dim);
        //ctx.drawImage(catCan, 0, 0, innerWidth, innerHeight, xPos, yPos, px_tile_dim, px_tile_dim);
        ctx.drawImage(catCan, xPos, yPos, px_tile_dim, px_tile_dim);

        // format document
        // let info = `x:${Math.floor(player.x)} y:${Math.floor(player.y)} dx: ${player.dx} dy:${player.dy}`;
        // ctx.font = "15px Arial";
        // ctx.fillStyle = "white";
        // ctx.textAlign = "left";
        // ctx.fillText(info, 30, 30);

        tl = (tileMap.tileMap[Math.floor(player.y) * tileMap.mapW + Math.floor(player.x)] & WALL) > 0;
        tr = (tileMap.tileMap[Math.floor(player.y) * tileMap.mapW + Math.floor(player.x + 1)]& WALL) > 0;
        bl = (tileMap.tileMap[Math.floor(player.y + 1) * tileMap.mapW + Math.floor(player.x)]& WALL) > 0;
        br = (tileMap.tileMap[Math.floor(player.y + 1) * tileMap.mapW + Math.floor(player.x + 1)]& WALL) > 0;
        // ctx.fillText(`tl:${tl}`, xPos, yPos);
        // ctx.fillText(`tr:${tr}`, xPos + px_tile_dim, yPos);
        // ctx.fillText(`bl:${bl}`, xPos, yPos + px_tile_dim);
        // ctx.fillText(`br:${br}`, xPos + px_tile_dim, yPos + px_tile_dim);
    }

    /*
        key down events
    */

    const SPEED = 0.05;


    let upBtn = document.querySelector("#upBtn");
    let leftBtn = document.querySelector("#leftBtn");
    let rghtBtn = document.querySelector("#rghtBtn");
    let dwnBtn = document.querySelector("#dwnBtn");


    // up button 
    upBtn.addEventListener("mousedown", function (event) {
        player.dy = -SPEED;
    });

    upBtn.addEventListener("mouseup", function (event) {
        player.dy = 0;
    });

    // down btn
    dwnBtn.addEventListener("mousedown", function (event) {
        player.dy = SPEED;
    });

    dwnBtn.addEventListener("mouseup", function (event) {
        player.dy = 0;
    });

    // left btn
    leftBtn.addEventListener("mousedown", function (event) {
        player.dx = -SPEED;
    });

    leftBtn.addEventListener("mouseup", function (event) {
        player.dx = 0;
    });

    // right btn
    rghtBtn.addEventListener("mousedown", function (event) {
        player.dx = SPEED;
    });

    rghtBtn.addEventListener("mouseup", function (event) {
        player.dx = 0;
    });

    // user input
    document.addEventListener("keydown", function (event) {
        if (event.key == "w") {
            player.dy = -SPEED;
        } else if (event.key == "s") {
            player.dy = SPEED;
        }

        if (event.key == "d") {
            player.dx = SPEED;
        } else if (event.key == "a") {
            player.dx = -SPEED;
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key == "w" || event.key == "s") {
            player.dy = 0;
        }

        if (event.key == "d" || event.key == "a") {
            player.dx = 0;
        }
    });

    function anim() {

        // next position
        let nextX = player.x + player.dx;
        let nextY = player.y + player.dy;

        /*
        check collisions
        */

        // x1, y1     x2, y1
        // x1, y2     x2, y2
        let x1 = Math.floor(nextX);
        let y1  = Math.floor(nextY);
        let x2 = x1 + 1;
        let y2 = y1 + 1;

        // check tile at each corner
        // let tl = (tileMap.tileMap[y1 * width + x1] & WALL) > 0;
        // let tr = (tileMap.tileMap[y1 * width + x2] & WALL) > 0;
        // let bl = (tileMap.tileMap[y2 * width + x1] & WALL) > 0;
        // let br = (tileMap.tileMap[y2 * width + x2] & WALL) > 0;

        if(player.dy < 0){
            if(tl || tr){
                nextY = player.y;
            }
        }

        if(player.dy > 0){
            if(bl || br){
                nextY = player.y;
            }
        }

        if(player.dx > 0){
            if(tr || br){
                nextX = player.x;
            }
        }

        if(player.dx < 0){
            if(tl || bl){
                nextX = player.x
            }
        }

        player.x = nextX;
        player.y = nextY;

        drawTiles();
        window.requestAnimationFrame(anim);
    }

    window.requestAnimationFrame(anim);
}

const custom = () => {
    let wInput = document.querySelector("#wInput");
    let hInput = document.querySelector("#hInput");

    let width = Number(wInput.value);
    let height = Number(hInput.value);

    genMaze(width, height);
}

const start = () => {

    document.querySelector("#startScrn").classList.add('hide');
    custom();

    console.log('start');
}