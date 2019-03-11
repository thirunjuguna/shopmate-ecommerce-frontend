import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../../../constants';

export const fetchProducts = (payload = {}) => ({
  type: FETCH_PRODUCTS,
  payload,
});

export const fetchProductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = payload => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload,
});
