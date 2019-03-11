import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { ProductList } from '../../../containers/Product/ProductList';
import { initialState } from '../../../redux/reducers/product/list';

describe('<ProductList />', () => {
  let wrapper;
  let props;
  initialState.data.rows = [{ name: 'new product', product_id: '123231232' }];
  beforeEach(() => {
    props = {
      fetchProducts: jest.fn(),
      products: initialState,
      loading: initialState.loading,
    };
    wrapper = mount(<ProductList {...props} />, new ReactRouterEnzymeContext());
  });
  it('should render ProductList without crashing', () => {
    expect(wrapper.find('ProductList').length).toEqual(2);
  });
});
