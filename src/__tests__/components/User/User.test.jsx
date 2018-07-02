import React from 'react';
import { shallow } from 'enzyme';

import User from '../../../components/User';

describe('User', () => {
  it('should render User correctly', () => {
    const wrapper = shallow(
      <User
        url="https://avatars2.githubusercontent.com/u/9892522?s=200&v=4"
        username="freeCodeCamp"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
