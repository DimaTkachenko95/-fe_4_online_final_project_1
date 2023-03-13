import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_DETAILS_PRODUCT } from '../endpoints';

const initialState = {
  scales: JSON.parse(localStorage.getItem('scales')) || [],
  productDataComp: [],
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
    actionScalesProduct: (state, { payload }) => {
      state.productDataComp = [...payload];
    },
  },
});
export const { actionAddToScales, actionDeleteFromScales, actionScalesProduct } =
  scalesSlice.actions;

export const toggleScalesProduct = (id) => (dispatch, getState) => {
  const state = getState();
  const scalesProducts = state.scales.scales;
  const isProductInScales = scalesProducts.some((itemId) => itemId === id);

  isProductInScales ? dispatch(actionDeleteFromScales(id)) : dispatch(actionAddToScales(id));
};

export const actionFetchProductScalesByItemNo = (itemNos) => (dispatch) => {
  Promise.all(
    itemNos.map(async (itemNo) => {
      const { data } = await axios.get(GET_DETAILS_PRODUCT.replace(':itemNo', itemNo));
      return data;
    }),
  )
    .then((data) => dispatch(actionScalesProduct(data)))
    .catch((error) => console.error(error));
};

export default scalesSlice.reducer;
