/* define user routes through which client can use backend */
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/authMiddleware')
const { registerUser, login, logout, userdetails } = require('../contollers/userControllers');

/* use middleware before sending response */
router.post('/userregister', registerUser);
router.post('/userlogin', login);
router.post('/userlogout', logout);
router.get('/user/:id', authenticateUser, userdetails);


module.exports = router