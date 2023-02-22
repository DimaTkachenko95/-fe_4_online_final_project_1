import {createSlice} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers";


const initialState = {
    allProducts: [],
    pageProduct: {},
    pageLoading: true
}


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        actionAllProducts: (state, {payload}) => {
            state.allProducts = [...payload]
        },
        actionPageLoading: (state, {payload}) => {
            state.loading = payload
        },
        actionSearchProducts: (state, {payload}) => {
            state.searchProducts = [...payload];
        }
    }
})
export const {
    actionAllProducts,
    actionPageLoading,
    actionSearchProducts
} = appSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return sendRequest("http://localhost:5000/api/products")
        .then((data) => {
            dispatch(actionAllProducts(data))
            dispatch(actionPageLoading(false))
        })
}

export default appSlice.reducer
