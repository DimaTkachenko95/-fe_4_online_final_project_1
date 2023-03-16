import {Container} from "@mui/system";
import BasketItems from "./Components/BasketItem";
import Button from "../../components/Button/";
import EmptyResult from "../../components/EmptyResult";
import styled from "styled-components";
import "./Basket.scss";
import {useSelector} from "react-redux";
import {selectorBasket, selectorBasketProduct, selectorIsBasketLoading} from "../../selectors";
import Preloader from "../../components/Preloader";

const ContainerBasket = styled(Container)`
  padding: 25px 0 50px 0;
`

const Basket = () => {
    const basket = useSelector(selectorBasket);
    const isLoading = useSelector(selectorIsBasketLoading);
    const basketProduct = useSelector(selectorBasketProduct)
    const result = basketProduct.reduce((prev, item) => prev + item.cartQuantity * item.currentPrice, 0)

    return (

        <ContainerBasket maxWidth="lg">
            <Preloader open={isLoading}/>
            <h1 className="basket__title">Shopping <span className="title_contrast">cart</span></h1>
            {basket.length === 0 ?
                <EmptyResult/> :
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
                </>}
        </ContainerBasket>
    )
}

export default Basket;
