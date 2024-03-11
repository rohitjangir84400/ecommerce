/* initial state of cart reducer to store user cart  */

const initialState = {
    cartitems: [],
    message: null,
}
/* reducer to manage state of cart of user and update with respect to action types that are dispatched from cart actions */

const cartreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'ADD_TO_CART_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'GET_CART_ITEMS_SUCCESS':
            return {
                ...state,
                cartitems: action.payload
            }
        case 'GET_CART_ITEMS_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'REMOVE_CART_ITEM_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'REMOVE_CART_ITEM_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'INCRESE_QUANTITY_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'INCRESE_QUANTITY_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'DECRESE_QUANTITY_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'DECRESE_QUANTITY_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}

export default cartreducer