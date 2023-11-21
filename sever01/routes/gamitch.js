const express = require('express');
const router = express.Router();

const gamitchcontroller = require("../contollers/gamitchcontoller");


// app routers

router.get('/',gamitchcontroller.homepage)
router.get('/about',gamitchcontroller.aboutpage);
router.get('/categories',gamitchcontroller.categoriesPage);
router.get('/about/:_id',gamitchcontroller.productDescription)

module.exports = router;