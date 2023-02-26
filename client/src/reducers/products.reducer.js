import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    GET_ALL_PRODUCTS,
    GET_DETAILS_PRODUCT,
    PRODUCT_ADD_COMMENTS,
    PRODUCT_COMMENTS,
    SEARCH_PRODUCTS
} from "../endpoints";


const initialState = {
    allProducts: [],
    searchProducts: [],
    isSearch: false,
    pageLoading: true,
    serverError: null,
    productData: {},
    productComments: [],
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
        },
        actionProductData: (state, {payload}) => {
            state.productData = {...payload};
        },
        actionProductComments: (state, {payload}) => {
            state.productComments = [...payload];
        },
        actionAddComment: (state, {payload}) => {
            state.productComments = [...state.productComments, payload];
        }
    }
})
export const {
    actionAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag,
    actionServerError,
    actionProductData,
    actionProductComments,
    actionAddComment
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

export const actionFetchOneProduct = (itemNo) => (dispatch) => {
    dispatch(actionPageLoading(true));
    return axios.get(GET_DETAILS_PRODUCT.replace(':itemNo', itemNo))
        .then(({data}) => {
            dispatch(actionProductData(data));
            dispatch(actionPageLoading(false));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export const actionFetchAllComments = (itemNo) => (dispatch) => {
    return axios
        .get(PRODUCT_COMMENTS.replace(':itemNo', itemNo))
        .then(({data}) => {
            console.log(data)
            dispatch(actionProductComments(data));
        })
        .catch(() => dispatch(actionServerError(true)))
}


export const actionFetchAddComment = (newComment) => (dispatch) => {
    return axios
        .post(PRODUCT_ADD_COMMENTS, newComment)
        .then(newComment => {
            dispatch(actionAddComment(newComment));
        })
        .catch(() => dispatch(actionServerError(true)))
}



export default productsSlice.reducer
