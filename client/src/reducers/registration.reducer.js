import { createSlice } from '@reduxjs/toolkit';
import { REGISTER_USER } from '../../src/endpoints/index';
import axios from 'axios';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    gender: '',
    avatarUrl: '',
    serverError: null,
  },
  reducers: {
    actionCreateCustomer: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.telephone = action.payload.telephone;
      state.gender = action.payload.gender;
      state.avatarUrl = action.payload.avatarUrl;
    },
    actionServerError: (state, { payload }) => {
      state.serverError = payload;
    },
  },
});

export const { actionCreateCustomer, actionServerError } = registrationSlice.actions;

export const createCustomerInServer = (value) => (dispatch) => {
  axios
    .post(REGISTER_USER, value)
    .then((savedCustomer) => {
      dispatch(actionCreateCustomer(savedCustomer));
    })
    .catch(() => dispatch(actionServerError(true)));
};

export default registrationSlice.reducer;
