const mongoose = require("mongoose");
const { Schema } = mongoose;

const problemSchema = new Schema({
    tittle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    tags: {
        type: String,
        enum: ['arrays', 'strings', 'linked lists', 'trees', 'graphs', 'dynamic programming', 'greedy algorithms', 'backtracking', 'divide and conquer', 'bit manipulation'],
        required: true
    },

    visibleTestCases: [

        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ]


})