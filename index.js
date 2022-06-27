const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const {Doctor} = require("./models");

const app = express();

app.use(cors({origin: '*'}));

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 80;

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:user@cluster0.jnuzyrk.mongodb.net/?retryWrites=true&w=majority');
        console.log('database connected');
        const x = await Doctor.find();
        console.log(x)
    } catch (e) {
        console.log(e)
    }
};
start();

app.listen(PORT, () => {
    console.log(`started on ${PORT}`)
});
