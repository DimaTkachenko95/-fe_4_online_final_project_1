
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
import logInReducer, {
    actionFetchLogin,
    actionToken
} from "./logIn.reducer";

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
    logInReducer,
    actionFetchLogin,
    actionToken
}
