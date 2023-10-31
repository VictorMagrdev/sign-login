const mongoose = require("mongoose")
const AuthSchema = mongoose.Schema({
    firstname: {
        type: String,
        require:true
    },
    lastname: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique:true
    },
    role: {
        typer: String,
        default: "user",
    },
    active: {
        type: Boolean,
        default: true,
    },
    current_password: {
        type: String,
        require:true
    },    
    avatar: {
        type: String
    },
    create_at: {
        type: Date,
        default:Date.now
    }
})
const Auth = mongoose.model("auth", AuthSchema);
module.exports = Auth;