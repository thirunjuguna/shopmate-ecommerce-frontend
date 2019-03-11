import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CATEGORIES } from '../../../constants';
import * as actions from '../../actions/category';
import { api } from '../../../utils/api';


export function* fetchCategoriessAsync({ payload }) {
  try {
    const response = yield call(api.categories.list, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchCategoriesSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchCategoriesFailure({}));
  }
}
/* WATCHERS */
export function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriessAsync);
}
