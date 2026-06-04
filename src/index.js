const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const redisClient = require('./config/redis');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const initializeConnection = async () => {
    try {
        await Promise.all([main(), redisClient.connect()]);
        console.log('Connected to MongoDB and Redis');

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB or Redis', err);
        process.exit(1);
    }
};

initializeConnection();