
import productsReducer, {
  actionFetchAllProducts,
  actionPageLoading,
  actionSearchProducts,
  actionChangeSearchFlag,
} from './products.reducer';
import favoritesReducer, {
  actionAddToFavorites,
  actionDeleteFromFavorites,
} from './favorites.reducer';
import scalesReducer, { actionAddToScales, actionDeleteFromScales } from './scales.reducer';
import basketReducer, {
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese,
    actionFetchProductByItemNo
} from "./basket.reducer";
import logInReducer, {
    actionFetchLogin,
    actionToken
} from "./logIn.reducer";
import productDetailsReducer, {
    actionFetchOneProduct,
} from "./productDetails.reducer";
import registrationReducer, {
    createCustomerServer,
} from './registration.reducer';
export{
    productsReducer,
    actionFetchAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag,
    favoritesReducer,
    actionAddToFavorites,
    actionDeleteFromFavorites,
    basketReducer,
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese,
    actionFetchProductByItemNo,
    scalesReducer,
    actionAddToScales,
    actionDeleteFromScales,
    logInReducer,
    actionFetchLogin,
    actionToken,
    productDetailsReducer,
    actionFetchOneProduct,
    registrationReducer,
    createCustomerServer,
}
