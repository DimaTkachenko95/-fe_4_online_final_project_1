import productsReducer, {
    actionFetchAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionPageLoading,
    actionSearchProducts,
    actionFetchSearchFilterProducts,
    actionChangeSearchFlag,
    actionAllProducts,
    actionShowMoreFilters,
} from "./products.reducer";
import favoritesReducer, {
    actionAddToFavorites,
    actionDeleteFromFavorites
} from "./favorites.reducer";
import scalesReducer, {
    actionAddToScales,
    actionDeleteFromScales
} from "./scales.reducer";
import basketReducer, {
    actionAddToBasket,
    actionDeleteFromBasket
} from "./basket.reducer";

export{
    productsReducer,
    actionFetchAllProducts,
    actionFetchSearchFilterProducts,
    actionAllProducts,
    actionProductsQuantity,
    actionSortByPrise,
    actionShowMoreFilters,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag,
    favoritesReducer,
    actionAddToFavorites,
    actionDeleteFromFavorites,
    basketReducer,
    actionAddToBasket,
    actionDeleteFromBasket,
    scalesReducer,
    actionAddToScales,
    actionDeleteFromScales,
   
}
