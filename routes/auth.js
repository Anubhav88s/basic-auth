import express from "express"
import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashed = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            userName,
            password: hashed
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: `user not found` })
        }

        const Userpassword = await bcrypt.compare(password, user.password);

        if (!Userpassword) {
            return res.status(400).json({ message: `invalid password` });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET);
        res.status(200).json({ message: `user logged in successfully`, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

export default router;