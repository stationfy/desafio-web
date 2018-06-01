import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should render Card', () => {
    const card = shallow(<Card title="xpto" body="xpto" contentSize={100} />);
    expect(card).toMatchSnapshot();
  });
});
