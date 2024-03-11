/* define user routes through which client can use backend */
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/authMiddleware')
const { PlaceOrder, getuserorder, cancelorder } = require('../contollers/orderControllers')

/* use middleware before sending response */
router.use(authenticateUser);
router.post('/order/placeorder', PlaceOrder);
router.get('/user/order/:id', getuserorder);
router.delete('/order/cancelorder/:id', cancelorder);

module.exports = router