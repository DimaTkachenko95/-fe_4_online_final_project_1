// ALL PRODUCTS
export const selectorAllProducts = state => state.products.allProducts;
export const selectorSearchProducts = state => state.products.searchProducts;
export const selectorIsSearch = state => state.products.isSearch;
export const selectorServerErrorProducts = state => state.products.serverError;

// PRODUCT DETAILS
export const selectorProduct = state => state.productsDetails.productData;
export const selectorSimilarProducts = state => state.productsDetails.similarProducts;
export const selectorServerErrorProductDetails = state => state.productsDetails.serverError;

// ALL COMMENTS
export const selectorProductComments = state => state.products.productComments;

// PRODUCTS IN BASKET
export const selectorBasket = state => state.basket.basket;
export const selectorBasketProduct = state => state.basket.basketProduct;
// PRODUCTS IN SCALES
export const selectorScales = state => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = state => state.favorites.favorites;
