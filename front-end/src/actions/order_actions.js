/* order actions */
import axios from '../axiosconfig'

/* place new order action */
export const placeneworder = (data) => async (dispatch) => {
  try {
    const resp = await axios.post('order/placeorder', data);
    /* dispatch to the user reducer with payload */
    const message = resp.data.message;
    dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: message });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'PLACE_ORDER_FAILURE', payload: 'failed to place order' });
  }
};

/* get user orders */
export const getorders = (id) => async (dispatch) => {
  try {
    const resp = await axios.get(`user/order/${id}`);
    const data = resp.data;
    dispatch({ type: 'GET_ORDER_SUCCESS', payload: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'GET_ORDER_FAILURE', payload: 'failed to get data' });
  }
};

/* cancel user order */
export const canceluserorder = (id) => async (dispatch) => {
  try {
    const resp = await axios.delete(`order/cancelorder/${id}`);
    const message = resp.data.message;
    dispatch({ type: 'CANCEL_ORDER_SUCCESS', payload: message });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'CANCEL_ORDER_FAILURE', payload: 'failed to get data' });
  }
};

