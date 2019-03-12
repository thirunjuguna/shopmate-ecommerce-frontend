import {
  FETCH_CART_ID,
  FETCH_CART_ID_SUCCESS,
  ADD_CART,
  ADD_CART_FAILURE,
  ADD_CART_SUCCESS,
  FETCH_CART_PRODUCTS,
  FETCH_CART_PRODUCTS_FAILURE,
  FETCH_CART_PRODUCTS_SUCCESS,
} from '../../../constants';

// FETCH CART PRODUTS
export const fetchCartProducts = (payload) => ({
  type: FETCH_CART_PRODUCTS,
  payload,
});

export const fetchCartProductsSuccess = (payload) => ({
  type: FETCH_CART_PRODUCTS_SUCCESS,
  payload,
});

export const fetchCartProductsFailure = (payload) => ({
  type: FETCH_CART_PRODUCTS_FAILURE,
  payload,
});

// create cart actions
export const addCart = (payload) => ({
  type: ADD_CART,
  payload,
});

export const addCartSuccess = (payload) => ({
  type: ADD_CART_SUCCESS,
  payload,
});

export const addCartFailure = (payload) => ({
  type: ADD_CART_FAILURE,
  payload,
});

// cart id actions
export const fetchCartId = (payload) => ({
  type: FETCH_CART_ID,
  payload,
});

export const fetchCartIdSuccess = (payload) => ({
  type: FETCH_CART_ID_SUCCESS,
  payload,
});
