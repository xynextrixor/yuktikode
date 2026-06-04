const { createClient } = require('redis');

const redisClient = createClient({
    username: process.env.REDIS_USERNAME || 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: Number(process.env.REDIS_PORT) || 6379,
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err));

module.exports = redisClient;