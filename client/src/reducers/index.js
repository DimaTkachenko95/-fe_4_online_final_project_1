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
  actionBasketProductNew,
  actionDecraese,
  actionFetchAddUserCart,
  actionAddProductToBasket,
  actionDeleteProductFromBasket,
  actionDeleteAllFromBasket,
  actionUpdateBasket,
  actionCheckCart,
  getProductsCart
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
  actionFetchAllComments,
  actionFetchDeleteComment,
  actionFetchUpdateComment
} from './productDetails.reducer';
import registrationReducer, {
  createCustomerServerApi,
  actionCreateCustomer,
  initialState } from './registration.reducer';
import discountedProductsReducer, {
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
} from './discountedProducts.reducer';
import checkoutReducer, {
  actionFetchCreateOrder,
  actionIsOrdered
} from './checkout.reducer';
import personalOfficeReducer, {
    actionUserInfo, 
    actionFetchUserInfo, 
    actionEditInputs,
    actionFetchUpdateCustomer,
    actionFetchUpdateCustomerPassword,
    actionChangePasswordMessage,
    actionFetchAllUserOrders,
} from "./personalOffice.reducer";

export {
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
  actionBasketProductNew,
  actionDecraese,
  actionFetchAddUserCart,
  actionAddProductToBasket,
  actionDeleteProductFromBasket,
  actionDeleteAllFromBasket,
  actionUpdateBasket,
  getProductsCart,
  actionCheckCart,
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
  actionFetchDeleteComment,
  actionFetchUpdateComment,
  registrationReducer,
  createCustomerServerApi,
  actionCreateCustomer,
  initialState,
  discountedProductsReducer,
  personalOfficeReducer,
  actionDiscountedProducts,
  actionFetchDiscountedProducts,
  actionUserInfo, 
  actionFetchUserInfo, 
  actionEditInputs,
  actionFetchUpdateCustomer,
  actionFetchAllUserOrders,
  actionFetchUpdateCustomerPassword,
  actionChangePasswordMessage,
  checkoutReducer, 
  actionFetchCreateOrder,
  actionIsOrdered
};
