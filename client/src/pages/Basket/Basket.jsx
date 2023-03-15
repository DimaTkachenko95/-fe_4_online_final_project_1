import {Container} from "@mui/system";
import BasketItems from "./Components/BasketItem";
import Button from "../../components/Button/";
import EmptyResult from "../../components/EmptyResult";
import styled from "styled-components";
import "./Basket.scss";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectorBasket, selectorBasketProduct, selectorProducts, selectorToken } from "../../selectors";
import {actionFetchAddUserCart, actionGetCart} from "../../reducers";
import Button from "../../components/Button/";
import BreadCrumbs from '../../components/BreadCrumbs';
import Preloader from "../../components/Preloader";

const ContainerBasket = styled(Container)`
  padding: 25px 0 50px 0;
`

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(selectorBasket);
    const basketProduct = useSelector(selectorBasketProduct);
    const token = useSelector(selectorToken);
    const isLoading = useSelector(selectorIsBasketLoading);
    const result = basketProduct.reduce((prev, item) => prev + item.cartQuantity * item.currentPrice, 0)


    useEffect(() => {
        if(localStorage.getItem("token")) {
          if(localStorage.getItem("basket")) {
            const newCart = {
              products: basket.map((item) => {
                return {
                  product: item.id,
                  cartQuantity: item.cartQuantity
                }
              })
            }
            localStorage.removeItem("basket");
            dispatch(actionFetchAddUserCart(newCart));
          } else {
            dispatch(actionGetCart())
          }
        }
      }, []);

    return (

        <ContainerBasket maxWidth="lg">
            <Preloader open={isLoading}/>
            <BreadCrumbs linksArray={[{ link: '/basket', text: 'Shopping Cart' }]} />
            <h1 className="basket__title">Shopping <span className="title_contrast">cart</span></h1>
            {!basketProduct && !basketProduct.length <= 1 ? 
                <EmptyBasket/> :
                <>
                    <div className="basket__box">
                        <div className="basket__item">
                            <table className="basket__table">
                                <thead className="table_title">
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                    <th colSpan={2}></th>
                                </tr>
                                </thead>
                                <tbody>
                                <BasketItems/>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="basket__footer">
                        <div className="basket__footer_total">
                            Total: <span className="total_price">{result.toLocaleString()} USD</span>
                        </div>
                        <div className="basket__footer_checkout">
                            <Button text="checkout" to="/checkout"/>
                        </div>
                    </div>
                </>
                }
        </ContainerBasket>
    )
}

export default Basket;
