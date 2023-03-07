import { configureStore } from '@reduxjs/toolkit';
/* import logger from "redux-logger"; */
// import thunk from "redux-thunk";
import {
  productsReducer,
  favoritesReducer,
  scalesReducer,
  basketReducer,
  productDetailsReducer,
  registrationReducer,
  personalOfficeReducer
} from '../reducers';

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsDetails: productDetailsReducer,
    favorites: favoritesReducer,
    scales: scalesReducer,
    basket: basketReducer,
    registration: registrationReducer,
    personalOffice: personalOfficeReducer,
  },
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
});

export default store;
