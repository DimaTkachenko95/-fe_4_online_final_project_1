import {configureStore} from "@reduxjs/toolkit";
/* import logger from "redux-logger"; */
import thunk from "redux-thunk";
import { productsReducer, favoritesReducer, scalesReducer, basketReducer, logInReducer } from "../reducers";


const store = configureStore({
    reducer:{
        products: productsReducer,
        favorites: favoritesReducer,
        scales: scalesReducer,
        basket: basketReducer,
        logIn: logInReducer
    }
    /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
})

export default store
