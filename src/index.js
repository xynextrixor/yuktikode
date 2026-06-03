const express = require('express');
const app = express();
require('dotenv').config();
require
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});