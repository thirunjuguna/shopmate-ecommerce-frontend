/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import FooterItem from '../../../components/Footer/FooterItem';

it('renders Footer component without crashing', () => {
  shallow(<FooterItem header="header" items={['name']} />);
});
