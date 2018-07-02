import React from 'react';
import { shallow } from 'enzyme';

import TextContent from '../../../components/TextContent';

describe('TextContent', () => {
  it('should render TextContent correctly as a repository with body lower than 75 characters', () => {
    const wrapper = shallow(
      <TextContent
        title="postcss"
        body="Transforming styles with JS plugins"
        url="pullrequests/postcss/postcss"
        isRepo
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextContent correctly as a pullrequest body with body greater or equal 75 characters', () => {
    const wrapper = shallow(
      <TextContent
        title="Lorem ipsum dolor sit amet"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione hic vel facere deleniti eius praesentium laborum sunt dicta. Voluptas temporibus recusandae quae consequuntur perferendis aut, neque dolor eos animi!"
        url="pullrequests/Lorem/ipsum"
        isRepo={false}
        createAt="2018-05-31T14:42:39Z"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextContent correctly as a pullrequest with no body', () => {
    const wrapper = shallow(
      <TextContent
        title="chore(seed): Update to v3.0.1"
        body=""
        url="https://github.com/freeCodeCamp/freeCodeCamp/pull/17770"
        isRepo={false}
        createAt="2018-06-30T14:41:33Z"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
