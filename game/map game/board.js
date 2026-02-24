const SCHOOL_H = {
    width: 15,
    height: 8,
    row:7,
    col:5,
    layout: [
        // bottom row
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 2, h: 2 },
        { x: 4, y: 6, w: 2, h: 2 },
        { x: 6, y: 6, w: 1, h: 2, room: HALL_VERT},
        { x: 7, y: 6, w: 2, h: 2 },
        { x: 9, y: 6, w: 2, h: 2 },

        // BIG ROOM
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },

        // hall
        {x: 0, y: 5, w: 2, h:1, room: HALL_HOR},
        {x: 2, y: 5, w: 2, h:1, room: HALL_HOR},
        {x: 4, y: 5, w: 2, h:1, room: HALL_HOR},
        {x: 6, y: 5, w: 1, h:1, room: HALL},
        {x: 7, y: 5, w: 2, h:1, room: HALL_HOR},
        {x: 9, y: 5, w: 2, h:1, room: HALL_HOR},

        // BIG ROOM
        {  x: 11, y: 4, w: 4, h: 4, room: PLAYGROUND },

        // middle row
        { x: 0, y: 3, w: 2, h: 2, room: ENTRANCE },
        { x: 2, y: 3, w: 2, h: 2 },
        { x: 4, y: 3, w: 2, h: 2 },
        { x: 6, y: 3, w: 1, h: 2, room: HALL_VERT},
        { x: 7, y: 3, w: 2, h: 2 },
        { x: 9, y: 3, w: 2, h: 2 },
        
        { x: 9, y: 3, w: 2, h: 2, room: BLANK },

        // hall
        {x: 0, y: 2, w: 2, h:1, room: HALL_HOR},
        {x: 2, y: 2, w: 2, h:1, room: HALL_HOR},
        {x: 4, y: 2, w: 2, h:1, room: HALL_HOR},
        {x: 6, y: 2, w: 1, h:1, room: HALL},
        {x: 7, y: 2, w: 2, h:1, room: HALL_HOR},
        {x: 9, y: 2, w: 2, h:1, room: HALL_HOR},

        // big room
        { x: 11, y: 0, w: 4, h: 4, room: GYM },

        // top row
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 2, h: 2 },
        { x: 4, y: 0, w: 2, h: 2 },
        { x: 6, y: 0, w: 1, h: 2, room: HALL_VERT},
        { x: 7, y: 0, w: 2, h: 2 },
        { x: 9, y: 0, w: 2, h: 2 },

        // big room
        { x: 11, y: 0, w: 4, h: 4, room: BLANK },
    ]
}

const SCHOOL_V = {
    width: 8,
    height: 15,
    row: 5,
    col: 7,
    layout: [
        // row five
        { x: 0, y: 13, w: 2, h: 2 },
        { x: 2, y: 13, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 13, w: 2, h: 2, room: ENTRANCE },
        { x: 5, y: 13, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 13, w: 2, h: 2 },

        // row four
        { x: 0, y: 11, w: 2, h: 2 },
        { x: 2, y: 11, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 11, w: 2, h: 2 },
        { x: 5, y: 11, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 11, w: 2, h: 2 },

        // row three
        { x: 0, y: 9, w: 2, h: 2 },
        { x: 2, y: 9, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 9, w: 2, h: 2 },
        { x: 5, y: 9, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 9, w: 2, h: 2 },

        // hall row
        { x: 0, y: 8, w: 2, h: 1, room: HALL },
        { x: 2, y: 8, w: 1, h: 1, room: HALL },
        { x: 3, y: 8, w: 2, h: 1, room: HALL },
        { x: 5, y: 8, w: 1, h: 1, room: HALL },
        { x: 6, y: 8, w: 2, h: 1, room: HALL },

        // row two
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 6, w: 2, h: 2 },
        { x: 5, y: 6, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 6, w: 2, h: 2 },

        // row one
        { x: 0, y: 4, w: 2, h: 2 },
        { x: 2, y: 4, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 4, w: 2, h: 2 },
        { x: 5, y: 4, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 4, w: 2, h: 2 },


        // top row big rooms
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },
        { x: 0, y: 0, w: 4, h: 4, room: GYM },
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },
        { x: 4, y: 0, w: 4, h: 4, room: PLAYGROUND },
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },
    ],
}

