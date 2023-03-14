import productsReducer, {
  actionFetchAllProducts,
  actionProductsQuantity,
  actionSortByPrise,
  actionPageLoading,
  actionFetchSearchFilterProducts,
  actionSearchInputValue,
  actionAllProducts,
  actionFetchSearchProducts,
} from './products.reducer';
import favoritesReducer, {
    actionAddToFavorites,
    actionDeleteFromFavorites,
    toggleFavoriteProduct
} from './favorites.reducer';
import scalesReducer, {
  actionAddToScales,
  actionDeleteFromScales,
  toggleScalesProduct,
  actionFetchProductScalesByItemNo,
} from './scales.reducer';
import basketReducer, {
  actionAddToBasket,
  actionDeleteFromBasket,
  actionBasketProduct,
  actionIncrease,
  actionDecraese,
  actionFetchProductByItemNo,
} from './basket.reducer';
import logInReducer, {
  actionFetchLogin,
  actionToken,
  actionFetchAuthorizationUser,
  actionResetLoginError,
} from './logIn.reducer';
import productDetailsReducer, { actionFetchOneProduct } from './productDetails.reducer';
import registrationReducer, { createCustomerServerApi, initialState } from './registration.reducer';
import discountedProductsReducer, {
    actionDiscountedProducts,
    actionFetchDiscountedProducts,
} from './discountedProducts.reducer';

export {
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
  toggleFavoriteProduct,
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
  toggleScalesProduct,
  actionFetchProductScalesByItemNo,
  logInReducer,
  actionFetchLogin,
  actionResetLoginError,
  actionFetchAuthorizationUser,
  actionToken,
  productDetailsReducer,
  actionFetchOneProduct,
  registrationReducer,
  createCustomerServerApi,
  initialState,
  discountedProductsReducer,
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
};
