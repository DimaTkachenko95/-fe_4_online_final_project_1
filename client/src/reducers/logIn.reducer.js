

import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {LOGIN_USER} from "../endpoints"

const initialState = {
    userData: {
        loginOrEmail: "customer@gmail.com",
        password: "1111111",
    },
    token: ''
}

const logInSlice = createSlice({
    name:"logIn",
    initialState,
    reducers: {

        actionToken: (state, {payload}) => {
            state.token = payload.token
        }
    }
})

export const {
    actionToken
} = logInSlice.actions

export const actionFetchLogin = (userData) => (dispatch) => {
    return axios.post(LOGIN_USER, userData)
    .then(loginResult => {
      
            console.log(loginResult);
        
            dispatch(actionToken(loginResult.data))
        console.log(loginResult.data);
        
      /*Do something with jwt-token if login successed*/
    })
    .catch(err => {
        console.log(err);
      /*Show error to customer, may be incorrect password or something else*/
    });
}


export default logInSlice.reducer

