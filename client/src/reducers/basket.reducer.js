import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  SHOPPING_CART,
  PRODUCT_IN_SHOPPING_CART,
  CHANGE_PRODUCT_QUANTITY_SHOPPING_CART,
  GET_DETAILS_PRODUCT,
} from '../endpoints';

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  basketProduct: [],
  serverError: null,
  pageLoading: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    actionAddToBasket: (state, { payload }) => { // left
      const id = Object.values(payload._id).join('');
      const itemIndex = state.basket.findIndex((item) => item.product === id);

      if (itemIndex !== -1) {
        state.basket[itemIndex].cartQuantity += 1;
      } else {
        const newItem = { product: id, cartQuantity: 1 };
        state.basket = [...state.basket, newItem];
      }

      localStorage.setItem('basket', JSON.stringify([...state.basket]));
    },

    actionUpdateBasket: (state, { payload }) => {
      // left
      const newItems = payload.map((item) => {
        return {
          product: item._id,
          cartQuantity: item.cartQuantity,
        };
      });
      state.basket = newItems;
    },

    actionDeleteFromBasket: (state, { payload }) => {
      // left
      console.log(payload);
      state.basket = [...state.basket.filter(({ product }) => product !== payload._id)];
      localStorage.setItem('basket', JSON.stringify([...state.basket]));
    },

    actionBasketProductNew: (state, { payload }) => {
      // left
      state.basketProduct = payload;
    },

    actionDecraese: (state, { payload }) => { // left
      const basket = JSON.parse(JSON.stringify([...state.basket]));
      const update = basket.map((item) => {
        if (item.product === payload._id) {
          if (item.cartQuantity > 1)
            return {
              ...item,
              cartQuantity: item.cartQuantity - 1,
            };
        }
        return item;
      });
      localStorage.setItem('basket', JSON.stringify(update));
      return { ...state, basket: update };
    },

    actionPageLoading: (state, { payload }) => {
      // left
      state.pageLoading = payload;
    },
    actionServerError: (state, { payload }) => {
      // left
      state.serverError = payload;
    },
  },
});

export const {
  actionAddToBasket,
  actionDeleteFromBasket,
  actionBasketProductNew,
  actionDecraese,
  actionPageLoading,
  actionServerError,
  actionUpdateBasket,
} = basketSlice.actions;

// ADD NEW CART

export const actionFetchAddUserCart = (newCart) => async (dispatch) => { // left
  try {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
    await axios.post(SHOPPING_CART, newCart, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    dispatch(actionPageLoading(false));
    dispatch(actionServerError(true));
  }
};

// C H E C K   C A R T

export const actionCheckCart = () => (dispatch) => {
  const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
  const basket = initialState.basket;
  if (token) {
    axios.get(SHOPPING_CART, { headers: { Authorization: token } }).then(({ data }) => {
      if (data === null) {
        if (basket.length > 0) {
          const newCart = {
            products: basket.map((item) => {
              return {
                product: item.product,
                cartQuantity: item.cartQuantity,
              };
            }),
          };
          dispatch(actionFetchAddUserCart(newCart));
          console.log(basket);
          localStorage.removeItem('basket');
        } else {
          return null;
        }
      } else {
        const newData = data.products.map((item) => {
          return {
            ...item.product,
            cartQuantity: item.cartQuantity,
          };
        });
        dispatch(actionBasketProductNew(newData)); 
        dispatch(actionUpdateBasket(newData)); 
        localStorage.removeItem('basket');
      }
    });
  }
};

////////////////
// G E T   P R O D U C T

export const getProductsCart = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token !== null && token !== undefined) {
    console.log('токен есть');
    console.log(token);
    await axios
      .get(SHOPPING_CART, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        
        if(data) {
            const newData = data.products?.map((item) => {
          return {
            ...item.product,
            cartQuantity: item.cartQuantity,
          };
        });
        dispatch(actionBasketProductNew(newData));
        } else {
            return null;
        }
      });
  } else {
    console.log('токен отсутствует');
    console.log(token);
    const basketProducts = JSON.parse(localStorage.getItem('basket')) || [];
    console.log(basketProducts);
    if (basketProducts.length > 0) {
      const promises = basketProducts.map(async (item, i) => {
        const { data } = await axios.get(GET_DETAILS_PRODUCT.replace(':itemNo', item.product));
        console.log(item.cartQuantity);
        return { ...data, cartQuantity: item.cartQuantity };
      });
      Promise.all(promises)
        .then((data) => {
          console.log(data);
          dispatch(actionBasketProductNew(data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(actionPageLoading(false));
          dispatch(actionServerError(true));
        });
    }
  }
};

// A D D / I N C R E A S E   P R O D U C T   T O   C A R T

export const actionAddProductToBasket = (item) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    await axios
      .put(PRODUCT_IN_SHOPPING_CART.replace(':productId', item._id), null, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch(actionUpdateBasket(data.products)); // в каком виде добавляется - хз
      })
      .catch(() => {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
      });
  } else {
    dispatch(actionAddToBasket(item));
  }
};

// D E C R E A S E   P R O D U C T   I N   C A R T

export const actionDeleteProductFromBasket = (item) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    await axios
      .delete(CHANGE_PRODUCT_QUANTITY_SHOPPING_CART.replace(':productId', item._id), {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        console.log(data.products);
        dispatch(actionUpdateBasket(data.products));
      })
      .catch(() => {
        dispatch(actionPageLoading(false));
        dispatch(actionServerError(true));
      });
  } else {
    dispatch(actionDecraese(item));
  }
};

// D E L E T E   P R O D U C T S   F R O M  C A R T

export const actionDeleteAllFromBasket = (item) => async (dispatch) => {
    const token = localStorage.getItem('token');
    if(token) {
        await axios.delete(PRODUCT_IN_SHOPPING_CART.replace(':productId', item._id), {
            headers: {
              Authorization: token,
            },
          })
          .then(({ data }) => {
            console.log(data.products);
            dispatch(actionUpdateBasket(data.products)); 
          })
          .catch(() => {
            dispatch(actionPageLoading(false));
            dispatch(actionServerError(true));
          });
    } else {
        dispatch(actionDeleteFromBasket(item))
    }
};

export default basketSlice.reducer;
