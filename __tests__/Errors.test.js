import React from 'react';
import { shallow } from 'enzyme';
import Errors from '../src/components/errors/Errors';

describe('Testing Loading Component', () => {
    it('should render correctly with props', () => {
        const wrapper = shallow(
            <Errors messageError='Network error'/>
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({ messageError: 'Failed to fetch' });
        expect(wrapper).toMatchSnapshot();
    });
});