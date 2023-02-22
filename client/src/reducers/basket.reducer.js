import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        actionAddToBasket: (state, {payload}) => {
            state.basket = [...state.basket, payload]
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        },
        actionDeleteFromBasket: (state, {payload}) => {
            // надо протестить на пейдже с корзиной
            state.scales = [...state.scales.filter(({_id}) => _id !== payload._id)];
            localStorage.setItem("basket", JSON.stringify([...state.scales]));
        },
    }
})
export const {
    actionAddToBasket,
    actionDeleteFromBasket
} = basketSlice.actions;

export default basketSlice.reducer;
