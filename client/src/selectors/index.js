// ALL PRODUCTS
export const selectorAllProducts = state => state.app.allProducts;
export const selectorSearchProducts = state => state.app.searchProducts;
export const selectorIsSearch = state => state.app.isSearch;

//ONE PRODUCT
export const selectorProduct = state => state.app.pageProduct;

// PRODUCTS IN BASKET
export const selectorBasket = state => state.basket.basket;

// PRODUCTS IN SCALES
export const selectorScales = state => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = state => state.favorites.favorites;
