import productsReducer, {
    actionFetchAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag
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
import productDetailsReducer, {
    actionFetchOneProduct,
} from "./productDetails.reducer";

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
    scalesReducer,
    actionAddToScales,
    actionDeleteFromScales,
    productDetailsReducer,
    actionFetchOneProduct
}
