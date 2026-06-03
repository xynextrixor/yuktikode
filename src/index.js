const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
app.use(express.json());
const cookies = require('cookie-parser');


main()
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });