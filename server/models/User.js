import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);

export default User;