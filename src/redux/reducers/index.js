import { combineReducers } from 'redux';

import login from './auth/login';
import productList from './product/list';
import categories from './category';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  login,
  productList,
  categories,
});

export default allReducers;
