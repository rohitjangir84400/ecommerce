// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Products: [
        {
            product_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    TotalAmount: { type: Number, required: true },
    ShippingAddress: { type: String, required: true },
    PaymentMethod: { type: String, required: true }, // Payment method
    PaymentStatus: { type: String, default: 'Pending', required: true }, // Payment status
    PaymentIntentId: { type: String },
    Shippingstatus: { type: String, default: 'Pending' }, // Order status (e.g., 'Pending', 'Processing', 'Shipped', 'Delivered', etc.)
},
    {
        timestamps: true,
    },
);

const Order = mongoose.model('order', orderSchema);
module.exports = Order
