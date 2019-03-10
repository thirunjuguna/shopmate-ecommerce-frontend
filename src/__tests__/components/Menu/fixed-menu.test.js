import React from 'react';
import { mount } from 'enzyme';
import Menu from '../../../components/Menu/index';
import FixedMenu from '../../../components/Menu/FixedMenu';

describe('<Menu />', () => {
  it('renders Menu component without crashing', () => {
    mount(<Menu />);
  });
});


it('renders Fixed Menu component without crashing', () => {
  mount(<FixedMenu />);
});
