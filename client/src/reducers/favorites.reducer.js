import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
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
            state.favorites = [...state.favorites.filter(({_id}) => _id !== payload._id)];
            localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
        }
    }
})
export const {
    actionAddToFavorites,
    actionDeleteFromFavorites
} = favoritesSlice.actions;

export const toggleFavoriteProduct = product => (dispatch, getState) => {
    const state = getState();
    const favoriteProducts = state.favorites.favorites;
    const isFavoriteProduct = favoriteProducts.some(item => item._id === product._id);

    isFavoriteProduct
        ? dispatch(actionDeleteFromFavorites(product))
        : dispatch(actionAddToFavorites(product))
}

export default favoritesSlice.reducer;
