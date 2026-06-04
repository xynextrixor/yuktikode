const jwt = require("jsonwebtoken")
const userMiddelware = async (req, res, next) => {

    try {
        const { token } = req.cookies;
        if (!token)
            throw new error("token is not present");
        const payload = await jwt.verify(token, process.env.cookies)
        const { _id } = paylaod;
        if (!_id) {
            throw new error("invalid token")
        }
        const result = awaitUser.findById(_id);
        if (!result) {
            throw new Error("User not exist")
        }
        req.user = result;
        next();
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
}


module.exports = userMiddelware;