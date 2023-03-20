import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_PRODUCTS, SHOPPING_CART, PRODUCT_IN_SHOPPING_CART, CHANGE_PRODUCT_QUANTITY_SHOPPING_CART} from "../endpoints";

const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    basketProduct: [],
    products: [], // for authorizing users
    serverError: null,
    pageLoading: false
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {

        actionAddToBasket: (state, {payload}) => {
            const id = Object.values(payload._id).join('');
            const item = {product: id, cartQuantity: 1}
            state.basket = [...state.basket, item]
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        },

        actionDeleteFromBasket: (state, {payload}) => {
            state.basket = [...state.basket.filter(({product}) => product !== payload._id)];
            localStorage.setItem("basket", JSON.stringify([...state.basket]));
        },

        actionBasketProduct: (state, {payload}) => {

            state.basketProduct = payload;
        },

        actionIncrease: (state, {payload}) => {
            const basket = JSON.parse(JSON.stringify([...state.basket]))
            const update = basket.map((item) => {
                if (item.product === payload._id) {
                    return  {
                        ...item,
                        cartQuantity: item.cartQuantity + 1,
                    }
                }
                return item;
            })
            localStorage.setItem('basket', JSON.stringify(update));
            return {...state, basket: update}
        },

        actionDecraese: (state, {payload}) => {
            const basket = JSON.parse(JSON.stringify([...state.basket]))
            const update = basket.map((item) => {
                if (item.product === payload._id) {
                    if (item.cartQuantity > 1) 
                    return  {
                        ...item,
                        cartQuantity: item.cartQuantity - 1,
                    }
                }
                return item;
            })
            localStorage.setItem('basket', JSON.stringify(update));
            return { ...state, basket: update }
        },

        actionPageLoading: (state, { payload }) => {
            state.pageLoading = payload;
        },
        actionServerError: (state, { payload }) => {
            state.serverError = payload;
        },

            //for authorized user
            actionAuthProducts: (state, {payload}) => {
                const item = payload.map(elem => {
                    return {
                        product: elem._id,
                        cartQuantity: elem.cartQuantity
                    }
                })
                state.products = item;
            },
            actionAddToProducts: (state, { payload }) => {
                const products = JSON.parse(JSON.stringify([...state.products]));
                const existingProduct = products.find((item) => item.product === payload);
                if (existingProduct) {
                    existingProduct.cartQuantity += 1;
                } else {
                    const newProduct = { product: payload, cartQuantity: 1 };
                    products.push(newProduct);
                }
                return { ...state, products };
              },

            actionDeleteFromProducts: (state, { payload }) => {
                
                const products = [...state.products];
                const productIndex = products.findIndex((item) => item.product === payload);
              
                if (productIndex !== -1) {
                    products[productIndex].cartQuantity -= 1;
                  } else {
                    products.push({ product: payload, cartQuantity: 1 });
                  }
              
                state.products = products;

              },
              actionDeleteAllProducts: (state, {payload}) => {
                state.products = [...state.products.filter(({product}) => product !== payload)]
              }

    }
})

export const {
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese,
    actionAddToProducts,
    actionDeleteFromProducts,
    actionAuthProducts,
    actionDeleteAllProducts,
    actionPageLoading,
    actionServerError
} = basketSlice.actions;

export const actionFetchProductByItemNo = ({itemNos, quantity}) => async (dispatch) => {
    try {
      dispatch(actionPageLoading(true));
      dispatch(actionServerError(false));
      const products = [];
      for (let i = 0; i < itemNos.length; i++) {
        const { data } = await axios.get(`${GET_ALL_PRODUCTS}/${itemNos[i]}`);
        const prodWithQuantity = {...data, cartQuantity: quantity[i]};
        products.push(prodWithQuantity);
      }
      dispatch(actionBasketProduct(products));
      dispatch(actionPageLoading(false));
    } catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
}

// ADD NEW CART

export const actionFetchAddUserCart = (newCart) => async (dispatch) => {
    try {
        const token = JSON.parse(JSON.stringify(localStorage.getItem("token")))
        await axios.post(SHOPPING_CART, newCart, {
            headers: {
                Authorization: token
            }
        });
    }
    catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
}

// GET CART

export const actionGetCart = () => async (dispatch) => {
    try {
        const token = JSON.parse(JSON.stringify(localStorage.getItem("token")))
        const {data} = await axios.get(SHOPPING_CART, {
            headers: {
                Authorization: token
            }
        });
        const products = data.products.map((item) => {
            return {
                ...item.product,
                cartQuantity: item.cartQuantity
            }
        })
        dispatch(actionAuthProducts(products));
    } catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
}

// ADD/INCREASE PRODUCT TO CART

export const actionAddToAuthBasket = (productId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        await axios.put(PRODUCT_IN_SHOPPING_CART.replace(':productId', productId), null, {
            headers: {
                Authorization: token
            }
        });
        dispatch(actionAddToProducts(productId));
    } catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
}

// DELETE/DECREASE PRODUCT IN CART

export const actionDeleteFromAuthBasket = (productId) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(CHANGE_PRODUCT_QUANTITY_SHOPPING_CART.replace(':productId', productId), {
        headers: {
          Authorization: token
        }
      });
      dispatch(actionDeleteFromProducts(productId));
    } catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
  }

// DELETE PRODUCTS FROM CART

export const actionDeleteAllFromAuthBasket = (productId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        await axios.delete(PRODUCT_IN_SHOPPING_CART.replace(':productId', productId), {
            headers: {
                Authorization: token
            }
        });
        dispatch(actionDeleteAllProducts(productId));
    } catch (error) {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
    }
}

export default basketSlice.reducer;
