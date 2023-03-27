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
  getProductsCart,
  deleteUserCart
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
import registrationReducer, {
  createCustomerServerApi,
  actionRegistrationSuccess,
  actionPageIsLoading,
  actionRegistrationError,
  initialState,
  actionMessageError
} from './registration.reducer';

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
  deleteUserCart,
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
  actionIsOrdered,
  registrationReducer,
  createCustomerServerApi,
  actionRegistrationSuccess,
  actionPageIsLoading,
  actionRegistrationError,
  initialState,
  actionMessageError
};
