import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/cart';
import { addCartAsync, fetchCartIdAsync } from '../../../redux/sagas/cart';

describe('Cart Saga', () => {
  describe('fetchCartIdAsync Saga', () => {
    const it = sagaHelper(fetchCartIdAsync({}));
    it('should  call list cart', (result) => {
      expect(result).toEqual(call(api.cart.getId, undefined));
    });
    it('and then yield dispatch fetchCartIdSuccess', (result) => {
      expect(result).toEqual(put(actions.fetchCartIdSuccess({})));
    });
    it('and then yield dispatch fetchCartProducts', (result) => {
      expect(result).toEqual(put(actions.fetchCartProducts(undefined)));
      return new Error('Some error');
    });
  });

  describe('addCartAsync Saga', () => {
    const it = sagaHelper(addCartAsync({}));
    it('should  call list cart', (result) => {
      expect(result).toEqual(call(api.cart.create, undefined));
    });
    it('and then yield dispatch fetchCartIdSuccess', (result) => {
      expect(result).toEqual(put(actions.fetchCartIdSuccess({})));
      return new Error('Some error');
    });
  });
});
