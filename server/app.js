const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ClgModel = require('./Models/clg')
const PORT = process.env.PORT || 4040;

const app = express()


app.use(express.json())
app.use(cors())

app.post("*", async (req, res) => {
    res.send("Hello post");
});

app.get("*", async (req, res) => {
    res.send("Hello get");
});



mongoose.connect("mongodb://127.0.0.1:27017/clg");

app.post('/signup', (req, res) => {
     ClgModel.create(req.body)
     .then(student => res.json(student))
     .catch(err => res.json(err)) 
})

app.listen(3001, () => {
    console.log("server is runnng")
})
