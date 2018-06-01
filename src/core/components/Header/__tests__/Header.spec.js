import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render Header', () => {
    const header = shallow(<Header>test</Header>);
    expect(header).toMatchSnapshot();
  });
});
