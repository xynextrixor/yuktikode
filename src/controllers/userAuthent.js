const User = require("../models/user");
const validate = require("../utils/validator");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        validate();
        const { firstName, emailId, password } = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        const user = await User.create(req.body);
        res.status(201).json({ message: "User registered successfully", user });
    }
    catch (error) {
        res.status(400).json({ error: error.message });

    }
}