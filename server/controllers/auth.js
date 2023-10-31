const userModel = require("../models/user");
const {generateToken, refreshToken} = require("../utils/jwt");
const bcrypt =  require("bcrypt");

const signin = async(req, res) => {
    const {firstname, lastname, email, current_password} = req.body;
    try {
        if (!email){
            res.status(400).json({ message : "el email es requerido"});
            throw new Error("El email es requerido")
        }
        if (!current_password){
            res.status(400).json({ message : "la contraseña es requerida"});
            throw new Error( "la contraseña es requerida")
        }
        const emailLowerCase = email.toLowerCase();
        const salt = await bcrypt.genSalt(10);
        const current_password_hash = await bcrypt.hash(current_password, salt);

        const newUser = await userModel.create({
            firstname,
            lastname,
            email: emailLowerCase,
            current_password: current_password_hash
        });

        const userStore = await newUser.save();
        res.status(200).json(userStore);
    } catch (err) {
        res.status(400).json(
            {
                message: err.message
            }
        )
    }
}

const login = async(req, res) => {
    const {email, current_password} = req.body;
    try {
        if(!email || !current_password){
            throw new Error("email y contarseña son obligatorios");
        }
        const emailLowerCase = email.toLowerCase();
        const userStore = await userModel.findOne({ email: emailLowerCase}).exec();
        if (!userStore){
            throw new Error("El usuario no existe")
        }

        const check = await bcrypt.compare(
            current_password,
            userStore.current_password
        );

        if (!check){
            throw new Error("La contraseña no es correcta");
        }
        const token = await generateToken(userStore);
        const refresh = await refreshToken(userStore);
        console.log(token);
        res.status(200).json({
            access: token,
            refresh: refresh
        });
    } catch (err) {
        res.status(400).json(
            {
                message: err.message
            }
        )
    }
}

const getMe = async(req, res) => {
    try {
        const {id} = req.params;
        const userFind = await userModel.findById(id);

        res.status(200).json(userFind)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    signin,
    login,
    getMe
};