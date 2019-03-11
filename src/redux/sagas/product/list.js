import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from '../../../constants';
import * as actions from '../../actions/product/list';
import { api } from '../../../utils/api';


export function* fetchProductsAsync({ payload }) {
  try {
    const response = yield call(api.products.list, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchProductsSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchProductsFailure({ }));
  }
}
/* WATCHERS */
export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
}
