const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const User = require('./models/user.js');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/my_database')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error("The error is --> ",err));

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json("AlreadyPresent");
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json('success');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "Invalid ID" });
        }
        const passwordMatch = (password === user.password);
        if (passwordMatch) {
            return res.json({ message: "Success", name: user.name });
        } else {
            return res.json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
