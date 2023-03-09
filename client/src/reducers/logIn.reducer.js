

import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {LOGIN_USER} from "../endpoints"

const initialState = {
    userData: {},
    token: localStorage.getItem("token") || ''
}

const logInSlice = createSlice({
    name:"logIn",
    initialState,
    reducers: {

        actionToken: (state, {payload}) => {
            localStorage.setItem('token', payload.token)
        }
    }
})

export const {
    actionToken
} = logInSlice.actions

export const actionFetchLogin = (userData) => (dispatch) => {
    return axios.post(LOGIN_USER, userData)
    .then(loginResult => {
            dispatch(actionToken(loginResult.data))
    })
    .catch(err => {
        console.log(err);
    });
}

export default logInSlice.reducer

