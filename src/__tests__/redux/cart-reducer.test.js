import {
  FETCH_CART_ID,
  FETCH_CART_ID_SUCCESS,
  ADD_CART,
  ADD_CART_FAILURE,
  ADD_CART_SUCCESS,
} from '../../constants';

import * as cartActions from '../../redux/actions/cart';
import cartReducer, { initialState } from '../../redux/reducers/cart';

const actions = [
  {
    type: FETCH_CART_ID,
    action: cartActions.fetchCartId,
    expected: true,
  },
  {
    type: FETCH_CART_ID_SUCCESS,
    action: cartActions.fetchCartIdSuccess,
    expected: false,
  },
  {
    type: ADD_CART,
    action: cartActions.addCart,
    expected: true,
  },
  {
    type: ADD_CART_FAILURE,
    action: cartActions.addCartFailure,
    expected: false,
  },
  {
    type: ADD_CART_SUCCESS,
    action: cartActions.addCartSuccess,
    expected: false,
  },
];

describe('cart actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('cartReducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(cartReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(cartReducer(initialState, {})).toEqual(initialState);
  });
});
