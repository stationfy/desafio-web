import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfiniteLoader from '../';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('InfiniteLoader', () => {
  it('should render InfiniteLoader', () => {
    const infiniteLoader = shallow(<InfiniteLoader />);
    expect(infiniteLoader).toMatchSnapshot();
  });
});
