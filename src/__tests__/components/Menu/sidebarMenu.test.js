import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenu from '../../../components/Menu/SidebarMenu';

it('renders SidebarMenu component without crashing', () => {
  shallow(<SidebarMenu />);
});
