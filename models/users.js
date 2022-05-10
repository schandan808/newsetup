const mongoose = require("mongoose")
const Schema = mongoose.Schema

let UserSchma = new Schema({
    name:String,
    role:Number,
    email:String,
    password:String,
})


module.exports = mongoose.model('Users', UserSchma);
