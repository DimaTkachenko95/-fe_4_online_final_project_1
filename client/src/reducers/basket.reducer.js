import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_ALL_PRODUCTS, ORDERS} from "../endpoints";

const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    basketProduct: []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {

        actionAddToBasket: (state, {payload}) => {
            const id = Object.values(payload._id).join('');
            const item = {id: id, cartQuantity: 1}
            state.basket = [...state.basket, item]
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        },

        actionDeleteFromBasket: (state, {payload}) => {
            console.log(payload);
            state.basket = [...state.basket.filter(({id}) => id !== payload._id)];
            localStorage.setItem("basket", JSON.stringify([...state.basket]));
        },

        actionBasketProduct: (state, {payload}) => {

            state.basketProduct = payload;
        },

        actionIncrease: (state, {payload}) => {
            const basket = JSON.parse(JSON.stringify([...state.basket]))
            const update = basket.map((product) => {
                if (product.id === payload._id) {
                    return {
                        ...product,
                        cartQuantity: product.cartQuantity + 1,
                    }
                }
                return product;
            })
            localStorage.setItem('basket', JSON.stringify(update));
            return {...state, basket: update}
        },

        actionDecraese: (state, {payload}) => {
            const basket = JSON.parse(JSON.stringify([...state.basket]))
            const update = basket.map((product) => {
                if (product.id === payload._id) {
                    if (product.cartQuantity > 1)
                        return {
                            ...product,
                            cartQuantity: product.cartQuantity - 1,
                        }
                }
                return product;
            })
            localStorage.setItem('basket', JSON.stringify(update));
            return {...state, basket: update}
        }

    }
})

export const {
    actionAddToBasket,
    actionDeleteFromBasket,
    actionBasketProduct,
    actionIncrease,
    actionDecraese
} = basketSlice.actions;

export const actionFetchProductByItemNo = ({itemNos, quantity}) => async (dispatch) => {
    try {
        const products = [];
        for (let i = 0; i < itemNos.length; i++) {
            const {data} = await axios.get(`${GET_ALL_PRODUCTS}/${itemNos[i]}`);
            const prodWithQuantity = {...data, cartQuantity: quantity[i]};
            products.push(prodWithQuantity);
        }
        dispatch(actionBasketProduct(products));
    } catch (error) {
        console.error(error);
    }
}

export const actionFetchCreateOrder = (newOrder) => async (dispatch) => {
    try {
        console.log(newOrder)
        const newOrderReq = await axios.post(`${ORDERS}`, newOrder);
        console.log(newOrderReq);

    } catch (error) {
        console.error(error);
    }
}

export default basketSlice.reducer;
