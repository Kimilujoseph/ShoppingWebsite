require('../models/database')

const categories= require('../models/categories');
const productlists = require('../models/products')

// Get  pa
exports.homepage = async(req,res)=>{
    res.render('index',{title:'Homepage'});
}

exports.aboutpage = async(req,res)=>{

    try {

        const limitNumber = 6;
        const products = await categories.find().limit(limitNumber);
        const latest = await productlists.find().sort({_id:1}).limit(limitNumber);
        const productObject = {latest};
        res.render('About',{title:'About',products,productObject});
    } catch (error) {
        res.status(500).send({message:error.message})
    }

}


exports.categoriesPage = async(req,res)=>{
    try {

        const limitNumber = 6;
        const categoryProducts = await categories.find().limit(limitNumber);
        res.render('categories',{title:'Exploring Categories',categoryProducts});
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}


exports.productDescription = async(req,res)=>{
    try {
        const requestedId = req.params;
        const requestedProduct = await  productlists.findById(requestedId)
        res.render('Descriptive',{title:'Decription',requestedProduct})
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}


//  async function insertProducts(){
//      try{
//            await products.insertMany(
//              [
//                  {
//                      "Name":"Nike Shoes",
//                      "Image":"bikini.jpg",
//                      "Description":"A product designed to suit you needs as a consumer",
//                      "Price":"Ksh 3500"
//                  },
//                  {
//                      "Name":"Interior Design",
//                      "Image":"kenny-eliason-Wp7t4cWN-68-unsplash.jpg",
//                      "Description":"From the trees of Congo forest our designers have come up with unique styles for your home",
//                      "Price":"Ksh 55000"
//                  },
//                  {
//                      "Name":"Hijab",
//                      "Image":"sonia2.jpg",
//                      "Description":"The arab culture has included diversity in its clothing.We have high end products",
//                      "Price":"Ksh 6000"
//                  },
//                  {
//                      "Name":"Wall Arts",
//                      "Image":"kenny-eliason-Wp7t4cWN-68-unsplash.jpg",
//                      "Description":"With the rich culture in wall painting we have an array of this products",
//                      "Price":"Ksh 7000"
//                  },

//                  {
//                      "Name":"Tribal Sweaters",
//                      "Image":"tribalsweater.jpg",
//                      "Description":"The synthetic material used to create the product very strong",
//                      "Price":"Ksh 1500"
//                  },
//                  {
//                      "Name":"Bags",
//                      "Image":"patrik-laszlo-b2Edmh12hMQ-unsplash.jpg",
//                      "Description":"We provide all variety of bags in our store",
//                      "Price":"Ksh 5000"
//                  }
//             ]
//            );
//      }

//      catch(error){
//          console.log(error)
//      }
//  }
// insertProducts();