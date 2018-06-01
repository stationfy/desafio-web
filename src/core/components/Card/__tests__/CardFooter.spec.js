import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFooter from '../CardFooter';

// tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

describe('CardFooter', () => {
  it('should render CardFooter', () => {
    const cardFooter = shallow(<CardFooter>XPTO</CardFooter>);
    expect(cardFooter).toMatchSnapshot();
  });
});
