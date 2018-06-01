import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardRight from '../CardRight';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('CardRight', () => {
  it('should render CardRight', () => {
    const cardRight = shallow(<CardRight>XPTO</CardRight>);
    expect(cardRight).toMatchSnapshot();
  });
});
