// ALL PRODUCTS
export const selectorAllProducts = (state) => state.products.allProducts;
export const selectorSearchInputValue = (state) => state.products.searchInputValue;
export const selectorServerErrorProducts = (state) => state.products.serverError;
export const selectorSortByPrise = (state) => state.products.sortByPrise;
export const selectorFilterRequest = (state) => state.products.filterRequest;
export const selectorProductsQuantity = (state) => state.products.productsQuantity;
export const selectorPageLoading = (state) => state.products.pageLoading;

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
export const selectorIsOrdered = (state) => state.basket.isOrdered;

// PRODUCTS IN SCALES
export const selectorScales = (state) => state.scales.scales;
export const selectorProductComp = (state) => state.scales.productDataComp;
export const selectorIsScalesPageLoading = (state) => state.scales.pageLoading;
export const selectorServerErrorScalesPage = (state) => state.scales.serverError;

// FAVORITES PRODUCTS
export const selectorFavorites = (state) => state.favorites.favorites;
export const selectorFavoritesProduct = (state) => state.favorites.favoritesProduct;
export const selectorIsFavoritesPageLoading = (state) => state.favorites.pageLoading;
export const selectorServerErrorFavoritesPage = (state) => state.favorites.serverError;

// LOGIN
export const selectorAllLoginErrors = (state) => state.logIn.error;
export const selectorUserData = (state) => state.logIn.userData;
export const selectorToken = (state) => state.logIn.token;

// DISCOUNTED PRODUCTS
export const selectorDiscountedProducts = (state) => state.discountedProducts.discountedProducts;

export const selectorServerError = (state) => state.registration.serverError;
