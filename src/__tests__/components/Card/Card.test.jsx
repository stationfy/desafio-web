/* eslint-disable */
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Card from '../../../components/Card';

enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should render Card correctly', () => {
    const wrapper = shallow(
      <Card
        key={1}
        title="desafio-web"
        body=""
        username="arielvieira"
        userAvatar="https://avatars0.githubusercontent.com/u/17505779?v=4"
        urlLink="http://localhost:3000/arielvieira/desafio-web/pulls"
        isRepo
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
