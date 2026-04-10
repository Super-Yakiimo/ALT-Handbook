/*
variables for generating cat names
*/

const NAMES = ["Luna", "Bella", "Lucy", "Sophie", "Stella", "Lily", "Lola", "Ginger", "Kitty", "Oreo", "Olive", "Molly", "Frankie", "Cleo", "Willow", "Chloe", "Penny", "Millie", "Mia", "Coco", "Blue", "Ziggy", "Mouse", "Lulu", "Lilly", "Gracie", "Callie", "Violet", "Rosie", "Kiki", "Izzy", "Daisy", "Zoe", "Peaches", "Angel", "Ruby", "Phoebe", "Maggie", "Ivy", "Gigi", "Ellie", "Dusty", "Bonnie", "Trixie", "Sadie", "Poppy", "Pearl", "Olivia", "Maddie", "Lizzie", "Star", "Saidy", "Ash", "Fluffy", "Peanutt"];

const EPITHETS = ["The Avendger", "The Unstopable", "The scrappy", "The Terrible", "The Cudly", "The Chair Thief", "The Great", "The Lionheart", "The Able", "The Bard", "The Piano Cat", "The Duke", "The King", "The Prince of Pop", "The Boss", "The Peoples Princess", "The Cat Burgular", "The Food Looter", "The Dog Harasser", "The Vagabond", "The Noisy", "Calamity of Ancients", "The Conqueror", "The Buitiful", "The Courageous", "The Fluffy", "The Hermit", "The Lethargic", "The Mad", "Stalker of the High Places", "The Happy", "The Meowy"];

const MAX_EPITHETS = ["The Grinning Pain of Unreality", "The punishment of god", "Red Right Hand of Meowmnoch", "Of the Unyielding Daggers", "The Glowing Eyes of Night", "The Sweet Succor of Unmaking", "King of the Nine Halls", "Who Walks the Path Unseen", "Twilight Apostle", "They Who Shall Remain Nameless", "He Who Buries His Foes Like Scat", "The Eyes That Glow in the Night", "Toothed Maw of Darkness", "Destroyer of Silence", "Darkness Incarnate", "The Midnight Acrobat", "The Witching Hour Wailer", "Dancer on the Threshold", "The Howling Madness", "Harlequin of Hysteria", "Waltz of Unmaking", "The Upholstery Executioner", "The Dark Night"];

// chances of getting a max epithet / lower number higher chance of getting a max epithet
const LOW = 0.95;
const MED = 0.7;
const HIGH = 0.55;
const MAX = 0.25;

// for storing cat info
const COLLAR = 1;
const CHEST = 2;
const FOOT_ONE = 4;
const FOOT_TWO = 8;
const FOOT_THREE = 16;
const FOOT_FOUR = 32;
const TAIL = 64;
const BOW = 128;

// local storage data name
const CAT_DATA = "cat-data";

