const express = require('express');
const router = express.Router();
const { productbycatogery, getproductbyid } = require('../contollers/productControllers')

router.get('/product/category/:category', productbycatogery);
router.get('/product/:id', getproductbyid);


module.exports = router