// ALL PRODUCTS
export const selectorAllProducts = (state) => state.products.allProducts;
export const selectorSearchInputValue = (state) => state.products.searchInputValue;
export const selectorServerErrorProducts = (state) => state.products.serverError;
export const selectorSortByPrise = (state) => state.products.sortByPrise;
export const selectorFilterRequest = (state) => state.products.filterRequest;
export const selectorProductsQuantity = (state) => state.products.productsQuantity;
export const selectorPageLoading = (state) => state.products.pageLoading;
export const selectorAllProductsComp = (state) => state.products.allProductsComp;

// PRODUCT DETAILS
export const selectorProduct = (state) => state.productsDetails.productData;
export const selectorSimilarProducts = (state) => state.productsDetails.similarProducts;
export const selectorServerErrorProductDetails = (state) => state.productsDetails.serverError;
export const selectorIsDetailsProductLoading = (state) => state.productsDetails.pageLoading;

// ALL COMMENTS
export const selectorProductComments = (state) => state.products.productComments;

// PRODUCTS IN BASKET
export const selectorBasket = (state) => state.basket.basket;
export const selectorBasketProduct = (state) => state.basket.basketProduct;
// PRODUCTS IN SCALES
export const selectorScales = (state) => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = (state) => state.favorites.favorites;
export const selectorFavoritesProduct = (state) => state.favorites.favoritesProduct;

// LOGIN
export const selectorAllLoginErrors = state => state.logIn.error;
export const selectorUserData = state => state.logIn.userData;
export const selectorToken = state => state.logIn.token;
