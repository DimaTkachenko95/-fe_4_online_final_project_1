import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_USER, ORDERS } from "../endpoints";
import { letterHtml } from "../pages/Authorization/letterHtml";

const initialState = {
    userInfo: null,
    editInputs: [],
    changePasswordMessage: '\xa0',
    pageLoading: false,
    allUserOrders: [],
    editInputsOrder: [],
    orderInfo: null,
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
        actionEditInputsOrder: (state, {payload}) => {
            state.editInputsOrder = [payload]
        },
        actionPageLoading: (state, {payload}) => {
            state.pageLoading = payload
        },
        actionOrderInfo: (state, {payload}) => {
            state.orderInfo = payload
        },
    }
})

export const { actionUserInfo, 
               actionEditInputs, 
               actionChangePasswordMessage, 
               actionPageLoading, 
               actionAllUserOrders,
               actionEditInputsOrder,
               actionOrderInfo } = personalOfficeSlice.actions

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
            dispatch(actionChangePasswordMessage('Enter corect old password'))
            dispatch(actionPageLoading(false))
       })
        .catch(err => console.log(err) )
}

export const actionFetchAllUserOrders = () => (dispatch) => {
   return axios
  .get(ORDERS)
  .then(orders => {
    dispatch(actionAllUserOrders(orders.data.reverse()))
   console.log(orders.data,'all')
  })
  .catch(err => {
    /*Do something with error, e.g. show error to user*/
  });
}

export const actionFetchCancelOrder = (_id) => (dispatch) => {
    return axios
    .delete(`/orders/${_id}`)
    .then(result => {
      /*Do something with result*/
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export const actionFetchGetOneOrder = (orderNo) => (dispatch) => {
    return axios
    .get(`/orders/${orderNo}`)
    .then(result => {
        console.log(result, result.data.mobile)
      const createOrderInfo = {
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            telephone: result.data.mobile,
            email: result.data.email,
            country:  result.data.deliveryAddress.country,
            city: result.data.deliveryAddress.city,
            address: result.data.deliveryAddress.address,
            postalCode: result.data.deliveryAddress.postal,   
      }
      dispatch( actionOrderInfo( createOrderInfo))
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}


export const actionFetchUpdatedOrder = (_id , updatedOrder) => (dispatch) => {
    console.log(updatedOrder, 'dsvzdvs')
    return axios
    .put(`/orders/641792ad91fc3f004164cc50`, {country: 'Engl',   letterSubject: "Thank you for order! You are welcome!",
    letterHtml: letterHtml()})
    .then(updatedOrder => {
        console.log(updatedOrder, 'qwqwqw')
      /*Do something with updatedOrder*/
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export default personalOfficeSlice.reducer 