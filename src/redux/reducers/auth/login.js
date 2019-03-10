import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../../../constants';

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload, loading: true };
    case LOGIN_FAILURE:
      return { ...state, ...payload, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
