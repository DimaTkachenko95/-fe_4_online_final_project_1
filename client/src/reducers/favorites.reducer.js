import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_DETAILS_PRODUCT} from "../endpoints";
import {actionBasketProduct} from "./basket.reducer";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    favoritesProduct: []
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        actionAddToFavorites: (state, {payload}) => {
            state.favorites = [...state.favorites, payload];
            localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
        },
        actionDeleteFromFavorites: (state, {payload}) => {
            state.favorites = [...state.favorites.filter(itemId => itemId !== payload)];
            localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
        },
        actionFavoritesProduct: (state, {payload}) => {
            state.favoritesProduct = [...payload];
        },
    }
})
export const {
    actionAddToFavorites,
    actionDeleteFromFavorites,
    actionFavoritesProduct
} = favoritesSlice.actions;

export const toggleFavoriteProduct = id => (dispatch, getState) => {
    const state = getState();
    const favoriteProducts = state.favorites.favorites;
    const isFavoriteProduct = favoriteProducts.some(itemId => itemId === id);

    isFavoriteProduct
        ? dispatch(actionDeleteFromFavorites(id))
        : dispatch(actionAddToFavorites(id))
}


export const actionFetchProductFavoritesByItemNo = (itemNos) =>  (dispatch) => {
         Promise.all(itemNos.map(async (itemNo) => {
            const { data } = await axios.get(GET_DETAILS_PRODUCT.replace(':itemNo',itemNo));
            return data;
        }))
        .then( data => dispatch(actionFavoritesProduct(data)))
        .catch(error => console.error(error));
    }

export default favoritesSlice.reducer;
