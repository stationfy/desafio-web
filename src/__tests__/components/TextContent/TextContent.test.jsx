/* eslint-disable */
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import TextContent from '../../../components/TextContent';

enzyme.configure({ adapter: new Adapter() });

describe('TextContent', () => {
  it('should render TextContent correctly', () => {
    const wrapper = shallow(
      <TextContent
        title="postcss"
        body="Transforming styles with JS plugins"
        url="pullrequests/postcss/postcss"
        isRepo
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
