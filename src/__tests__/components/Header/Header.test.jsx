import React from 'react';
import { shallow } from 'enzyme';
import { FaBars, FaArrowLeft } from 'react-icons/lib/fa';

import Header from '../../../components/Header';

describe('Header', () => {
  it('should render Header correctly with <FaBars /> as a children', () => {
    const wrapper = shallow(
      <Header title="Github JavaPop">
        <FaBars />
      </Header>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Header correctly with <FaArrowLeft /> as a children and has header__icon--hover class', () => {
    const wrapper = shallow(
      <Header title="desafio-web">
        <FaArrowLeft isclickable="true" />
      </Header>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
