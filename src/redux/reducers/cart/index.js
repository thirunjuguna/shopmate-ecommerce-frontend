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

export const initialState = {
  loading: false,
  cartId: '',
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CART_ID:
      return { ...state, loading: true };
    case FETCH_CART_ID_SUCCESS:
      return { ...state, ...payload, loading: false };
    case ADD_CART:
      return { ...state, ...payload, loading: true };
    case ADD_CART_SUCCESS:
      return { ...state, ...payload, loading: false };
    case ADD_CART_FAILURE:
      return { ...state, ...payload, loading: false };
    case FETCH_CART_PRODUCTS:
      return { ...state, ...payload, loading: true };
    case FETCH_CART_PRODUCTS_SUCCESS:
      return { ...state, ...payload, loading: false };
    case FETCH_CART_PRODUCTS_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
