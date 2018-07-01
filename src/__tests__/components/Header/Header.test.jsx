/* eslint-disable */
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { FaBars, FaArrowLeft } from 'react-icons/lib/fa';

import Header from '../../../components/Header';

enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render Header correctly with <FaBars /> as a children', () => {
    const wrapper = shallow(
      <Header title="Github JavaPop">
        <FaBars />
      </Header>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Header correctly with <FaArrowLeft /> as a children and header__icon--hover class', () => {
    const wrapper = shallow(
      <Header title="desafio-web">
        <FaArrowLeft isclickable="true" />
      </Header>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
