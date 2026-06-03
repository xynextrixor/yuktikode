const User = require("../models/user");
const validate = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        validate();
        const { firstName, emailId, password } = req.body;
        req.body.password = await bcrypt.hash(password, 10);


        jwt.sign({ emailId }, "asdlkjflsakdjf", { expiresIn: 60 * 60 }, (err, token) => {
            if (err) {
                throw new Error("Error generating token");
            }
            req.body.token = token;
        });
        const user = await User.create(req.body);
        res.status(201).json({ message: "User registered successfully", user });
    }
    catch (error) {
        res.status(400).json({ error: error.message });

    }
}

///node -e "console.log(require("crypto").randomBytes(32).toString("hex"))"