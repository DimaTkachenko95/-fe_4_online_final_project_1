import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS, FILTERED_PRODUCTS } from "../endpoints";



const initialState = {
    allProducts: [],
    productsQuantity: 0,
    showMoreFilters: false,
    searchProducts: [],
    sortByPrise: 'Doesn`t matter',
    isSearch: false,
    pageLoading: true,
    serverError: null,
    requestObjUser:  JSON.parse(localStorage.getItem("requestObjUser"))  ||  { brand: '', 
                                                                             color: '', 
                                                                             category: '', 
                                                                             processorBrand: '', 
                                                                             screenSize: '', 
                                                                             color: '', 
                                                                             ramMemory: '',
                                                                             hardDriveCapacity: '',
                                                                             perPage: 8,
                                                                             startPage: 1, 
                                                                             minPrice: '',
                                                                             maxPrice: '',
                                                                             sort: '',
                                                                             } 
}


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        actionAllProducts: (state, {payload}) => {
            state.isSearch = false;
            state.allProducts = [...payload]
        },
        actionProductsQuantity: (state, {payload}) => {
            state.productsQuantity = payload
        },
        actionSortByPrise: (state, {payload}) => {
            state.sortByPrise = payload
        },
        actionPageLoading: (state, {payload}) => {
            state.loading = payload
        },
        actionSearchProducts: (state, {payload}) => {
            state.isSearch = true;
            state.searchProducts = [...payload];
        },
        actionChangeSearchFlag: (state, {payload}) => {
            state.isSearch = payload;
        },
        actionServerError: (state, {payload}) => {
            state.serverError = payload;
        },
        actionShowMoreFilters: (state, {payload}) => {
            state.showMoreFilters = payload;
        },
        actionRequestObjUser: (state, {payload}) => {
            state.requestObjUser = payload
            localStorage.setItem("requestObjUser", JSON.stringify(payload));
        }
    }
})
export const {
    actionAllProducts,
    actionProductsQuantity,
    actionPageLoading,
    actionSearchProducts,
    actionChangeSearchFlag,
    actionServerError,
    actionSortByPrise,
    actionRequestObjUser,
    actionShowMoreFilters,
} = productsSlice.actions


export const actionFetchAllProducts = () => (dispatch) => {
    dispatch(actionPageLoading(true)) 
    return axios.get(`${GET_ALL_PRODUCTS}/filter?&perPage=8&startPage=1`) 
        .then(({data}) => {
            dispatch(actionProductsQuantity(data.productsQuantity))    
            dispatch(actionAllProducts(data.products));
            dispatch(actionPageLoading(false));
        })
         /* .catch(() => dispatch(actionServerError(true))) */
}

export const actionFetchSearchFilterProducts = (selectorObjUser) => (dispatch) => {
    dispatch(actionPageLoading(true))
    dispatch(actionRequestObjUser(selectorObjUser))
    let arrRequest = []
    for (let key in selectorObjUser) {
        if (selectorObjUser[key] !== '') {
            arrRequest.push([key, selectorObjUser[key]])
        }
    }
    let filter = new URLSearchParams(arrRequest).toString()
    console.log(arrRequest, "aaaaaaa")
    console.log(filter, "b")
    return axios.get(`${FILTERED_PRODUCTS}${filter}`)
        .then(({data}) => {
            dispatch(actionProductsQuantity(data.productsQuantity))         
            dispatch(actionAllProducts(data.products));
            dispatch(actionPageLoading(false));
        })
       /*  .catch(() => dispatch(actionServerError(true)))  */


    
    
        
}

export const actionFetchSearchProducts = (inputValue) => (dispatch) => {
    dispatch(actionPageLoading(true));
    /*  debugger  */
    return axios.post({SEARCH_PRODUCTS} ,{query: inputValue})
        .then(({data}) => {
            dispatch(actionProductsQuantity(data.length))    
            dispatch(actionSearchProducts(data));
            dispatch(actionPageLoading(false));
        })
        .catch(() => dispatch(actionServerError(true)))
}

export default productsSlice.reducer