/*
random range
*/
function range(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
cat : data for how to draw cat
canvas : canvas id to draw the cat on
*/
const drawCat = (cat, canvas) => {
    // get the drawing contexts
    let ctx = canvas.getContext('2d');

    // get canvas dimensions / scale cat to canvas
    const W = canvas.width;
    const H = canvas.height;

    /*
    begin drawing the cat
    */

    // outline
    ctx.beginPath();
    ctx.moveTo(W * 0.15, H * 0.4);

    // ears and top of head
    ctx.ellipse(W * 0.45, H * 0.4, W * 0.3, H * 0.3, 0, Math.PI, 7 * Math.PI / 6, false);
    ctx.lineTo(W * 0.2, H * 0.1);
    ctx.ellipse(W * 0.45, H * 0.4, W * 0.3, H * 0.3, 0, 4 * Math.PI / 3, 5 * Math.PI / 3, false);
    ctx.lineTo(W * 0.7, H * 0.1);
    ctx.ellipse(W * 0.45, H * 0.4, W * 0.3, H * 0.3, 0, 11 * Math.PI / 6, Math.PI * 2, false);

    // tail
    ctx.lineTo(W * 0.75, H * 0.6);
    ctx.ellipse(W * 0.83, H * 0.58, W * 0.02, H * 0.02, 0, Math.PI / 2, 0, true);
    ctx.ellipse(W * 0.9, H * 0.4, W * 0.05, H * 0.05, 0, Math.PI, 0);
    ctx.ellipse(W * 0.85, H * 0.6, W * 0.1, H * 0.1, 0, 0, Math.PI / 2);
    ctx.lineTo(W * 0.75, H * 0.7);

    // legs
    ctx.ellipse(W * 0.7, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);

    ctx.lineTo(W * 0.65, H * 0.8);
    ctx.lineTo(W * 0.6, H * 0.8);

    ctx.ellipse(W * 0.55, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);

    ctx.lineTo(W * 0.5, H * 0.8);
    ctx.lineTo(W * 0.4, H * 0.8);

    ctx.ellipse(W * 0.35, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);

    ctx.lineTo(W * 0.3, H * 0.8);
    ctx.lineTo(W * 0.25, H * 0.8);

    ctx.ellipse(W * 0.2, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);
    ctx.lineTo(W * 0.15, H * 0.4);
    ctx.fillStyle = `rgb(${cat.red}, ${cat.green}, ${cat.blue})`;
    ctx.fill();

    // ear color
    ctx.fillStyle = `rgb(${cat.red + 20}, ${cat.green + 20}, ${cat.blue + 20})`;
    // ears and top of head
    //left ear
    ctx.beginPath();
    ctx.ellipse(W * 0.45, H * 0.4, W * 0.3, H * 0.3, 0, 230 * Math.PI / 180, 210 * Math.PI / 180, true);
    ctx.lineTo(W * 0.2, H * 0.1);
    ctx.fill();

    // right ear
    ctx.beginPath();
    ctx.ellipse(W * 0.45, H * 0.4, W * 0.3, H * 0.3, 0, 330 * Math.PI / 180, 315 * Math.PI / 180, true);
    ctx.lineTo(W * 0.7, H * 0.1);
    ctx.fill();

    // collar and bowtie collor
    ctx.fillStyle = `rgb(${cat.red - 70}, ${cat.green - 70}, ${cat.blue - 70})`;

    // collar
    ctx.fillRect(W * 0.15, H * 0.4, W * 0.6, H * 0.03);

    // bow
    if ((cat.state & BOW) > 0) {
        // bowtie
        ctx.beginPath();
        //top left
        ctx.moveTo(W * 0.3, H * 0.36);

        // middle
        ctx.lineTo(W * 0.42, H * 0.4);
        ctx.lineTo(W * 0.48, H * 0.4);

        // right
        ctx.lineTo(W * 0.6, H * 0.36);
        ctx.lineTo(W * 0.6, H * 0.47);

        // bottom middle
        ctx.lineTo(W * 0.48, H * 0.43);
        ctx.lineTo(W * 0.42, H * 0.43);

        // left
        ctx.lineTo(W * 0.3, H * 0.47);
        ctx.fill();

        // bow dot
        ctx.beginPath();
        ctx.ellipse(W * 0.45, H * 0.415, W * 0.05, H * 0.03, 0, 0, 2 * Math.PI);
        ctx.fill();
    }

    // muzzle
    ctx.beginPath()
    ctx.ellipse(W * 0.45, H * 0.33, W * 0.10, H * 0.06, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // chest
    ctx.beginPath();
    ctx.moveTo(W * 0.25, H * 0.8);
    ctx.ellipse(W * 0.375, H * 0.6, W * 0.125, H * 0.1, 0, Math.PI, 0, 0);
    ctx.lineTo(W * 0.5, H * 0.8);
    ctx.lineTo(W * 0.7, H * 0.8);
    ctx.fill();

    // left eye
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.ellipse(W * 0.35, H * 0.25, W * 0.03, H * 0.02, 0, 2 * Math.PI, 0);
    ctx.stroke();
    ctx.fill();

    // right eye
    ctx.beginPath();
    ctx.ellipse(W * 0.55, H * 0.25, W * 0.03, H * 0.02, 0, 2 * Math.PI, 0);
    ctx.stroke();
    ctx.fill();


    // mouth dot
    ctx.beginPath();
    ctx.arc(W * 0.455, H * 0.3, W * 0.02, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    // mouth
    ctx.lineWidth = W * 0.02;
    ctx.lineCap = "round";

    // right
    ctx.beginPath();
    ctx.ellipse(W * 0.52, H * 0.3, W * 0.06, H * 0.05, 0, Math.PI, Math.PI / 6, true);
    ctx.stroke();

    // left
    ctx.beginPath();
    ctx.ellipse(W * 0.39, H * 0.3, W * 0.06, H * 0.05, 0, 0, 5 * Math.PI / 6, false);
    ctx.stroke();

    /* 
    random elements
    */
    // foot 1
    ctx.fillStyle = 'white';

    if ((cat.state & FOOT_ONE) > 0) {
        ctx.beginPath();
        ctx.ellipse(W * 0.2, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);
        ctx.fill();
    }

    // foot 2
    if ((cat.state & FOOT_TWO) > 0) {
        ctx.beginPath();
        ctx.ellipse(W * 0.35, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);
        ctx.fill();
    }

    // foot 3 
    if ((cat.state & FOOT_THREE) > 0) {
        ctx.beginPath();
        ctx.ellipse(W * 0.55, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);
        ctx.fill();
    }


    // foot 4
    if ((cat.state & FOOT_FOUR) > 0) {
        ctx.beginPath();
        ctx.ellipse(W * 0.7, H * 0.9, W * 0.05, H * 0.04, 0, 0, Math.PI);
        ctx.fill();
    }


    // tail cap
    if ((cat.state & TAIL) > 0) {
        ctx.beginPath();
        ctx.ellipse(W * 0.9, H * 0.4, W * 0.05, H * 0.05, 0, Math.PI, 0);
        ctx.fill();
    }

}

// end drawing

/*
gen cat name
*/
const genName = (chance) => {
    // check if normal or max epithet
    const getEpithet = () => {
        // random value form 0 - 1
        let rand = Math.random();

        // if random greater than chance get max epithet
        if (rand > chance) {
            return MAX_EPITHETS[Math.floor(Math.random() * MAX_EPITHETS.length)];
        }
        // regular epithet
        else if (rand > (chance / 2)) {
            return EPITHETS[Math.floor(Math.random() * EPITHETS.length)];
        }
        // no epithet
        return '';
    }
    
    // GET NAME and epiphet
    let name = NAMES[Math.floor(Math.random() * NAMES.length)];
    let epiphet = getEpithet();
    let fullName = `${name} ${epiphet}`;
    return fullName;
}


/*
create cat object
*/
const createCat = (chance) => {
    let cat = {
        red: range(70, 255),
        green: range(70, 255),
        blue: range(70, 255),
        state: 0
    }

    cat.name = genName(chance);

    /*
    set variables for tail and foot caps
    */
    // foot one
    if (Math.random() > 0.5) {
        cat.state |= FOOT_ONE
    }

    // foot two
    if (Math.random() > 0.5) {
        cat.state |= FOOT_TWO
    }

    // foot three 
    if (Math.random() > 0.5) {
        cat.state |= FOOT_THREE
    }

    // foot four
    if (Math.random() > 0.5) {
        cat.state |= FOOT_FOUR
    }

    // tail cap
    if (Math.random() > 0.5) {
        cat.state |= TAIL
    }

    // bow tie
    if (Math.random() > 0.75) {
        cat.state |= BOW;
    }

    // return the created cat
    return cat;
}

/*
saving and storing data
*/

// save cats
const saveCats = (catData) => {
    localStorage.setItem(CAT_DATA, JSON.stringify(catData));
}

// load cats
const loadCats = () => {
    let catData;
    if (localStorage.getItem(CAT_DATA) === null) {
        catData = {
            cats: [],
            treatTime: null,
            chance: 1
        };
        saveCats(catData);
    }
    else {
        catData = JSON.parse(localStorage.getItem(CAT_DATA));
    }
    return catData;
}