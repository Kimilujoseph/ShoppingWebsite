const mongoose = require('mongoose');
require('../models/database')

const userSchema = new mongoose.Schema({
   Name:String,
   Image:String,
   Description:String,
   Price:String

})

const model = mongoose.model('GamitchProducts',userSchema)

module.exports = model;
