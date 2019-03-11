import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../../containers/HomePage';

describe('<HomePage />', () => {
  it('should render home page without crashing', () => {
    shallow(<HomePage login={{}} />);
  });
});