const TOWN_H = {
    width: 15,
    height: 8,
    row: 8,
    col: 5,
    layout: [
        // bottom row
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 2, h: 2 },
        { x: 4, y: 6, w: 2, h: 2 },
        { x: 6, y: 6, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 6, w: 2, h: 2 },
        { x: 9, y: 6, w: 2, h: 2 },
        { x: 11, y: 6, w: 2, h: 2 },
        { x: 13, y: 6, w: 2, h: 2 },

        // hall
        { x: 0, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 4, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 6, y: 5, w: 1, h: 1, room: ROAD },
        { x: 7, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 9, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 11, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 13, y: 5, w: 2, h: 1, room: ROAD_HOR },

        // middle row
        { x: 0, y: 3, w: 2, h: 2 },
        { x: 2, y: 3, w: 2, h: 2 },
        { x: 4, y: 3, w: 2, h: 2 },
        { x: 6, y: 3, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 3, w: 2, h: 2 },
        { x: 9, y: 3, w: 2, h: 2 },
        { x: 11, y: 3, w: 2, h: 2 },
        { x: 13, y: 3, w: 2, h: 2 },

        // hall
        { x: 0, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 4, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 6, y: 2, w: 1, h: 1, room: ROAD },
        { x: 7, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 9, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 11, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 13, y: 2, w: 2, h: 1, room: ROAD_HOR },

        // top row
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 2, h: 2 },
        { x: 4, y: 0, w: 2, h: 2 },
        { x: 6, y: 0, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 0, w: 2, h: 2 },
        { x: 9, y: 0, w: 2, h: 2 },
        { x: 11, y: 0, w: 2, h: 2 },
        { x: 13, y: 0, w: 2, h: 2 },
    ]
}

const TOWN_V = {
    width: 8,
    height: 15,
    row: 5,
    col: 8,
    layout: [
        // row five
        { x: 0, y: 13, w: 2, h: 2 },
        { x: 2, y: 13, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 13, w: 2, h: 2, },
        { x: 5, y: 13, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 13, w: 2, h: 2 },

        // row four
        { x: 0, y: 11, w: 2, h: 2 },
        { x: 2, y: 11, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 11, w: 2, h: 2 },
        { x: 5, y: 11, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 11, w: 2, h: 2 },

        // row three
        { x: 0, y: 9, w: 2, h: 2 },
        { x: 2, y: 9, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 9, w: 2, h: 2 },
        { x: 5, y: 9, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 9, w: 2, h: 2 },

        // hall row
        { x: 0, y: 8, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 8, w: 1, h: 1, room: ROAD },
        { x: 3, y: 8, w: 2, h: 1, room: ROAD_HOR },
        { x: 5, y: 8, w: 1, h: 1, room: ROAD },
        { x: 6, y: 8, w: 2, h: 1, room: ROAD_HOR },

        // row two
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 6, w: 2, h: 2 },
        { x: 5, y: 6, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 6, w: 2, h: 2 },

        // row one
        { x: 0, y: 4, w: 2, h: 2 },
        { x: 2, y: 4, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 4, w: 2, h: 2 },
        { x: 5, y: 4, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 4, w: 2, h: 2 },

        // row minus one
        { x: 0, y: 2, w: 2, h: 2 },
        { x: 2, y: 2, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 2, w: 2, h: 2 },
        { x: 5, y: 2, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 2, w: 2, h: 2 },

        // row minus two
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 0, w: 2, h: 2 },
        { x: 5, y: 0, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 0, w: 2, h: 2 },
    ]
}