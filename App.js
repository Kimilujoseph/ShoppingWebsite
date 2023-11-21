const  express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000;
require("dotenv").config()


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static('node_modules'))

app.use(expressLayouts);
app.set('layout','./layouts/main')
app.set('view engine','ejs')
const routes= require("./sever01/routes/gamitch.js");
app.use('/',routes)
app.use('/about',routes);


app.listen(port,()=>console.log(`The port is listening to port ${port}`));
