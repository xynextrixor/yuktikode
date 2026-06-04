const express = require("express");
const authRouter = express.Router();
const { register, login } = require("../controllers/userAuthent");
const userMiddleware = require("../middleware/userMIdlleware");
//register
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", userMiddleware, logout);
authRouter.get("/profile", userMiddleware, getProfile);
module.exports = authRouter;