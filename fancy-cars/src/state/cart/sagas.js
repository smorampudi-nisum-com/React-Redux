import { put, call, takeLatest, fork } from 'redux-saga/effects';
import{
    fetchCartSuccess,
    fetchCartFailure,
    addToCartSuccess,
    addToCartFailure,
   } from './actions';
import {
    FETCH_CART,
    ADD_TO_CART,
}from '../actionTypes';
import * as cartApi from '../../libs/cart/api';

export function* fetchCart() {
    try{
    const cart = yield call(cartApi.fetch);
    yield put(fetchCartSuccess(cart));
    }catch(error){
        yield put(fetchCartFailure(error));
    }
}

export function* addToCart(action) {
    try{
        const cart = yield call(cartApi.addToCart, action.productId, action.quantity);
        yield put(addToCartSuccess(cart));
        }catch(error){
            yield put(addToCartFailure(error));
        }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_CART" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* watchFetchCart(){
    yield takeLatest(FETCH_CART, fetchCart);
}
export function* watchAddToCart(){
    yield takeLatest(ADD_TO_CART, addToCart);
}

export default function* () {
    yield fork(watchFetchCart);
    yield fork(watchAddToCart);
}