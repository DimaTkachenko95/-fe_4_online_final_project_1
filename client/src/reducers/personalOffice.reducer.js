import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USER, ORDERS } from "../endpoints";

const initialState = {
    userInfo: null,
    editInputs: [],
    changePassword: {
        oldPassword: '',
    },
    changePasswordMessage: '',
    pageLoading: false,
    allUserOrders: [],
}

const personalOfficeSlice = createSlice({
    name: "personalOffice",
    initialState,
    reducers: {
        actionUserInfo: (state, { payload }) => {
            state.userInfo = {...payload}
        },
        actionEditInputs: (state, { payload }) => {
            state.editInputs = [payload]
        },
        actionChangePasswordMessage: (state, { payload }) => {
            state.changePasswordMessage = payload
        },
        actionAllUserOrders: (state, {payload}) => {
            state.allUserOrders = payload
        },
        actionPageLoading: (state, {payload}) => {
            state.pageLoading = payload
        },
    }
})

export const { actionUserInfo, actionEditInputs, actionChangePasswordMessage, actionPageLoading, actionAllUserOrders } = personalOfficeSlice.actions

export const actionFetchUserInfo = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .get(GET_USER)
        .then(loggedInCustomer => {
                const {firstName, lastName, login, email , telephone, gender, avatarUrl} = loggedInCustomer.data
                dispatch(actionUserInfo({ firstName,  lastName, login, email , telephone, gender, avatarUrl}))
                dispatch(actionPageLoading(false))
              }) 
              .catch( err => {
                 /*Что-то сделать с ошибкой */
        });
}

export const actionFetchUpdateCustomer = (newUserInfoObj) => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .put("/customers", newUserInfoObj)
        .then(updatedCustomer => { 
        dispatch(actionEditInputs(''))
        dispatch(actionPageLoading(false))
    })
        .catch(err => {/*Do something with error, e.g. show error to customer*/ })
}

export const actionFetchUpdateCustomerPassword = (userPasswordObj) => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios
        .put("/customers/password", userPasswordObj)
        .then(updatedCustomer => { 
            updatedCustomer.data.message ? 
            dispatch(actionChangePasswordMessage(updatedCustomer.data.message))
            :
            dispatch(actionChangePasswordMessage(updatedCustomer.data.password))
            dispatch(actionPageLoading(false))
       })
        .catch(err => console.log(err) )
}

export const actionFetchAllUserOrders = () => (dispatch) => {
   return axios
  .get(ORDERS)
  .then(orders => {
    dispatch(actionAllUserOrders(orders.data))
   console.log(orders.data,'all')
  })
  .catch(err => {
    /*Do something with error, e.g. show error to user*/
  });
}

export default personalOfficeSlice.reducer 