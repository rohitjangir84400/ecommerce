/* cart actions */
import axios from "../axiosconfig";

/* add to cart action */
export const addtocart = (info) => async (dispatch) => {
  try {
    const resp = await axios.post('addtocart', info);
    const message = resp.data.message;
    dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: message });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'ADD_TO_CART_FAILURE', payload: 'failed to add to cart' });
  }
};

/* remove cart item action */
export const removeitemfromcart = (id) => async (dispatch) => {
  try {
    const resp = await axios.delete(`removecartitem/${id}`);
    const message = resp.data.message;
    dispatch({ type: 'REMOVE_CART_ITEM_SUCCESS', payload: message });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'REMOVE_CART_ITEM_FAILURE', payload: 'failed to remove item from cart' });
  }
};

/* get cart items action */
export const getcartitems = (id) => async (dispatch) => {
  try {
    const resp = await axios.get(`user/cartitems/${id}`);
    const data = resp.data;
    dispatch({ type: 'GET_CART_ITEMS_SUCCESS', payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'GET_CART_ITEMS_FAILURE', payload: 'failed to fatch cart items' });
  }
}

/* increse quantity of cart item action */
export const IncreaseQuantity = (id) => async (dispatch) => {
  try {
    const resp = await axios.put(`incresequantity/${id}`);
    const message = resp.message;
    dispatch({ type: 'INCRESE_QUANTITY_SUCCESS', payload: message });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'INCRESE_QUANTITY_FAILURE', payload: 'failed to increse quantity' });
  }
}

/* decrese quantity of cart item action */
export const DecreaseQuantity = (id) => async (dispatch) => {
  try {
    const resp = await axios.put(`decresequantity/${id}`);
    const message = resp.message;
    dispatch({ type: 'DECRESE_QUANTITY_SUCCESS', payload: message });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'DECRESE_QUANTITY_FAILURE', payload: 'failed to decrese quantity' });
  }
}