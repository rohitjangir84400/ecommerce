const CartItem = require('../models/cartModel')
const Product = require('../models/productModel')

const addtocart = async (req, resp) => {
  try {
    const { user_Id, product_Id, Quantity } = req.body;

    // Check if the product is already in the cart
    const existingCartItem = await CartItem.findOne({ userId: user_Id, productId: product_Id });

    if (existingCartItem) {
      // If the product is already in the cart, update the quantity
      existingCartItem.quantity += Quantity;
      await existingCartItem.save();
      return resp.status(200).json(existingCartItem);
    } else {
      // If the product is not in the cart, create a new cart item
      const newCartItem = new CartItem({
        userId: user_Id,
        productId: product_Id,
        quantity: Quantity
      });
      await newCartItem.save();
      return resp.status(201).json({ message: 'item added to cart' });
    }
  } catch (err) {
    console.error('Error adding product to cart:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const RemoveItemFromCart = async (req, resp) => {
  try {
    const cartItemId = req.params.cartItemId;
    const removedCartItem = await CartItem.findByIdAndDelete(cartItemId);

    if (!removedCartItem) {
      return resp.status(404).json({ message: 'Cart item not found' });
    }

    resp.json({ message: 'Cart item removed successfully', removedCartItem });
  } catch (err) {
    console.error('Error removing product from cart:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const GetUserCartItems = async (req, resp) => {
  try {
    const user_Id = req.params.userId;
    const cartItems = await CartItem.find({ userId: user_Id }).populate('_id');
    const cartItemDetails = [];
    // Loop through cart items and fetch product details
    for (const cartItem of cartItems) {
      const product = await Product.findById(cartItem.productId);
      if (product) {
        // Push product details along with cart item ID to cartItemDetails array
        cartItemDetails.push({
          cartItemId: cartItem._id,
          productDetails: product,
          quantity: cartItem.quantity
        });
      }
    }
    resp.json(cartItemDetails);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const IncreaseQuantity = async (req, resp) => {
  try {
    const cartItemId = req.params.cartItemId;

    // Find the cart item by ID
    const cartItem = await CartItem.findById(cartItemId);

    if (!cartItem) {
      return resp.status(404).json({ message: 'Cart item not found' });
    }

    // Increase the quantity
    cartItem.quantity += 1;

    // Save the updated cart item
    await cartItem.save();

    resp.json({ message: 'cart item quantity updated' });
  } catch (err) {
    console.error('Error increasing quantity of product in cart:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

const DecreaseQuantity = async (req, resp) => {
  try {
    const cartItemId = req.params.cartItemId;

    // Find the cart item by ID
    const cartItem = await CartItem.findById(cartItemId);

    if (!cartItem) {
      return resp.status(404).json({ message: 'Cart item not found' });
    }



    // If quantity becomes zero, remove the item from the cart
    if (cartItem.quantity === 1) {
      await CartItem.findByIdAndDelete(cartItemId);
      return resp.json({ message: 'Cart item removed successfully' });
    } else {
      // Decrease the quantity
      cartItem.quantity -= 1;
    }

    // Save the updated cart item
    await cartItem.save();

    resp.json({ message: 'cart item quantity updated' });
  } catch (err) {
    console.error('Error decreasing quantity of product in cart:', err);
    resp.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  addtocart,
  RemoveItemFromCart,
  GetUserCartItems,
  IncreaseQuantity,
  DecreaseQuantity,
}