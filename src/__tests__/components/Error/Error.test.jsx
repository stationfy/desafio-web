import React from 'react';
import { shallow } from 'enzyme';

import Error from '../../../components/Error';

describe('Error', () => {
  it('should render Error correctly', () => {
    const wrapper = shallow(<Error error="API rate limit exceeded for 191.54.128.217." />);
    expect(wrapper).toMatchSnapshot();
  });
});
