import { all, fork } from 'redux-saga/effects';
import { watchLogin } from './auth/login';
import { watchFetchProducts } from './product/list';


export default function* root() {
  yield all([
    fork(watchLogin),
    fork(watchFetchProducts),
  ]);
}
