import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers";


const initialState = {
    allProducts: [],
    pageProduct: {},
    pageLoading: true,
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    scales: JSON.parse(localStorage.getItem("scales")) || [],
}


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        actionAllProducts:(state, {payload})=>{
            state.allProducts = [...payload]
        },
        actionAddToBasket:(state, {payload})=>{
            state.basket = [...state.basket, payload]
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        },
        actionAddToFavorites:(state, {payload})=>{
            state.favorites = [...state.favorites, payload]
            localStorage.setItem("favorites", JSON.stringify([...state.favorites]))
        },
        actionDeleteFromFavorites:(state, {payload})=>{
            state.favorites = [...payload]
        },
        actionAddToScales:(state, {payload})=>{
            state.scales = [...state.scales, payload]
            localStorage.setItem("scales", JSON.stringify([...state.scales]))
        },
        actionDeleteFromScales:(state, {payload})=>{
            state.scales = [...payload]
        },
        actionPageLoading: (state, {payload})=>{
            state.loading = payload
        }
    }
})
export const {actionAllProducts,
             actionPageLoading, 
             actionAddToBasket,  
             actionAddToFavorites, 
             actionDeleteFromFavorites,
             actionAddToScales,
             actionDeleteFromScales} = appSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    dispatch(actionPageLoading(true))
    return sendRequest("http://localhost:5000/api/products")
    .then((data)=>{
        dispatch(actionAllProducts(data))
        dispatch(actionPageLoading(false))
    })
}

export default appSlice.reducer