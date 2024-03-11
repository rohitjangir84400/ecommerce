const express = require('express')
const connectDB = require('./db/connectdb.js')
const cors = require('cors');
const user = require('./routes/userRoutes.js')
const product = require('./routes/productRoutes.js')
const cart = require('./routes/cartRoutes.js')
const order = require('./routes/orderRoutes.js')

connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(user);
app.use(product);
app.use(cart);
app.use(order);





app.listen(5000, () => {
    console.warn('server started');
})
