import {createSlice} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers";
import axios from "axios"
import { sendRequest2 } from "../helpers";


const initialState = {
    allProducts: [],
    pageProduct: {},
    requestObj:{
        brend:'',
        category:''
    },
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


export const actionFetchAllProducts = (obj) => (dispatch) => {
    dispatch(actionPageLoading(true))
    
    
   obj?sendRequest2(new URLSearchParams(obj).toString()):sendRequest2('') 



    .then(res => {
        const products = res.data.products
        console.log(res, "ggggggggg")
        dispatch(actionAllProducts(products))
        dispatch(actionPageLoading(false))
    })

/*     return axios
    .get("http://localhost:5000/api/products/filter?ramMemory=32 GB")
    .then(res => {
       
        const products = res.data.products
        console.log(products.products)
        dispatch(actionAllProducts(products))
        dispatch(actionPageLoading(false))
    })
    .catch(err => {
     
    }); */
    
    /* sendRequest("http://localhost:5000/api/products/filter?color=black")
       
        .then((data) => {
            console.log(data)
            dispatch(actionAllProducts(data))
            dispatch(actionPageLoading(false))
        }) */
}

export default appSlice.reducer
