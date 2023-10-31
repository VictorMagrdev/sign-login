const mongoose = require("mongoose")
const AuthSchema = mongoose.Schema({
    email: {
        type: String,
        require:true,
        unique:true
    },
    active: {
        type: Boolean,
        default: true,
    },
    current_password: {
        type: String,
        require:true
    },
    create_at: {
        type: Date,
        default:Date.now
    }
})
const Auth = mongoose.model("auth", AuthSchema);
module.exports = Auth;