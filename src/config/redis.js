const { createClient } = require('redis');

const redisClient = createClient({
    username: process.env.REDIS_USERNAME || 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST || 'note-long-sock-95848.db.redis.io',
        port: Number(process.env.REDIS_PORT) || 15144,
        reconnectStrategy: () => false,
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err));

module.exports = redisClient;