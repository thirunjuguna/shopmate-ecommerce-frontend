import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '../../../constants';

const initialState = {
  loading: false,
  data: { count: 0, rows: [] },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, ...payload, loading: true };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, ...payload, loading: false };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
