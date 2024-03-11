/* product actions */
import axios from "../axiosconfig";

/* get products by catogery action */
export const getproductsbycatogery = (pcatogery) => async (dispatch) => {
    try {
        const resp = await axios.get(`product/category/${pcatogery}`);
        const data = resp.data;
        dispatch({ type: 'PRODUCT_BY_CATOGERY_SUCCESS', payload: data });
    } catch (err) {
        console.error(err);
        dispatch({ type: 'PRODUCT_BY_CATOGERY_FAILURE', payload: 'Failed to fatch products' });
    }
}

/* get product by id action */
export const getproductsbyproductid = (productid) => async (dispatch) => {
    try {
        const resp = await axios.get(`/product/${productid}`);
        const data = resp.data;
        dispatch({ type: 'PRODUCT_BY_ID_SUCCESS', payload: data });
    } catch (err) {
        console.error(err);
        dispatch({ type: 'PRODUCT_BY_ID_FAILURE', payload: 'Failed to fatch product' });
    }
}