const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const ensureAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        console.log("authorization", authorization)
        if (!authorization || !authorization.startsWith("Bearer")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authorization.split(" ")[1];
        const decodedToken = jwt.decodeAccessToken(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decodedToken.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = {...payload};
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = {ensureAuth};