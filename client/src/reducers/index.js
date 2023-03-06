import productsReducer, {
    actionFetchAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionPageLoading,
    actionFetchSearchFilterProducts,
    actionSearchInputValue,
    actionAllProducts,
    actionFetchSearchProducts,
} from "./products.reducer";
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
    actionToken,
    actionFetchAuthorizationUser
} from "./logIn.reducer";
import productDetailsReducer, {
    actionFetchOneProduct,
} from "./productDetails.reducer";
import registrationReducer, {
    createCustomerInServer,
} from './registration.reducer';
export{
    productsReducer,
    actionFetchAllProducts,
    actionAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionSearchInputValue,
    actionPageLoading,
    actionFetchSearchProducts,
    actionFetchSearchFilterProducts,
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
    actionFetchAuthorizationUser,
    actionToken,
    productDetailsReducer,
    actionFetchOneProduct,
    registrationReducer,
    createCustomerInServer,
}
