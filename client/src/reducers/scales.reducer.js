import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scales: JSON.parse(localStorage.getItem('scales')) || [],
};

const scalesSlice = createSlice({
  name: 'scales',
  initialState,
  reducers: {
    actionAddToScales: (state, { payload }) => {
      state.scales = [...state.scales, payload];
      localStorage.setItem('scales', JSON.stringify([...state.scales]));
    },
    actionDeleteFromScales: (state, { payload }) => {
      state.scales = [...state.scales.filter((itemId) => itemId !== payload)];
      localStorage.setItem('scales', JSON.stringify([...state.scales]));
    },
  },
});
export const { actionAddToScales, actionDeleteFromScales } = scalesSlice.actions;

export const toggleScalesProduct = (id) => (dispatch, getState) => {
  const state = getState();
  const scalesProducts = state.scales.scales;
  const isProductInScales = scalesProducts.some((itemId) => itemId === id);

  isProductInScales ? dispatch(actionDeleteFromScales(id)) : dispatch(actionAddToScales(id));
};

export const delFromComparisonTable = (id) => (dispatch, getState) => {
  const state = getState();
  const scalesProducts = state.scales.scales;
  const isProductInScales = scalesProducts.some((itemId) => itemId === id);

  isProductInScales ? dispatch(actionDeleteFromScales(id)) : dispatch(actionDeleteFromScales(id));
};

export default scalesSlice.reducer;
