/* define root reducer */
import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import productreducer from './product_reducer';
import cartreducer from './cart_reducer';
import orderreducer from './order_reducer';

/* export root reducer to store that hold all state of an application */
const rootReducer = combineReducers({
  /* all reducers of an applocation */
  auth: authReducer,
  products: productreducer,
  cart: cartreducer,
  orders: orderreducer

});

export default rootReducer;
