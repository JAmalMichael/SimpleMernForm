import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
            type: String,
            required: true,
    },
    lastname: {
            type: String,
            required: true,
    },
    email: {
            type: String,
            required: true,
            unique: true,
    },
    company: {
            type: String,
            required: true,
    },
    address: {
            type: String,
            required: true,
    }
})

module.exports = mongoose.model('User', userSchema);