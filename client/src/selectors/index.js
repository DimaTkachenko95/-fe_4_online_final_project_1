// ALL PRODUCTS
export const selectorAllProducts = state => state.products.allProducts;
export const selectorSearchProducts = state => state.products.searchProducts;
export const selectorIsSearch = state => state.products.isSearch;
export const selectorServerErrorProducts = state => state.products.serverError;
export const selectorSortByPrise = state => state.products.sortByPrise;
export const selectorRequestObjUser = state => state.products.requestObjUser
export const selectorShowMoreFilters = state => state.products.showMoreFilters
export const selectorProductsQuantity = state => state.products.productsQuantity

// PRODUCTS IN BASKET
export const selectorBasket = state => state.basket.basket;

// PRODUCTS IN SCALES
export const selectorScales = state => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = state => state.favorites.favorites;

export const selectoRequestObj = state => state.app.requestObj
