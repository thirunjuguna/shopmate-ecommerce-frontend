const TOKEN_KEY = 'api-token';
/**
 * Store jwt token in localStorage
 * @param {!string} token jwt token from server
 * @param {!string} key token object key
 */
export const setToken = (token, key = TOKEN_KEY) => {
  localStorage.setItem(key, JSON.stringify(token));
};

/**
 * Get token from localstorage
 * @param {!string} key token object key
 */
export const getToken = (key = TOKEN_KEY) => {
  const userDetials = JSON.parse(localStorage.getItem(key));
  return userDetials ? userDetials.user : {};
};

/**
 * Remove a token from the localstorage
 * @param {!string} key token object key
 * @param {!bool} redirect user after a token is removed
 */
export const removeToken = (key = TOKEN_KEY, redirect = false) => {
  localStorage.removeItem(key);
  if (redirect) window.location.href = '/';
};

/** check if user is logged in */
export const isLoggedIn = () => {
  try {
    const user = getToken();
    return !!user.token;
  } catch (error) {
    return error === false;
  }
};

export const authUserHeader = () => {
  const user = getToken();
  if (isLoggedIn()) {
    return {
      Authorization: `Bearer ${user.token}`,
    };
  }
  return {};
};
export default setToken;
