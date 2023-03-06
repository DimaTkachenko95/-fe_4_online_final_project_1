import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_USER, LOGIN_USER} from "../endpoints"
import setAuthToken from "../helpers/setAuthToken";

const initialState = {
    userData: {},
    token: localStorage.getItem("token") || '',
    serverError: null
}

const logInSlice = createSlice({
    name:"logIn",
    initialState,
    reducers: {
        actionToken: (state, {payload}) => {
            localStorage.setItem('token', payload);
            state.token = payload
        },
        actionAuthorizationUser: (state, {payload}) => {
            state.userData = payload
        },
        actionServerError: (state, {payload}) => {
            state.serverError = payload;
        },
    }
})

export const {
    actionToken,
    actionAuthorizationUser,
    actionServerError
} = logInSlice.actions

export const actionFetchLogin = (userData) => (dispatch) => {
    return axios.post(LOGIN_USER, userData)
        .then(({ data }) => {
            dispatch(actionToken(data.token))
            setAuthToken(data.token)
        })
        .catch(() => {
            dispatch(actionServerError(true))
        });
}

export const actionFetchAuthorizationUser = () => (dispatch) => {
    return axios.get(GET_USER)
        .then(user => {
            dispatch(actionAuthorizationUser(user.data))
        })
        .catch(() => {
            dispatch(actionServerError(true))
        });
}

export default logInSlice.reducer

