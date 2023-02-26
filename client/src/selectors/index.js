// ALL PRODUCTS
export const selectorAllProducts = state => state.products.allProducts;
export const selectorSearchProducts = state => state.products.searchProducts;
export const selectorIsSearch = state => state.products.isSearch;
export const selectorServerErrorProducts = state => state.products.serverError;

//ONE PRODUCT
export const selectorProduct = state => state.products.productData;

//ALL COMMENTS
export const selectorProductComments = state => state.products.productComments;

// PRODUCTS IN BASKET
export const selectorBasket = state => state.basket.basket;

// PRODUCTS IN SCALES
export const selectorScales = state => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = state => state.favorites.favorites;
