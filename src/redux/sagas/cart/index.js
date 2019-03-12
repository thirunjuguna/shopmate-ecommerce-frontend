import { call, put, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import {
  FETCH_CART_ID,
  ADD_CART,
  FETCH_CART_PRODUCTS,
} from '../../../constants';
import * as actions from '../../actions/cart';
import { api } from '../../../utils/api';
import { setCartId, getCartId, setCartCount } from '../../../utils/session';

toastr.options = {
  preventDuplicates: true,
};

export function* fetchCartProductsAsync() {
  const cartId = getCartId();
  let response = {};
  if (cartId) {
    response = yield call(api.cart.list, cartId);
    response = response || {};
  } else {
    toastr.warning('Your cart is empty. Please add products to cart');
  }
  const data = response ? response.data : [];
  try {
    setCartCount(data.length);
  } catch (error) {
    yield put(actions.fetchCartProductsFailure());
  }

  yield put(actions.fetchCartIdSuccess(response));
}

export function* fetchCartIdAsync({ payload }) {
  const response = yield call(api.cart.getId, payload);
  const data = response ? response.data : {};
  setCartId(data.cart_id);
  yield put(actions.fetchCartIdSuccess(data));
  yield put(actions.fetchCartProducts());
}

export function* addCartAsync({ payload }) {
  try {
    const response = yield call(api.cart.create, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchCartIdSuccess(data));
    toastr.success('Cart added successfully');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    toastr.warning('Error adding cart. Please try again');
  }
}
/** WATCHERS */
export function* watchFetchCartProducts() {
  yield takeEvery(FETCH_CART_PRODUCTS, fetchCartProductsAsync);
}
export function* watchFetchCartId() {
  yield takeEvery(FETCH_CART_ID, fetchCartIdAsync);
}

export function* watchAddCart() {
  yield takeEvery(ADD_CART, addCartAsync);
}
