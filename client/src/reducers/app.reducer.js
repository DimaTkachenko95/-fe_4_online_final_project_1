import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers";



const initialState = {
    allProducts: [],
    pageProduct: {},
    loading: true,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        actionAllProducts:(state, {payload})=>{
            state.allProducts = payload
        }

    }
})
export const {actionAllProducts} = appSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    console.log('bbbbbbbbb')
/*  fetch("http://localhost:5000/api/products", {
        method: "GET",
    })
    .then((result)=>{
        console.log('ccc')
        result.json()})
    .then((data)=>{
        console.log(data)
        dispatch(actionAllProducts(data))
        
    }) */

    return sendRequest("http://localhost:5000/api/products")
    .then(data=>{
        console.log(data)
        dispatch(actionAllProducts(data))
    })
}

export default appSlice.reducer