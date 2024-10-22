const mongoose = require('mongoose')

const clgSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phno: String
})


const ClgModel = mongoose.model("students", clgSchema)
module.exports = ClgModel


