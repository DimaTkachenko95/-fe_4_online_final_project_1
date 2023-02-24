import { configureStore } from '@reduxjs/toolkit';
/* import logger from "redux-logger"; */
import thunk from 'redux-thunk';
import { productsReducer, favoritesReducer, scalesReducer, basketReducer } from '../reducers';
import registrationReduser from '../reducers/registration.reducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    scales: scalesReducer,
    basket: basketReducer,
    registration: registrationReduser,
  },
  /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
});

export default store;
