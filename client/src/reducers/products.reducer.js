import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_ALL_PRODUCTS_PAGINATION, SEARCH_PRODUCTS, FILTERED_PRODUCTS, GET_ALL_PRODUCTS_URL } from '../endpoints';


const initialState = {
  allProducts: [],
  productsQuantity: 0,
  sortByPrise: 'Popular',
  searchInputValue: JSON.parse(sessionStorage.getItem('searchInputValue')) || '',
  pageLoading: false,
  serverError: null,
  urlAddress: '',
  filterRequest: JSON.parse(sessionStorage.getItem('filterRequest')) || {
    brand: '',
    category: '',
    processorBrand: '',
    screenSize: '',
    color: '',
    ramMemory: '',
    hardDriveCapacity: '',
    perPage: 3,
    startPage: 1,
    minPrice: '',
    maxPrice: '',
    sort: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    actionAllProducts: (state, { payload }) => {
      state.allProducts = [...payload];
    },
    actionProductsQuantity: (state, { payload }) => {
      state.productsQuantity = payload;
    },
    actionUrlAddress: (state, { payload }) => {
      state.urlAddress = payload;
    },
    actionSortByPrise: (state, { payload }) => {
      state.sortByPrise = payload;
    },
    actionPageLoading: (state, { payload }) => {
      state.pageLoading = payload;
    },
    actionSearchInputValue: (state, { payload }) => {
      state.searchInputValue = payload;
      sessionStorage.setItem('searchInputValue', JSON.stringify(payload));
    },
    actionServerError: (state, { payload }) => {
      state.serverError = payload;
    },
    actionFilterRequest: (state, { payload }) => {
      state.filterRequest = payload;
      console.log(state.filterRequest)
     sessionStorage.setItem('filterRequest', JSON.stringify(payload)); 
    },
  },
});
export const {
  actionAllProducts,
  actionProductsQuantity,
  actionPageLoading,
  actionSearchInputValue,
  actionServerError,
  actionSortByPrise,
  actionFilterRequest,
  actionProductComments,
  actionUrlAddress,
} = productsSlice.actions;

export const actionFetchAllProducts = (aaa) => (dispatch) => {
  dispatch(actionPageLoading(true));
  return axios
    .get(`${GET_ALL_PRODUCTS_URL}${aaa}`)
    .then(({ data }) => {
      console.log(data, '2323232332')
      dispatch(actionProductsQuantity(data.productsQuantity));
      dispatch(actionAllProducts(data.products));
      dispatch(actionPageLoading(false));
    })
    .catch(() => {
      dispatch(actionPageLoading(false));
       dispatch(actionServerError(true)); 
    });
};

export const actionFetchSearchFilterProducts = (newFilterRequestObj) => (dispatch) => {
  dispatch(actionPageLoading(true));
  dispatch(actionFilterRequest(newFilterRequestObj));
  let arrRequest = [];
  for (let key in newFilterRequestObj) {
    if (newFilterRequestObj[key] !== '') {
      arrRequest.push([key, newFilterRequestObj[key]]);
    }
  }
  let filter = new URLSearchParams(arrRequest).toString();
  console.log(filter, 'oooooo')
   dispatch(actionUrlAddress(filter)) 
  return axios
    .get(`${FILTERED_PRODUCTS}${filter}`)
    .then(({ data }) => {
      dispatch(actionProductsQuantity(data.productsQuantity));
      dispatch(actionAllProducts(data.products));
      dispatch(actionSearchInputValue(''));
      dispatch(actionPageLoading(false));
    })
    .catch(() => {
      dispatch(actionPageLoading(false));
      dispatch(actionServerError(true));
    });
};

export const actionFetchSearchProducts = (inputValue) => (dispatch) => {
  dispatch(actionPageLoading(true));
  return axios
    .post(SEARCH_PRODUCTS, { query: inputValue })
    .then(({ data }) => {
      dispatch(actionProductsQuantity(data.length));
      dispatch(actionAllProducts(data));
      dispatch(actionPageLoading(false));
    })
    .catch(() => {
      dispatch(actionPageLoading(false));
      dispatch(actionServerError(true));
    });
};

export default productsSlice.reducer;
