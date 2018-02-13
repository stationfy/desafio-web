import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/header/Header';

describe('Testing Header Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Header title="Teste" />
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ title: "Testando" });
        expect(wrapper).toMatchSnapshot();
    });
});