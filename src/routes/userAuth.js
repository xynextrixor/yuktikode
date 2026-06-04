const express = require("express");
const authRouter = express.Router();
const { register, login, logout } = require("../controllers/userAuthent");
const userMiddleware = require("../middleware/userMIdlleware");
const getProfile = (req, res) => res.status(200).json({ user: req.user });
//register
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", userMiddleware, logout);
authRouter.get("/profile", userMiddleware, getProfile);
module.exports = authRouter;