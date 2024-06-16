import express from "express";
import User from '../models/User.js';

const router = express.Router();

router.post('/register', (req, res) => {
    const {firstname, lastname, email, company, address} = req.body;

    try {
        const newUser = new User({firstname, lastname, email, company, address});
         newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.log(error);
    }
});

export default router;