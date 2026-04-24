/*
school locations
*/


// school locations : need to have unigue handles
//const TEMPLATE = "NAME.png";

const ART_ROOM = { name: "arts and crafts room", link: "school/arts-and-crafts-room.png" };
const CLASSROOM = { name: "classroom", link: "school/classroom.png" };
const COMPUTER = { name: "computer room", link: "school/computer-room.png" };
const COOKING = { name: "cooking room", link: "school/cooking-room.png" };
const ENTRANCE = { name: "entrance", link: "school/entrance.png" };
const GYM = { name: "gymnasium", link: "school/gym.png" };
const LIBRARY = { name: "library", link: "school/library.png" };
const LUNCH = { name: "lunch room", link: "school/lunch-room.png" };
const MUSIC = { name: "music room", link: "school/music-room.png" };
const NURSE = { name: "school nurses office", link: "school/nurses-office.png" };
const PLAYGROUND = { name: "playground", link: "school/playground.png" };
const RESTROOM = { name: "restroom", link: "school/restroom.png" };
const SCHOOL_OFFICE = { name: "school office", link: "school/school-office.png" };
const PRINCIPAL = { name: "principals office", link: "school/school-principals-office.png" };
const SCIENCE = { name: "science room", link: "school/science-room.png" };
const TEACHERS = { name: "teachers office", link: "school/teachers-office.png" };

// non classroom elements
const HALL = { name: "hallway", link: "school/hall.png" };
const HALL_VERT = { name: "hallway", link: "school/hall_vert.png" };
const HALL_HOR = { name: "hallway", link: "school/hall_hor.png" };
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

const ROAD_VERT = { name: "road", link: "town/road_vert.png" };

const ROAD_HOR = { name: "road", link: "town/road_hor.png" };

const ROAD = { name: "road", link: "town/road.png" };

const DAYS_OF_WEEK = [
    { name: "sunday", link: "daysofweek/sunday.png" },
    { name: "monday", link: "daysofweek/monday.png" },
    { name: "tuesday", link: "daysofweek/tuesday.png" },
    { name: "wednesday", link: "daysofweek/wednesday.png" },
    { name: "thursday", link: "daysofweek/thursday.png" },
    { name: "friday", link: "daysofweek/friday.png" },
    { name: "saturday", link: "daysofweek/saturday.png" },
];

const MONTH = [
    { name: "January", link: "month/january.png" },
    { name: "February", link: "month/february.png" },
    { name: "March", link: "month/march.png" },
    { name: "April", link: "month/april.png" },
    { name: "May", link: "month/may.png" },
    { name: "June", link: "month/june.png" },
    { name: "July", link: "month/july.png" },
    { name: "August", link: "month/august.png" },
    { name: "September", link: "month/september.png" },
    { name: "October", link: "month/october.png" },
    { name: "November", link: "month/november.png" },
    { name: "December", link: "month/december.png" },
];

const WEATHER = [
    { name: "sunny", link: "weather/sunny.png" },
    { name: "hot", link: "weather/hot.png" },
    { name: "rainy", link: "weather/rainy.png" },
    { name: "umbrella", link: "weather/umbrella.png" },
    { name: "cloudy", link: "weather/cloudy.png" },
    { name: "sweater", link: "weather/sweater.png" },
    { name: "snowy", link: "weather/snowy.png" },
    { name: "cold", link: "weather/cold.png" },
    { name: "jacket", link: "weather/jacket.png" },
];

