import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('Icon', () => {
  it('should render Icon', () => {
    const icon = shallow(<Icon icon="user" />);
    expect(icon).toMatchSnapshot();
  });
});
