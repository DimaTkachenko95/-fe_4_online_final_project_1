import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    scales: JSON.parse(localStorage.getItem("scales")) || []
}

const scalesSlice = createSlice({
    name: "scales",
    initialState,
    reducers: {
        actionAddToScales: (state, {payload}) => {
            state.scales = [...state.scales, payload]
            localStorage.setItem("scales", JSON.stringify([...state.scales]))
        },
        actionDeleteFromScales: (state, {payload}) => {
            state.scales = [...state.scales.filter(({_id}) => _id !== payload._id)];
            localStorage.setItem("scales", JSON.stringify([...state.scales]));
        },
    }
})
export const {
    actionAddToScales,
    actionDeleteFromScales
} = scalesSlice.actions;

export const toggleScalesProduct = product => (dispatch, getState) => {
    const state = getState();
    const scalesProducts = state.scales.scales;
    const isProductInScales = scalesProducts.some(item => item._id === product._id);

    isProductInScales
        ? dispatch(actionDeleteFromScales(product))
        : dispatch(actionAddToScales(product))
}

export default scalesSlice.reducer;
