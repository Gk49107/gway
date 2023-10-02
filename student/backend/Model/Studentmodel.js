const mongoose = require("mongoose");

const studentScema  = new mongoose.Schema({
    StudentId:{type: String, required: true ,unique: true},
    StudentName : {type: String ,required: true},
    StudentClass: {type: String, required: true},
    StudentMark: {type: Number, min: 0, max: 500, default:0 }
})

module.exports = mongoose.model('Student',studentScema);