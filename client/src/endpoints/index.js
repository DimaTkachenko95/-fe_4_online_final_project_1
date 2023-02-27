const PREFIX = "http://localhost:5000/api";

export const GET_ALL_PRODUCTS = `${PREFIX}/products`;
export const SEARCH_PRODUCTS = `${PREFIX}/products/search`;
export const FILTERED_PRODUCTS = `${PREFIX}/products/filter`;
export const FILTERS = `${PREFIX}/filters`;
export const UPDATE_FILTERS = `${PREFIX}/filters/:id`;
export const GET_FILTERS_BY_TYPE = `${PREFIX}/filters/:type`;

export const GET_DETAILS_PRODUCT = `${PREFIX}/products/:itemNo`;
export const PRODUCT_COMMENTS = `${PREFIX}/comments/product/:itemNo`;
export const PRODUCT_ADD_COMMENTS = `${PREFIX}/comments`;

export const REGISTER_USER = `${PREFIX}/customers`;
export const LOGIN_USER = `${PREFIX}/customers/login`;

export const WISHLIST = `${PREFIX}/wishlist`;
export const PRODUCT_IN_WISHLIST = `${PREFIX}/wishlist/:productId`;

export const SHOPPING_CART = `${PREFIX}/cart`;
export const PRODUCT_IN_SHOPPING_CART = `${PREFIX}/cart/:productId`;
export const CHANGE_PRODUCT_QUANTITY_SHOPPING_CART = `${PREFIX}/cart/product/:productId`;
