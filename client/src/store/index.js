import {configureStore} from "@reduxjs/toolkit";
/* import logger from "redux-logger"; */
import thunk from "redux-thunk";
import { appReducer, favoritesReducer, scalesReducer, basketReducer } from "../reducers";


const store = configureStore({
    reducer:{
        app: appReducer,
        favorites: favoritesReducer,
        scales: scalesReducer,
        basket: basketReducer
    }
    /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
})

export default store
