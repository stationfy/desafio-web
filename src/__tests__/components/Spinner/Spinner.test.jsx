import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../../components/Spinner';

describe('Spinner', () => {
  it('should render Spinner correctly', () => {
    const wrapper = shallow(
      <Spinner />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
