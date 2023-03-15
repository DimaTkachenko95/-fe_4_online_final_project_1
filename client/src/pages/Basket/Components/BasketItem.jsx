import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

import {ReactComponent as Delete} from "../icons/003-delete.svg";
import {ReactComponent as Plus} from "../icons/plus.svg";
import {ReactComponent as Minus} from "../icons/minus.svg";

import {useSelector, useDispatch} from "react-redux";
import {selectorBasket, selectorBasketProduct, selectorToken, selectorProducts} from "../../selectors";
import {actionDeleteFromBasket, 
        actionIncrease, 
        actionDecraese, 
        actionFetchProductByItemNo,
        actionDeleteFromAuthBasket,
        actionAddToAuthBasket,
        actionDeleteAllFromAuthBasket
    } from "../../reducers";

import "../Basket.scss"

const BasketItems = () => {

    const dispatch = useDispatch();
    const basket = useSelector(selectorBasket);
    const productBasket = useSelector(selectorBasketProduct);
    const token = useSelector(selectorToken);
    const products = useSelector(selectorProducts);

    const userProducts = localStorage.getItem("token") ? products : basket;

    const itemNos = userProducts.map((item) => {
        return item.product
    })

    const quantity = userProducts.map((item) => {
        return item.cartQuantity
    })

    useEffect(() => {
       
     dispatch(actionFetchProductByItemNo({itemNos, quantity}))

    }, [basket, products])
   

    const handlerDeleteFromBasket = (item) => {
        if(localStorage.getItem('token')) {
            dispatch(actionDeleteAllFromAuthBasket(item._id))
        }
        dispatch(actionDeleteFromBasket(item))
    }

    const increase = (item) => {
        const cartItem = userProducts.find((elem) => elem.product === item._id);
        if (!cartItem || cartItem.cartQuantity <= item.quantity-1) {
        if(localStorage.getItem('token')) {
            dispatch(actionAddToAuthBasket(item._id))
        }
        dispatch(actionIncrease(item))
        } else return null;
    }

    const decrease = (item) => {

    if(item.cartQuantity >= 2) {

            if(localStorage.getItem('token')) {
                dispatch(actionDeleteFromAuthBasket(item._id))
            } else {
            dispatch(actionDecraese(item))}
    } else return null
    }

   
    const item = productBasket.map((item) => (
        <tr className="product_item" id={item._id} key={item._id}>
            <td className="product_img">
                <Link to={`/products/${item._id}`}>
                    <img src={item.imageUrls[0]} alt={item.name}/>
                </Link>
            </td>

            <td className="product_name">
                <Link to={`/products/${item._id}`}>
                    <p className="name">{item.name}</p>
                </Link>
                <p className="vendor">{item.brand}</p>
            </td>

            <td className="product_price">{item.currentPrice.toLocaleString()} USD</td>

            <td className="quantity">
                <div>
                    <Minus className={item.cartQuantity >= 2 ? "decrease" : "decrease_disabled"}
                            onClick={() => decrease(item)}/>
                    <span>{item.cartQuantity}</span>
                    <Plus className="increase" onClick={() => increase(item)} />
                </div>
            </td>

            <td className="product_total">{(item.cartQuantity * item.currentPrice).toLocaleString()} USD</td>

            <td className="delete_box">
                <Delete className="delete_btn" onClick={() => handlerDeleteFromBasket(item)}/>
            </td>
        </tr>
    ))

    return (
        <>
            {item}
        </>
    )
}

export default BasketItems;