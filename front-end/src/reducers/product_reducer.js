/* initial state of product reducer to store product data  */

const initialState = {
    productsdata: [],
    productdata: [],
    message: '',
};
/* reducer to manage state of order and update with respect to action types that are dispatched from product actions */

const productreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_BY_CATOGERY_SUCCESS':
            return {
                ...state,
                productsdata: action.payload,
            }
        case 'PRODUCT_BY_CATOGERY_FAILURE':
            return {
                ...state,
                message: action.payload,
            }
        case 'PRODUCT_BY_ID_SUCCESS':
            return {
                ...state,
                productdata: action.payload,
            }
        case 'PRODUCT_BY_ID_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default productreducer