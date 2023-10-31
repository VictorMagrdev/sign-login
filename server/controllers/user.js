const userModel = require("../models/user")

const createUser = async(req, res) => {
    try {
        const UserData = req.body;
        const newUser = new userModel({...UserData})
        await newUser.save();
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
};

const getAllUsers = async(req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const getUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const userFind = await userModel.findById(id);
        console.log(userFind);
        res.status(200).json(userFind)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const updateUserById = async (req, res) =>{
    try {
        const {id} = req.params;
        const userDataEdit = req.body;
        const response = await userModel.findByIdAndUpdate(id, userDataEdit)
        res.status(200).json(response)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

<<<<<<< HEAD
=======
const deleteUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await userModel.findByIdAndDelete(id);
        res.status(200).json({message: "usuario eliminado exitosamente"})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

>>>>>>> a5f46faff16a47087ba5a6c83318b810085b2cca
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
<<<<<<< HEAD
    updateUserById
=======
    updateUserById,
    deleteUserById
>>>>>>> a5f46faff16a47087ba5a6c83318b810085b2cca
};