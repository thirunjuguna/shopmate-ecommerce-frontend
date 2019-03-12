import { CART_ID_KEY } from '../constants';

/**
 * Store Cart Id in localStorage
 * @param {!string} cartId cartId from server
 * @param {!string} key Cart object key
 */
export const setCartId = (cartId, key = CART_ID_KEY) => {
  localStorage.setItem(key, cartId);
};

/**
 * Get Cart from localstorage
 * @param {!string} key Cart object key
 */
export const getCartId = (key = CART_ID_KEY) => {
  return localStorage.getItem(key);
};

/**
 * Remove a Cart Id from the localstorage
 * @param {!string} key Cart object key
 * @param {!bool} redirect user after a Cart is removed
 */
export const removeCartId = (key = CART_ID_KEY) => {
  localStorage.removeItem(key);
};

/**
 * Check if a cart Id is set
 */
export const hasCartId = () => {
  try {
    const id = getCartId();
    return !!id;
  } catch (error) {
    return error === false;
  }
};

export const setCartCount = (cartId) => {
  localStorage.setItem('cartCount', cartId);
};

/**
 * Get Cart from localstorage
 * @param {!string} key Cart object key
 */
export const getCartCount = () => {
  try {
    const count = localStorage.getItem('cartCount');
    return count || 0;
  } catch (error) {
    return 0;
  }
};
