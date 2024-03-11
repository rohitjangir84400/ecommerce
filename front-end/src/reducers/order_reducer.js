/* initial state of order reducer to store user orders  */

const initialState = {
    orderitems: [],
    messsage: null
}
/* reducer to manage state of orders of user and update with respect to action types that are dispatched from order actions */

const orderreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'PLACE_ORDER_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'GET_ORDER_SUCCESS':
            return {
                ...state,
                orderitems: action.payload
            }
        case 'GET_ORDER_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        case 'CANCEL_ORDER_SUCCESS':
            return {
                ...state,
                message: action.payload
            }
        case 'CANCEL_ORDER_FAILURE':
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}

export default orderreducer