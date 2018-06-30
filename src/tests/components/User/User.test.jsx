/* eslint-disable */
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import User from '../../../components/User';

enzyme.configure({ adapter: new Adapter() });

describe('User', () => {
  it('should render User correctly', () => {
    const wrapper = shallow(
      <User
        url="https://avatars2.githubusercontent.com/u/9892522?s=200&v=4"
        username="freeCodeCamp"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
