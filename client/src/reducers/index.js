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
<<<<<<< HEAD
  actionAddToBasket,
  actionDeleteFromBasket,
  actionBasketProduct,
  actionIncrease,
  actionDecraese,
  actionFetchProductByItemNo,
} from './basket.reducer';
import productDetailsReducer, { actionFetchOneProduct } from './productDetails.reducer';
import registrationReducer, { createCustomerServer } from './registration.reducer';
import discountedProductsReducer, { 
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
 } from './discountedProducts.reducer';

export {
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
  productDetailsReducer,
  actionFetchOneProduct,
  registrationReducer,
  createCustomerServer,
  discountedProductsReducer,
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
};
=======
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
    actionFetchAuthorizationUser,
    actionResetLoginError
} from "./logIn.reducer";
import productDetailsReducer, {
    actionFetchOneProduct,
} from "./productDetails.reducer";
import registrationReducer, {
    createCustomerServerApi,
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
    actionResetLoginError,
    actionFetchAuthorizationUser,
    actionToken,
    productDetailsReducer,
    actionFetchOneProduct,
    registrationReducer,
    createCustomerServerApi,
}
>>>>>>> 06f19a7bd6ce3f80641333ad94a6480c4eab1e29
