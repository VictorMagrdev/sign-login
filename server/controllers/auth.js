const userModel = require("../models/user");
const {generateToken, refreshToken} = require("../utils/jwt");
const bcrypt =  require("bcrypt");
import jwt from 'jsonwebtoken';

const signin = async(req, res) => {
    const {firstname, lastname, email, current_password, phone} = req.body;
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
            current_password: current_password_hash,
            phone: phone
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
const login_validation = async(req, res) => {
    

    const { email } = req.body;

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resend = new Resend('re_No71uL9z_B8V69uEgVUJe4UpkgBkkEa5i');
    const magicLink = `${req.headers.origin}/api/verify?token=${token}`;

    resend.emails.send({
        from: 'victorgamers123456@gmail.com',
        to: email,
        subject: 'Hello World',
        html: `<p>Click on this link to log in: ${magicLink}</p>`
    });
    res.status(200).json({ success: true });
}

const register = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    signin,
    login,
    getMe
};