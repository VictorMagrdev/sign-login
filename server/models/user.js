const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
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
    current_password: {
        type: String,
        require:true
    },    
    avatar: {
        type: String
    },
    phone_number: {
        type: String,
        require:false
    },
    create_at: {
        type: Date,
        default:Date.now
    }
});
const User = mongoose.model("user", UserSchema);
module.exports = User;