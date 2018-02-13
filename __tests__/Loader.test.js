import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../src/components/loader/Loading';

describe('Testing Loading Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Loading />
        );

        expect(wrapper).toMatchSnapshot();
    });
});