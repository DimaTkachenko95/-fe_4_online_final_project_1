import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    GET_ALL_PRODUCTS,
    SEARCH_PRODUCTS
} from "../endpoints";


const initialState = {
    allProducts: [],
    searchProducts: [],
    isSearch: false,
    pageLoading: true,
    serverError: null
}


const productsSlice = createSlice({
    name: "products",
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
        },
        actionServerError: (state, {payload}) => {
            state.serverError = payload;
        }
    }
})
export const {
    actionAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag,
    actionServerError,
    actionProductComments,
} = productsSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return axios.get(GET_ALL_PRODUCTS)
        .then(({data}) => {
            dispatch(actionAllProducts(data));
            dispatch(actionPageLoading(false));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export const actionFetchSearchProducts = (inputValue) => (dispatch) => {
    dispatch(actionPageLoading(true));
    return axios.post(SEARCH_PRODUCTS, {query: inputValue})
        .then(({data}) => {
            dispatch(actionSearchProducts(data));
            dispatch(actionPageLoading(false));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export default productsSlice.reducer
