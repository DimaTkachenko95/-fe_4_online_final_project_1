import {createSlice} from '@reduxjs/toolkit';
import {REGISTER_USER} from '../endpoints';
import axios from 'axios';

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        telephone: '',
        avatarUrl: '',
        serverError: null,
        pageIsLoading: false,
        modalIsOpen: false
    },
    reducers: {
        registrationIsLoading: (state, {payload}) => {
            state.pageIsLoading = payload
        },
        registrationServerError: (state, {payload}) => {
            state.serverError = payload
        },
    },
});

export const {
    registrationIsLoading,
    registrationServerError,
} = registrationSlice.actions;


export const createCustomerServerApi = (value) => {
    return axios
        .post(REGISTER_USER, value)
        .then((savedCustomer) => {
            return savedCustomer;
        })
        .catch(() => false);
};

export const initialState = registrationSlice.getInitialState();
export default registrationSlice.reducer;