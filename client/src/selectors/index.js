// ALL PRODUCTS
export const selectorAllProducts = state => state.products.allProducts;
export const selectorSearchProducts = state => state.products.searchProducts;
export const selectorIsSearch = state => state.products.isSearch;
export const selectorServerErrorProducts = state => state.products.serverError;

// PRODUCTS IN BASKET
export const selectorBasket = state => state.basket.basket;

// PRODUCTS IN SCALES
export const selectorScales = state => state.scales.scales;

// FAVORITES PRODUCTS
export const selectorFavorites = state => state.favorites.favorites;

// LOGIN
export const selectorUserData = state => state.logIn.userData;
export const selectorLoginOrEmail = state => state.logIn.userData.loginOrEmail;
export const selectorPassword = state => state.logIn.userData.password;
export const selectorToken = state => state.logIn.token;


