import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import BasketItems from "./BasketItem";
import Input from "../../components/Input";

import "./Basket.scss";

const Basket = () => {

    const product = [
        {
            name: "Example Name First Leptop",
            img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=3a58&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
            price: "100500",
            vendor: "Vendor Example",
            id: 1
        },
        {
            name: "Example Name Second Leptop",
            img: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
            price: "1500",
            vendor: "Vendor Example",
            id: 2
        },
        ];
        const [promocode, setPromocode] = useState("TestDiscount");


const basketItems = product.map((item) => <BasketItems 
                                            product={item}
                                            item={item} 
                                            key={item.id}
                                            />)

    return (
        <Container>
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
                    <tbody>{basketItems}
                    </tbody>
                    </table>
                </div>
            </div>
            
            <div className="basket__footer">
                <div className="basket__footer_promo-input">
                    <Input
                    type={"text"}
                    nameInput={"promocode"}
                    placeholder={"Enter your promocode"}
                    label={"You can use promocode to get a discount"}/>
                </div>
                <div className="basket__footer_total">Total: <span className="total_price">453647 USD</span></div>
                <div className="basket__footer_checkout"><Link to="/checkOut" className="checkout_btn">checkout</Link></div>
            </div>
            </Container>
    )
}

export default Basket;