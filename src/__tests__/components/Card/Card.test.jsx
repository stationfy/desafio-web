import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../../components/Card';

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
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
