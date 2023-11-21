const mongoose = require('mongoose');

async function connectingDB (){
  try {
    await mongoose.connect('mongodb://localhost:27017/GamitchDB');
  } catch (error) {
    console.log(error);
  }
}
//require('../models/categories')
module.exports = mongoose;

connectingDB()