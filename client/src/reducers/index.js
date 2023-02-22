import appReducer, {
    actionFetchAllProducts,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag
} from "./app.reducer";
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
    appReducer,
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
    actionDeleteFromScales
}
