const mongoose = require('mongoose');

async function main() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myapp';
    await mongoose.connect(mongoUri);
}

module.exports = main;