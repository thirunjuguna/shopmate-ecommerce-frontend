import { takeEvery, put } from 'redux-saga/effects';
import { LOGIN } from '../../../constants';
import * as actions from '../../actions/auth/login';

export function* loginAsync({ payload }) {
  try {
    yield put(actions.loginSuccess({}));
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}
/** WATCHERS */
export function* watchLogin() {
  yield (takeEvery(LOGIN, loginAsync));
}
