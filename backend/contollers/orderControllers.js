const Order = require('../models/orderModel')
const CartItem = require('../models/cartModel')
const Product = require('../models/productModel')
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

const PlaceOrder = async (req, resp) => {
  try {
    const { user_Id, products, totalAmount, shippingAddress, paymentMethod } = req.body;
    // Check if payment method is COD
    if (paymentMethod === 'COD') {
      // If payment method is COD, directly place the order
      const order = new Order({
        userId: user_Id,
        Products: products,
        TotalAmount: totalAmount,
        PaymentMethod: paymentMethod,
        ShippingAddress: shippingAddress,
      });
      await order.save();

      // Clear cart for the user
      await CartItem.deleteMany({ userId: user_Id }).populate('_id');

      return resp.status(201).json({ message: 'order places successfully' });
    } else if (paymentMethod === 'Card') {

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount * 100, // Amount in cents
        currency: 'inr',
        payment_method: 'pm_card_visa', // Use a Stripe test card (dummy card)
        return_url: 'https://google.com',
        confirm: true,
      });


      // Simulated online payment success
      const order = new Order({
        userId: user_Id,
        Products: products,
        TotalAmount: totalAmount,
        PaymentMethod: paymentMethod,
        PaymentStatus: 'Paid',
        PaymentIntentId: paymentIntent.id,
        ShippingAddress: shippingAddress,
      });
      await order.save();

      // Clear cart for the user
      await CartItem.deleteMany({ userId: user_Id }).populate('_id');

      return resp.status(201).json({ message: 'order places successfully' });
    }
  } catch (err) {
    console.error('Error placing order:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const getuserorder = async (req, resp) => {
  try {
    const user_id = req.params.id;
    const orders = await Order.find({ userId: user_id }).populate('_id');
    const orderdetails = [];
    if (orders) {
      for (const order of orders) {
        const promises = order.Products.map(async (item) => {
          const product = await Product.findById(item.product_Id);
          return product;
        });
        const productdetails = await Promise.all(promises);
        orderdetails.push({
          orderId: order._id,
          products: productdetails,
          totalAmount: order.TotalAmount,
          shippingAddress: order.ShippingAddress,
          paymentMethod: order.PaymentMethod,
          paymentStatus: order.PaymentStatus,
          Shippingstatus: order.Shippingstatus,
          orderAt: order.createdAt
        })
      }
      return resp.json(orderdetails);
    }

    resp.json({ message: 'No Orders Found' });


  } catch (err) {
    console.error('Error fetching cart items:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const cancelorder = async (req, resp) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return resp.status(404).json({ message: "Order not found" });
    }

    resp.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error('Error fetching cart items:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  PlaceOrder,
  getuserorder,
  cancelorder,
}