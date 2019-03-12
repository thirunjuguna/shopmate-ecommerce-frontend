import { combineReducers } from 'redux';

import productList from './product/list';
import categories from './category';
import search from './search';
import attribute from './attribute';
import singleProduct from './product/single';
import cart from './cart';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  productList,
  categories,
  search,
  attribute,
  singleProduct,
  cart,
});

export default allReducers;
