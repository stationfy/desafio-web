import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../../../routers';

describe('Routes', () => {
  it('should render Routes correctly', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
