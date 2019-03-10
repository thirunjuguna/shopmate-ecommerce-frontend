import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Login from '../../../components/Login/index';

describe('<Login />', () => {
  it('renders login component without crashing', () => {
    shallow(<Login />, new ReactRouterEnzymeContext());
  });
});
