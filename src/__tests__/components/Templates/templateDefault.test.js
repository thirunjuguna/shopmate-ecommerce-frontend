import React from 'react';
import { mount } from 'enzyme';
import TemplateDefault from '../../../components/Templates/TemplateDefault';

describe('<TemplateDefault />', () => {
  it('should render TemplateDefault without crashing', () => {
    mount(<TemplateDefault><div>Hello World</div></TemplateDefault>);
  });
});
