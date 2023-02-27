import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import BasketItems from "./BasketItem";
import EmptyBasket from "./EmptyBasket";
import styled from "styled-components";

import "./Basket.scss";
import { useSelector, useDispatch} from "react-redux";
import { selectorBasket, selectorBasketProduct } from "../../selectors";
import { useEffect, useState } from "react";

import Btn from "../../components/Button/";


const ContainerBasket = styled(Container) `
    padding: 25px 0;
    `

  
const Basket = () => {

     const basket = useSelector(selectorBasket);
     const [isEmpty, setIsEmpty] = useState(true);
     const basketProduct = useSelector(selectorBasketProduct)
     const result = basketProduct.reduce((prev, item) => prev + item.cartQuantity * item.currentPrice, 0)

    useEffect(() => {
    if (basket.length >= 1) {
        setIsEmpty(false)
    } else setIsEmpty(true)
    }, [basket])

    return (
        
        <ContainerBasket maxWidth="lg">
            <h1 className="basket__title">Shopping <span className="title_contrast">cart</span></h1>
           {isEmpty ?
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
                        <BasketItems />
                    </tbody>
                </table>
                </div>
            </div>
            
            <div className="basket__footer">
                <div className="basket__footer_total">Total: <span className="total_price">{result.toLocaleString()} USD</span></div>
                <div className="basket__footer_checkout"><Btn text="checkout" to="/checkOut" variant="gradient-green"/></div>
            </div>
            </> }
        </ContainerBasket> 
        
    )
}

export default Basket;