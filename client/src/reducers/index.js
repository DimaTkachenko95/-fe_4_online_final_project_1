import productsReducer, {
    actionFetchAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionPageLoading,
    actionFetchSearchFilterProducts,
    actionSearchInputValue,
    actionAllProducts,
    actionShowMoreFilters,
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
  actionFetchProductByItemNo,
} from './basket.reducer';
import productDetailsReducer, { actionFetchOneProduct } from './productDetails.reducer';
import registrationReducer, { createCustomerServer } from './registration.reducer';

export{
    productsReducer,
    actionFetchAllProducts,
    actionFetchSearchFilterProducts,
    actionAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionShowMoreFilters,
    actionPageLoading,
    actionSearchInputValue,
    actionFetchSearchProducts,
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
    registrationReducer,
    productDetailsReducer,
    actionFetchOneProduct
}
