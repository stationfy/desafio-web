/* eslint-disable */
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Spinner from '../../../components/Spinner';

enzyme.configure({ adapter: new Adapter() });

describe('Spinner', () => {
  it('should render Spinner correctly', () => {
    const wrapper = shallow(
      <Spinner />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
