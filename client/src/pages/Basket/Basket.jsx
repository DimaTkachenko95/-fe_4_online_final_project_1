import {Container} from "@mui/system";
import BasketItems from "./Components/BasketItem";
import Button from "../../components/Button/";
import EmptyResult from "../../components/EmptyResult";
import styled from "styled-components";
import "./Basket.scss";

import {useSelector} from "react-redux";
import {selectorBasketProduct, selectorIsBasketLoading } from "../../selectors";
import BreadCrumbs from '../../components/BreadCrumbs';
import Preloader from "../../components/Preloader";

const ContainerBasket = styled(Container)`
  padding-bottom: 50px;
`

const Basket = () => {
    
    const basketProduct = useSelector(selectorBasketProduct);
    const isLoading = useSelector(selectorIsBasketLoading);
    const result = basketProduct.reduce((prev, item) => prev + item.cartQuantity * item.currentPrice, 0)
console.log(basketProduct);
    return (

        <ContainerBasket maxWidth="lg">
            <Preloader open={isLoading}/>
            <BreadCrumbs linksArray={[{link: "/basket", text: "Shopping Cart"}]}/>
            <h1 className="basket__title">Shopping <span className="title_contrast">cart</span></h1>
            {basketProduct.length === 0 ? 
                <EmptyResult/> :
                <>
                    <div className="basket__box">
                        <div className="basket__item">
                            <table className="basket__table">
                                <thead className="table_title">
                                <tr>
                                    <th className="table_title__header">Photo</th>
                                    <th className="table_title__header">Name</th>
                                    <th className="table_title__header">Price</th>
                                    <th className="table_title__header">quantity</th>
                                    <th className="table_title__header">total</th>
                                    <th className="table_title__header" colSpan={2}></th>
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
