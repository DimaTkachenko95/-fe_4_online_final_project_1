import { configureStore } from '@reduxjs/toolkit';
/* import logger from "redux-logger"; */
<<<<<<< HEAD
// import thunk from "redux-thunk";
import {
  productsReducer,
  favoritesReducer,
  scalesReducer,
  basketReducer,
  productDetailsReducer,
  registrationReducer,
  discountedProductsReducer
} from '../reducers';

const store = configureStore({
  reducer: {
    products: productsReducer,
    productsDetails: productDetailsReducer,
    favorites: favoritesReducer,
    scales: scalesReducer,
    basket: basketReducer,
    registration: registrationReducer,
    discountedProducts: discountedProductsReducer,
  },
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
});
=======
import thunk from "redux-thunk";
import { productsReducer, favoritesReducer, scalesReducer, basketReducer, logInReducer, productDetailsReducer, registrationReducer } from "../reducers";


const store = configureStore({
    reducer:{
        products: productsReducer,
        productsDetails: productDetailsReducer,
        favorites: favoritesReducer,
        scales: scalesReducer,
        basket: basketReducer,
        logIn: logInReducer,
        registration: registrationReducer,
    }
    /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
})
>>>>>>> 06f19a7bd6ce3f80641333ad94a6480c4eab1e29

export default store;
