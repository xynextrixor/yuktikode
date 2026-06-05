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
            },
            explanation: {
                type: String,
                required: true
            }
        }
    ],
    hiddenTestCases: [

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
    ],
    starterCode: [{
        language: {
            type: String,
            enum: ['javascript', 'python', 'java', 'c++', 'c#', 'ruby', 'go', 'swift', 'kotlin'],
            required: true
        },
        initialcode: {
            type: String,
            required: true
        }
    }],
    problemCreator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
})
const Problem = mongoose.model("problem", problemSchema);

module.exports = Problem;