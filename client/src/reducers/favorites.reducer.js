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
            state.favorites = [...state.favorites.filter(itemId => itemId !== payload)];
            localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
        }
    }
})
export const {
    actionAddToFavorites,
    actionDeleteFromFavorites
} = favoritesSlice.actions;

export const toggleFavoriteProduct = id => (dispatch, getState) => {
    const state = getState();
    const favoriteProducts = state.favorites.favorites;
    const isFavoriteProduct = favoriteProducts.some(itemId => itemId === id);

    isFavoriteProduct
        ? dispatch(actionDeleteFromFavorites(id))
        : dispatch(actionAddToFavorites(id))
}

export default favoritesSlice.reducer;
