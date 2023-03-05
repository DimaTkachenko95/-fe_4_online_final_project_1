import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    FILTERED_PRODUCTS,
    GET_DETAILS_PRODUCT,
    PRODUCT_ADD_COMMENTS,
    PRODUCT_COMMENTS
} from "../endpoints";

const initialState = {
    pageLoading: false,
    serverError: null,
    productData: {},
    productComments: [],
    similarProducts: []
}

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        actionPageLoading: (state, {payload}) => {
            state.pageLoading = payload
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
        },
        actionSimilarProduct: (state, {payload}) => {
            state.similarProducts = [...payload];
        }
    }
})
export const {
    actionPageLoading,
    actionServerError,
    actionProductData,
    actionProductComments,
    actionAddComment,
    actionSimilarProduct,
} = productDetailsSlice.actions


export const actionFetchOneProduct = itemNo => dispatch => {
    dispatch(actionPageLoading(true));
    return axios.get(GET_DETAILS_PRODUCT.replace(':itemNo', itemNo))
        .then(({data}) => {
            dispatch(actionProductData(data));
            dispatch(actionPageLoading(false));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export const actionFetchAllComments = itemNo => dispatch => {
    return axios
        .get(PRODUCT_COMMENTS.replace(':itemNo', itemNo))
        .then(({data}) => {
            console.log(data)
            dispatch(actionProductComments(data));
        })
        .catch(() => dispatch(actionServerError(true)))
}


export const actionFetchAddComment = newComment => dispatch => {
    return axios
        .post(PRODUCT_ADD_COMMENTS, newComment)
        .then(newComment => {
            dispatch(actionAddComment(newComment));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export const actionFetchSimilarProducts = filter => dispatch => {
    const stringParams = new URLSearchParams(filter);

    return axios.get(FILTERED_PRODUCTS, {params: stringParams})
        .then(({data}) => {
            dispatch(actionSimilarProduct(data.products));
        })
        .catch(() => dispatch(actionSimilarProduct([])))
}

export default productDetailsSlice.reducer
