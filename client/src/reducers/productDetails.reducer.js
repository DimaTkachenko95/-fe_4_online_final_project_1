import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {
    GET_DETAILS_PRODUCT,
    PRODUCT_ADD_COMMENTS,
    PRODUCT_COMMENTS
} from "../endpoints";

const initialState = {
    pageLoading: true,
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
            state.loading = payload
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
    actionPageLoading,
    actionServerError,
    actionProductData,
    actionProductComments,
    actionAddComment
} = productDetailsSlice.actions


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



export default productDetailsSlice.reducer
