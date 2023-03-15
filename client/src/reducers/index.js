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
  actionAddToProducts,
  actionFetchAddUserCart,
  actionGetCart,
  actionAddToAuthBasket,
  actionDeleteFromAuthBasket,
  actionDeleteFromProducts,
  actionAuthProducts,
  actionDeleteAllFromAuthBasket,
  actionDeleteAllProducts
} from "./basket.reducer";
import logInReducer, {
  actionFetchLogin,
  actionToken,
  actionFetchAuthorizationUser,
  actionResetLoginError,
} from './logIn.reducer';
import productDetailsReducer, {
  actionFetchOneProduct,
  actionFetchAddComment,
  actionFetchAllComments
} from './productDetails.reducer';
import registrationReducer, {
  createCustomerServerApi,
  initialState 
} from './registration.reducer';
import discountedProductsReducer, {
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
} from './discountedProducts.reducer';
import checkoutReducer, {
  actionFetchCreateOrder,
  actionIsOrdered
} from './checkout.reducer';
export{
  productsReducer,
  actionFetchAllProducts,
  actionProductsQuantity,
  actionSortByPrise,
  actionPageLoading,
  actionFetchSearchFilterProducts,
  actionSearchInputValue,
  actionAllProducts,
  actionFetchSearchProducts,
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
  actionAddToProducts,
  actionFetchAddUserCart,
  actionGetCart,
  actionAddToAuthBasket,
  actionDeleteFromAuthBasket,
  actionDeleteFromProducts,
  actionAuthProducts,
  actionDeleteAllFromAuthBasket,
  actionDeleteAllProducts,
  scalesReducer,
  actionAddToScales,
  actionDeleteFromScales,
  toggleScalesProduct,
  actionFetchProductScalesByItemNo,
  logInReducer,
  actionFetchLogin,
  actionToken,
  actionFetchAuthorizationUser,
  actionResetLoginError,
  productDetailsReducer,
  actionFetchOneProduct,
  actionFetchAddComment,
  actionFetchAllComments,
  registrationReducer, 
  createCustomerServerApi,
  initialState,
  discountedProductsReducer, 
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
  checkoutReducer,
  actionFetchCreateOrder,
  actionIsOrdered
}
