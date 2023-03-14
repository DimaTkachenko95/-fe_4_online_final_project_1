import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';

export const GET_ALL_PRODUCTS = `/products`;
export const GET_ALL_PRODUCTS_PAGINATION = `/products/filter?&perPage=3&startPage=1`
export const SEARCH_PRODUCTS = `/products/search`;
export const FILTERED_PRODUCTS = `/products/filter?`;
export const FILTERS = `/filters`;
export const UPDATE_FILTERS = `/filters/:id`;
export const GET_FILTERS_BY_TYPE = `/filters/:type`;

export const GET_DETAILS_PRODUCT = `/products/:itemNo`;
export const PRODUCT_COMMENTS = `/comments/product/:itemNo`;
export const PRODUCT_ADD_COMMENTS = `/comments`;

export const REGISTER_USER = `/customers`;
export const LOGIN_USER = `/customers/login`;
export const GET_USER = `/customers/customer`;

export const WISHLIST = `/wishlist`;
export const PRODUCT_IN_WISHLIST = `/wishlist/:productId`;

export const SHOPPING_CART = `/cart`;
export const PRODUCT_IN_SHOPPING_CART = `/cart/:productId`;
export const CHANGE_PRODUCT_QUANTITY_SHOPPING_CART = `/cart/product/:productId`;
export const ORDERS = `/orders`;

