import {createSlice} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers";
import axios from "axios";


const initialState = {
    allProducts: [],
    searchProducts: [],
    isSearch: false,
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
            state.isSearch = true;
            state.searchProducts = [...payload];
        },
        actionChangeSearchFlag: (state, {payload}) => {
            state.isSearch = payload;
        }
    }
})
export const {
    actionAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag
} = appSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return sendRequest("http://localhost:5000/api/products")
        .then((data) => {
            dispatch(actionAllProducts(data));
            dispatch(actionPageLoading(false));
        })
}

export const actionFetchSearchProducts = (inputValue) => (dispatch) => {
    dispatch(actionPageLoading(true));
    return axios.post("http://localhost:5000/api/products/search", {query: inputValue})
        .then(({data}) => {
            dispatch(actionSearchProducts(data));
            dispatch(actionPageLoading(false));
        })
}

export default appSlice.reducer
