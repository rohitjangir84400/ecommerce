/* define user routes through which client can use backend */
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/authMiddleware')
const { addtocart, RemoveItemFromCart, GetUserCartItems, IncreaseQuantity, DecreaseQuantity } = require('../contollers/cartControllers')

/* use middleware before sending response */
router.use(authenticateUser);
router.post('/addtocart', addtocart);
router.delete('/removecartitem/:cartItemId', RemoveItemFromCart);
router.get('/user/cartitems/:userId', GetUserCartItems);
router.put('/incresequantity/:cartItemId', IncreaseQuantity);
router.put('/decresequantity/:cartItemId', DecreaseQuantity);

module.exports = router