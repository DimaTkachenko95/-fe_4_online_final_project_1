
import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Preloader from '../components/Preloader';

describe('Preloader component', () => {
    it('should render Backdrop and CircularProgress', () => {
        const wrapper = shallow(<Preloader open={true} />);
        expect(wrapper.find(Backdrop)).toHaveLength(1);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });

    it('should have correct props', () => {
        const wrapper = shallow(<Preloader open={true} />);
        expect(wrapper.find(Backdrop).prop('open')).toBe(true);
        expect(wrapper.find(Backdrop).prop('sx').color).toBe('#4f9c2c');
        expect(wrapper.find(CircularProgress).prop('color')).toBe('inherit');
    });
});