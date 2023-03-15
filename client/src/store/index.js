import { configureStore } from '@reduxjs/toolkit';
/* import logger from "redux-logger"; */
import thunk from "redux-thunk";
import {
    productsReducer,
    favoritesReducer,
    scalesReducer,
    basketReducer,
    logInReducer,
    productDetailsReducer,
    registrationReducer,
    discountedProductsReducer,
    checkoutReducer
} from "../reducers";


const store = configureStore({
    reducer:{
        products: productsReducer,
        productsDetails: productDetailsReducer,
        favorites: favoritesReducer,
        scales: scalesReducer,
        basket: basketReducer,
        logIn: logInReducer,
        registration: registrationReducer,
        discountedProducts: discountedProductsReducer,
        checkout: checkoutReducer,
    }
    /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
})

export default store;
