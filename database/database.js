/*
school locations
*/


// school locations : need to have unigue handles
//const TEMPLATE = "NAME.png";

const ART_ROOM = { name: "arts and crafts room", link: "arts-and-crafts-room.png" };
const CLASSROOM = { name: "classroom", link: "classroom.png" };
const COMPUTER = { name: "computer room", link: "computer-room.png" };
const COOKING = { name: "cooking room", link: "cooking-room.png" };
const ENTRANCE = { name: "entrance", link: "entrance.png" };
const GYM = { name: "gymnasium", link: "gym.png" };
const LIBRARY = { name: "library", link: "library.png" };
const LUNCH = { name: "lunch room", link: "lunch-room.png" };
const MUSIC = { name: "music room", link: "music-room.png" };
const NURSE = { name: "school nurses office", link: "nurses-office.png" };
const PLAYGROUND = { name: "playground", link: "playground.png" };
const RESTROOM = { name: "restroom", link: "restroom.png" };
const SCHOOL_OFFICE = { name: "school office", link: "school-office.png" };
const PRINCIPAL = { name: "principals office", link: "school-principals-office.png" };
const SCIENCE = { name: "science room", link: "science-room.png" };
const TEACHERS = { name: "teachers office", link: "teachers-office.png" };

// non classroom elements
const HALL = { name: "hallway", link: "hall.png" };
const HALL_VERT = { name: "hallway", link: "hall_vert.png" };
const HALL_HOR = { name: "hallway", link: "hall_hor.png" };
const BLANK = { name: "none", link: null }

const SCHOOL = [
    ART_ROOM,
    CLASSROOM,
    CLASSROOM,
    COMPUTER,
    COOKING,
    LIBRARY,
    LUNCH,
    MUSIC,
    NURSE,
    RESTROOM,
    SCHOOL_OFFICE,
    PRINCIPAL,
    SCIENCE,
    TEACHERS
]

/*
town locations
*/

const ROAD_VERT = { name: "road", link: "road_vert.png" };

const ROAD_HOR = { name: "road", link: "road_hor.png" };

const ROAD = { name: "road", link: "road.png" };

const TOWN = [
    { name: "aquarium", link: "aquarium.png" },
    { name: "bakery", link: "bakery.png" },
    { name: "crepe shop", link: "crepe-shop.png" },
    { name: "batting center", link: "batting-center.png" },
    { name: "burger restaurant", link: "burger-restaurant.png" },
    { name: "bycicle shop", link: "bycicle-shop.png" },
    { name: "cake shop", link: "cake-store.png" },
    { name: "candy shop", link: "candy-store.png" },
    { name: "repair shop", link: "car-repair-shop.png" },
    { name: "cinema", link: "cinema.png" },
    { name: "clothing store", link: "clothing-store.png" },
    { name: "dentist", link: "dentist.png" },
    { name: "dress shop", link: "dress-shop.png" },
    { name: "dvd rental shop", link: "dvd-rental.png" },
    { name: "family restaurant", link: "familiy-restaurant.png" },
    { name: "fast food restaurant", link: "fast-food-resaurant.png" },
    { name: "game center", link: "game_center.png" },
    { name: "gym", link: "gym.png" },
    { name: "hotel", link: "hotel.png" },
    { name: "inertnet cafe", link: "internet-cafe.png" },
    { name: "kiosk", link: "kiosk.png" },
    { name: "library", link: "library.png" },
    { name: "music store", link: "music-store.png" },
    { name: "park", link: "park.png" },
    { name: "pizza shop", link: "pizza-shop.png" },
    { name: "police station", link: "police-station.png" },
    { name: "school", link: "school.png" },
    { name: "shopping mall", link: "shopping-mall.png" },
    { name: "theatre", link: "theatre.png" },
    { name: "toy store", link: "toy-store.png" },
    { name: "train station", link: "train-station.png" },
    { name: "museum", link: "museum.png" },
];

const JOBS = [
    { name: "artist", link: "jobs/artist.png" },
    { name: "baker", link: "jobs/baker.png" },
    { name: "carpenter", link: "jobs/carpenter.png" },
    { name: "chef", link: "jobs/chef.png" },
    { name: "doctor", link: "jobs/doctor.png" },
    { name: "fire fighter", link: "jobs/fire-fighter.png" },
    { name: "janitor", link: "jobs/janitor.png" },
    { name: "nurse", link: "jobs/nurse.png" },
    { name: "plumber", link: "jobs/plumber.png" },
    { name: "police officer", link: "jobs/police-officer.png" },
    { name: "programmer", link: "jobs/programmer.png" },
    { name: "teacher", link: "jobs/teacher.png" },
    { name: "waiter", link: "jobs/waiter.png" },
    { name: "waitress", link: "jobs/waitress.png" }
]

const COLOR = [
    { name: "red", link: "color/crayon01_red.png" },
    { name: "orange", link: "color/crayon02_orange.png" },
    { name: "yellow", link: "color/crayon03_yellow.png" },
    { name: "lime", link: "color/crayon04_lime.png" },
    { name: "green", link: "color/crayon05_green.png" },
    { name: "sky blue", link: "color/crayon06_skyblue.png" },
    { name: "blue", link: "color/crayon07_blue.png" },
    { name: "purple", link: "color/crayon08_purple.png" },
    { name: "brown", link: "color/crayon09_brown.png" },
    { name: "white", link: "color/crayon10_white.png" },
    { name: "grey", link: "color/crayon11_gray.png" },
    { name: "black", link: "color/crayon12_black.png" },
]

