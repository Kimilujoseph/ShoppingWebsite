const mongoose = require('mongoose');
require('../models/database')

const userSchema = new mongoose.Schema({
   Name:String,
   Image:String
})

const model = mongoose.model('products',userSchema)

module.exports = model;

























// const mongoose = require('mongoose')
// async function run(){
//    await mongoose.connect('mongodb://localhost:27017/GamitchDB');
//    const productSchema = new mongoose.Schema({
//     Name:{
//         type:String,
//     },
//     Image:{
//         type:String,
//     },
    
// });
// const productModel = await  mongoose.model('categories',productSchema)
// return productModel;
// }

// module.exports =run;
// run()