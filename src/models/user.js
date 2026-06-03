const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        minLength: 3,
        type: String,
        maxLength: 20,
        required: true
    },
    type: String,
    lastName: {
        minLength: 3,
        maxLength: 20,
        required: true
    },

    emailId: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 9,
        max: 80
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']
    },
    password: {
        type: String,
        required: true
    },
    problemsolved: {
        type: Number,
        default: 0
    }

},

    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;