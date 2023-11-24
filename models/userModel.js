const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add username']
    },

    email: {
        type: String,
        required: [true, 'Please insert email'],
        unique: [true, 'Email address already registered']
    },

    password: {
        type: String,
        required: [true, "Please add the password"]
    }
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);