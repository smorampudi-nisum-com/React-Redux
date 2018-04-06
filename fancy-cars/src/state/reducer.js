import { combineReducers } from 'redux';
import productReducer from './product/reducer';
import cartReducer from './product/reducer';

/**
 * This has both `products` and `cart` in the
 * redux state, we need to combine these. There is a built in method in redux for this
 *Import two reducers: cart and products and combine them to ONE state object. Then export it
 * this rootReducer */
export default combineReducers({
  product: productReducer,
  cart: cartReducer,
});