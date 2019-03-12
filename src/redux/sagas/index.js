import { all, fork } from 'redux-saga/effects';
import { watchFetchProducts } from './product/list';
import { watchFetchCategories, watchRetrieveCategory } from './category';
import { watchSearchProducts } from './search';
import { watchFetchProductAttributes } from './attribute';
import { watchFetchProduct } from './product/single';
import { watchFetchCartId, watchAddCart, watchFetchCartProducts } from './cart';

export default function* root() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchCategories),
    fork(watchRetrieveCategory),
    fork(watchSearchProducts),
    fork(watchFetchProductAttributes),
    fork(watchFetchProduct),
    fork(watchFetchCartId),
    fork(watchAddCart),
    fork(watchFetchCartProducts),
  ]);
}