const TOWN = [
    { name: "aquarium", link: "town/aquarium.png" },
    { name: "bakery", link: "town/bakery.png" },
    { name: "crepe shop", link: "town/crepe-shop.png" },
    { name: "batting center", link: "town/batting-center.png" },
    { name: "burger restaurant", link: "town/burger-restaurant.png" },
    { name: "bycicle shop", link: "town/bycicle-shop.png" },
    { name: "cake shop", link: "town/cake-store.png" },
    { name: "candy shop", link: "town/candy-store.png" },
    { name: "repair shop", link: "town/car-repair-shop.png" },
    { name: "cinema", link: "town/cinema.png" },
    { name: "clothing store", link: "town/clothing-store.png" },
    { name: "dentist", link: "town/dentist.png" },
    { name: "dress shop", link: "town/dress-shop.png" },
    { name: "dvd rental shop", link: "town/dvd-rental.png" },
    { name: "family restaurant", link: "town/familiy-restaurant.png" },
    { name: "fast food restaurant", link: "town/fast-food-resaurant.png" },
    { name: "game center", link: "town/game_center.png" },
    { name: "gym", link: "town/gym.png" },
    { name: "hotel", link: "town/hotel.png" },
    { name: "inertnet cafe", link: "town/internet-cafe.png" },
    { name: "kiosk", link: "town/kiosk.png" },
    { name: "library", link: "town/library.png" },
    { name: "music store", link: "town/music-store.png" },
    { name: "park", link: "town/park.png" },
    { name: "pizza shop", link: "town/pizza-shop.png" },
    { name: "police station", link: "town/police-station.png" },
    { name: "school", link: "town/school.png" },
    { name: "shopping mall", link: "town/shopping-mall.png" },
    { name: "theatre", link: "town/theatre.png" },
    { name: "toy store", link: "town/toy-store.png" },
    { name: "train station", link: "town/train-station.png" },
    { name: "museum", link: "town/museum.png" },
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

const STATIONARY = [
    { name: "pencil", link: "stationary/pencil.png" },
    { name: "mechanical pencil", link: "stationary/mechanical pencil.png" },
    { name: "earaser", link: "stationary/earaser.png" },
    { name: "pencil case", link: "stationary/pencil case.png" },
    { name: "ruler", link: "stationary/ruler.png" },
    { name: "glue stick", link: "stationary/glue stick.png" },
    { name: "pen", link: "stationary/pen.png" },
    { name: "notebook", link: "stationary/notebook.png" },
    { name: "book", link: "stationary/book.png" },
    { name: "calendar", link: "stationary/calender_full.png" },
    { name: "stapler", link: "stationary/stapler.png" },
    { name: "pencil sharpener", link: "stationary/pencil sharpener.png" },
    { name: "marker", link: "stationary/marker.png" },
    { name: "crayons", link: "stationary/crayons.png" },
    { name: "scissors", link: "stationary/scissors.png" },
    { name: "calculator", link: "stationary/bunbougu_dentaku.png" },
    { name: "magnet", link: "stationary/magnet.png" }
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

const SHAPE = [
    { name: "diamond", link: "shape/diamond.png" },
    { name: "heart", link: "shape/heart.png" },
    { name: "oval", link: "shape/oval.png" },
    { name: "rectangle", link: "shape/rectangle.png" },
    { name: "square", link: "shape/square.png" },
    { name: "star", link: "shape/star.png" },
    { name: "parallelogram", link: "shape/paralleogram.png" },
    { name: "trapezoid", link: "shape/trapazoid.png" },
    { name: "right triangle", link: "shape/right-triangle.png" },
    { name: "triangle", link: "shape/triangle.png" },
];

const FOOD = [
    { name: "pizza", link: "food/pizza.png" },
    { name: "hamburger", link: "food/food_hamburger_cheese.png" },
    { name: "french fries", link: "food/food_fried_potato_dish.png" },
    { name: "curry", link: "food/curry.png" },
    { name: "salad", link: "food/salad.png" },
    { name: "steak", link: "food/beef.png" },
    { name: "fish and chips", link: "food/fishandchips.png" },
    { name: "omlet", link: "food/food_omurice.png" },
    { name: "tacos", link: "food/tacos.png" },
    { name: "sushi", link: "food/sushi.png" },
    { name: "lasagna", link: "food/lasagna.png" },
    { name: "rice ball", link: "food/onigiri_maru.png" },
    { name: "spaghetti", link: "food/food_spaghetti_bolognese_meatsauce.png" },
    { name: "ramen", link: "food/ramen_syouyu.png" },
    { name: "sandwhich", link: "food/food_sandwich_blt.png" },
    { name: "sausage", link: "food/food_sausage.png" },
    { name: "quiche", link: "food/food_quiche_kissyu.png" },
    { name: "fried chicken", link: "food/food_fried_chicken.png" },
    { name: "rice", link: "food/food_tamago_gohan4.png" },
    { name: "grilled fish", link: "food/fish.png" },
]

const DESSERT = [
    { name: "ice cream", link: "dessert/icecream3_cookiecream.png" },
    { name: "shaved ice", link: "dessert/kakigoori3_orange.png" },
    { name: "popcorn", link: "dessert/popcorn.png" },
    { name: "potato chips", link: "dessert/potatochips.png" },
    { name: "apple pie", link: "dessert/sweets_applepie.png" },
    { name: "cake", link: "dessert/sweets_cake_rousoku.png" },
    { name: "chocolate", link: "dessert/sweets_chocolate_dark.png" },
    { name: "creampuff", link: "dessert/sweets_creampuff.png" },
    { name: "donut", link: "dessert/sweets_donut.png" },
    { name: "parfait", link: "dessert/sweets_fruit_pafe.png" },
    { name: "pancake", link: "dessert/sweets_pancake.png" },
    { name: "pudding", link: "dessert/sweets_purin.png" },
];

const DRINK = [
    { name: "water", link: "drink/amount_water_glass3.png" },
    { name: "coffee", link: "drink/coffee04_blend_black.png" },
    { name: "grean tea", link: "drink/drink_greentea.png" },
    { name: "ice cream soda", link: "drink/drink_melonsoda.png" },
    { name: "milk", link: "drink/drink_milk_gallon.png" },
    { name: "juice", link: "drink/juice_apple.png" },
    { name: "soda", link: "drink/soda4_green.png" },
    { name: "tea", link: "drink/tea_lemon.png" },
];

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
    { name: "cook", link: "verb/cook.jpg" },
    { name: "crawl", link: "verb/crawl.jpg" },
    { name: "dance", link: "verb/dance.jpg" },
    { name: "draw", link: "verb/draw.jpg" },
    { name: "drink", link: "verb/drink.jpg" },
    { name: "eat", link: "verb/eat.jpg" },
    { name: "fly", link: "verb/fly.jpg" },
    { name: "jump", link: "verb/jump.jpg" },
    { name: "jump", link: "verb/jump.jpg" },
    { name: "kneel", link: "verb/kneel.jpg" },
    { name: "laugh", link: "verb/laugh.jpg" },
    { name: "push", link: "verb/push.jpg" },
    { name: "read", link: "verb/read.jpg" },
    { name: "run", link: "verb/run.jpg" },
    { name: "shout", link: "verb/shout.jpg" },
    { name: "sing", link: "verb/sing.jpg" },
    { name: "sleep", link: "verb/sleep.jpg" },
    { name: "smell", link: "verb/smell.jpg" },
    { name: "stretch", link: "verb/stretch.jpg" },
    { name: "swim", link: "verb/swim.jpg" },
    { name: "throw", link: "verb/throw.jpg" },
    { name: "walk", link: "verb/walk.jpg" },
    { name: "water", link: "verb/water.jpg" },
    { name: "win", link: "verb/win.jpg" },
]

// icons "../../resource/img/icon/card-back.png"
const BACK = "../../resource/img/icon/card-back.png";

const VOCAB_LIST = [
    FOOD, FRUIT, VEGETABLE, DESSERT, DRINK, JOBS, ANIMAL, VERB, DAYS_OF_WEEK, MONTH, WEATHER, SCHOOL, TOWN, STATIONARY, SHAPE
];

const LABEL_NAMES = ["Food", "Fruit", "Vegetable", "Dessert", "Drink", "Job", "Animal", "Verb", "DOTW", "Month", "Weather", "School", "Town", "Stationary", "Shape"];

const INPUT = [
    "foodCheck", "fruitCheck", "vegCheck", "Dessert", "Drink", "jobCheck", "animalCheck", "verbCheck", "daysOfWeekCheck", "monthCheck", "weatherCheck", "schoolCheck", "townCheck", "statCheck", "shapeCheck"
];

/*
make the check boxes for vocab select
            <div id="checkCon"></div>
            <input id="fruitCheck" type="checkbox">
            <label for="fruitCheck">Fruit</label>
*/
const makeCheckBox = () => {

    const checkCon = document.querySelector("#checkCon");
    const DIM = 4;

    if (checkCon == null) {
        return alert('cannot find the check box container');
    }

    for (let i = 0; i < DIM; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.style = `height:${100/DIM}%;width:100%;display:flex;flex-direction: row;`;
        for (let j = 0; j < DIM; j++) {

            let index = i * DIM + j;

            let box = document.createElement('div');
            box.className = 'box';
            box.style = `height:100%;width:${100/DIM}%;border: 1px solid black;`;

            if (index < VOCAB_LIST.length) {
                let id = INPUT[index];
                let name = LABEL_NAMES[index];

                let input = document.createElement('input');
                let label = document.createElement('label');

                input.id = id;
                input.type = 'checkbox';

                label.for = id;
                label.innerHTML = name;

                box.appendChild(input);
                box.appendChild(label);
            }

            row.appendChild(box);
        }

        checkCon.appendChild(row);
    }
}


/*
get selected vocab
based on input
*/

const getVocab = () => {

    let vocabList = [];

    for (let i = 0; i < INPUT.length; i++) {
        let checked = document.querySelector(`#${INPUT[i]}`).checked
        if (checked == true) {
            vocabList = vocabList.concat(VOCAB_LIST[i]);
        }
    }
    return vocabList.sort(() => Math.random() - 0.5);
}


const getType = (type) => {

    let vocabList = [];

    for (let i = 0; i < INPUT.length; i++) {
        if (type == LABEL_NAMES[i]) {
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