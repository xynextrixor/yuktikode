const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const redisClient = require('./config/redis');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const initializeConnection = async () => {
    const results = await Promise.allSettled([main(), redisClient.connect()]);

    if (results[0].status === 'fulfilled') {
        console.log('Connected to MongoDB');
    } else {
        console.error('MongoDB connection failed:', results[0].reason);
    }

    if (results[1].status === 'fulfilled') {
        console.log('Connected to Redis');
    } else {
        console.error('Redis connection failed:', results[1].reason);
    }

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

initializeConnection();