const VEGETABLE = [
    { name: "onions", link: "vegetable/onion.png" },
    { name: "mushrooms", link: "vegetable/mushroom.png" },
    { name: "green peppers", link: "vegetable/green-pepper.png" },
    { name: "tomatoes", link: "vegetable/tomato.png" },
    { name: "cabbages", link: "vegetable/cabbage.png" },
    { name: "corn", link: "vegetable/corn.png" },
    { name: "carrots", link: "vegetable/carrot.png" },
    { name: "cucumbers", link: "vegetable/cucumber.png" },
    { name: "potatos", link: "vegetable/potato.png" },
    { name: "lettuce", link: "vegetable/lettuce.png" },
    { name: "eggplant", link: "vegetable/eggplant.png" }
]

const FRUIT = [
    { name: "apples", link: "fruit/fruit_ringo.png" },
    { name: "bananas", link: "fruit/fruit_banana.png" },
    { name: "pear", link: "fruit/fruit_younashi.png" },
    { name: "persimmon", link: "fruit/fruit_kaki.png" },
    { name: "coconut", link: "fruit/fruit_coconut_half.png" },
    { name: "mango", link: "fruit/fruit_mango.png" },
    { name: "melons", link: "fruit/fruit_melon.png" },
    { name: "cherries", link: "fruit/fruit_cherry.png" },
    { name: "strawberries", link: "fruit/fruit_strawberry.png" },
    { name: "pineapples", link: "fruit/fruit_pineapple.png" },
    { name: "kiwi fruits", link: "fruit/fruit_kiwi_green.png" },
    { name: "oranges", link: "fruit/fruit_orange2.png" },
    { name: "peaches", link: "fruit/fruit_momo.png" },
    { name: "grapes", link: "fruit/fruit_budou_kyohou.png" },
    { name: "water mellon", link: "fruit/fruit_suika_kodama.png" },
    { name: "blue berry", link: "fruit/fruit_blueberry.png" }
]

const ANIMAL = [
    { name: "dog", link: "animal/dog.png" },
    { name: "cat", link: "animal/cat.png" },
    { name: "chicken", link: "animal/chicken.png" },
    { name: "cow", link: "animal/cow.png" },
    { name: "horse", link: "animal/horse.png" },
    { name: "lion", link: "animal/lion.png" },
    { name: "tiger", link: "animal/tiger.png" },
    { name: "hippo", link: "animal/hippo.png" },
    { name: "snake", link: "animal/snake.png" },
    { name: "deer", link: "animal/deer.png" },
    { name: "moose", link: "animal/moose.png" },
    { name: "bird", link: "animal/bird.png" },
    { name: "duck", link: "animal/duck.png" },
    { name: "pig", link: "animal/pig.png" },
    { name: "rein deer", link: "animal/rein-deer.png" },
    { name: "giraffe", link: "animal/giraffe.png" }
]

const VERB = [
    { name: "cook", link: "verb/cook.jpg"},
    { name: "crawl", link: "verb/crawl.jpg"},
    { name: "dance", link: "verb/dance.jpg"},
    { name: "draw", link: "verb/draw.jpg"},
    { name: "drink", link: "verb/drink.jpg"},
    { name: "eat", link: "verb/eat.jpg"},
    { name: "fly", link: "verb/fly.jpg"},
    { name: "jump", link: "verb/jump.jpg"},
    { name: "jump", link: "verb/jump.jpg"},
    { name: "kneel", link: "verb/kneel.jpg"},
    { name: "laugh", link: "verb/laugh.jpg"},
    { name: "push", link: "verb/push.jpg"},
    { name: "read", link: "verb/read.jpg"},
    { name: "run", link: "verb/run.jpg"},
    { name: "shout", link: "verb/shout.jpg"},
    { name: "sing", link: "verb/sing.jpg"},
    { name: "sleep", link: "verb/sleep.jpg"},
    { name: "smell", link: "verb/smell.jpg"},
    { name: "stretch", link: "verb/stretch.jpg"},
    { name: "swim", link: "verb/swim.jpg"},
    { name: "throw", link: "verb/throw.jpg"},
    { name: "walk", link: "verb/walk.jpg"},
    { name: "water", link: "verb/water.jpg"},
    { name: "win", link: "verb/win.jpg"},
]

// icons "../../resource/img/icon/card-back.png"
const BACK = "../../resource/img/icon/card-back.png";

const VOCAB_LIST = [
    FRUIT, VEGETABLE, JOBS, ANIMAL, VERB
];
/*

get selected vocab
based on input
*/

const getVocab = () => {
    const INPUT = [
        "fruitCheck", "vegCheck", "jobCheck", "animalCheck", "verbCheck"
    ];


    let vocabList = [];

    for (let i = 0; i < INPUT.length; i++) {
        let checked = document.querySelector(`#${INPUT[i]}`).checked
        if (checked == true) {
            vocabList = vocabList.concat(VOCAB_LIST[i]);
        }
    }
    return vocabList.sort(() => Math.random() - 0.5);
}

const getAll = () => {
    let vocabList = [];
    for (let i = 0; i < VOCAB_LIST.length; i++) {
        vocabList = vocabList.concat(VOCAB_LIST[i]);
    }
    return vocabList.sort(() => Math.random() - 0.5);
}