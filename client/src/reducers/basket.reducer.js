import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {

        actionAddToBasket: (state, {payload}) => {
            const id = Object.values(payload._id).join('');
            const item = {id: id, quantity: 1}
            state.basket = [...state.basket, item]
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        },

        actionDeleteFromBasket: (state, {payload}) => {
            state.basket = [...state.basket.filter(({_id}) => _id !== payload._id)];
            localStorage.setItem("basket", JSON.stringify([...state.basket]));
        },
    }
})
export const {
    actionAddToBasket,
    actionDeleteFromBasket
} = basketSlice.actions;

export default basketSlice.reducer;
