const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: [true , "Username is required"],
        unique: [true, "Username must be unique"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [ true, "Email must be Unique"],

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false // password show na ho iske liye
    }
})

const userModel  = mongoose.model("users", userSchema);

module.exports = userModel;