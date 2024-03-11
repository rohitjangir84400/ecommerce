import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../src/reducers/combined_reducer';
/* pass root reducer to store */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;