const User = require("../models/user");
const validate = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        validate();
        const { firstName, emailId, password } = req.body;
        req.body.password = await bcrypt.hash(password, 10);


        const user = await User.create(req.body);
        const token = jwt.sign({ _id: user.id, emailId: emailId }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 });
        res.cookie("token", token, { maxAge: 60 * 60 * 1000 });
        res.status(201).json({ message: "User registered successfully", user, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });

    }
}

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        if (!emailId || !password) {
            throw new Error("Email and password are required");
        }
        if (!password) {
            throw new Error("Password is required");
        }
        const user = await User.findOne({ emailId });
        const match = bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error("Invalid credentials");


        }
        const token = jwt.sign({ _id: user.id, emailId: emailId }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 });
        res.cookie("token", token, { maxAge: 60 * 60 * 1000 });
        res.status(200).json({ message: "Login successful", user, token });
    }
    catch (error) {
        res.status(400).send("unotharize ace");
    }
}

const logout = async (req, res) => {
    try {
        ////validata token 

        //tolen add in dung redis ke blcok list me


    }
    catch (err) {

    }
}
module.exports = { register, login };