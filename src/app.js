const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { scheduler } = require('./scheduler');
const app = express();
const port = process.env.PORT || 14000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello health checker!");
})

app.listen(port, () => {
    console.log('scheduler start');
    console.log(process.env.REPEAT_SECONDS)
    scheduler(process.env.REPEAT_SECONDS||60);
});