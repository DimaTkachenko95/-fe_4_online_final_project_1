import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import BasketItems from "./BasketItem";
import styled from "styled-components";

import "./Basket.scss";
import { useSelector } from "react-redux";
import { selectorBasket } from "../../selectors";
import { useState } from "react";


import Btn from "../../components/Button/";


const ContainerBasket = styled(Container) `
    padding: 25px 0;
    `

  
const Basket = () => {

    const [result, setResult] = useState("Number")

    return (
        <ContainerBasket maxWidth="xl">
            <h1 className="basket__title">Shopping cart</h1>
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
                <div className="basket__footer_total">Total: <span className="total_price">{result} USD</span></div>
                <div className="basket__footer_checkout"><Link to="/checkOut" className="checkout_btn">checkout</Link></div>
            </div>
        </ContainerBasket>
    )
}

export default Basket;