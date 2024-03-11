const Product = require('../models/productModel')

const productbycatogery = async (req, resp) => {
    try {
        const productcategory = req.params.category;
        const products = await Product.find({ catogery: productcategory });
        resp.json(products);
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
}

const getproductbyid = async (req, resp) => {
    try {
        const productid = req.params.id;
        const product = await Product.find({ _id: productid });
        resp.json(product[0]);
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
}

module.exports = {
    productbycatogery,
    getproductbyid,
}