import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContentLoader from '../';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('ContentLoader', () => {
  it('should render ContentLoader', () => {
    const contentLoader = shallow(<ContentLoader />);
    expect(contentLoader).toMatchSnapshot();
  });
});
