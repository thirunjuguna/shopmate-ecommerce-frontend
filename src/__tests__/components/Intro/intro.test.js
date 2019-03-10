/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Intro from '../../../components/Intro';

it('renders Intro component without crashing', () => {
  shallow(<Intro />);
});
