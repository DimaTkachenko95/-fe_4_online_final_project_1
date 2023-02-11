import "./Basket.scss";
import { Link } from "react-router-dom";
import BasketItems from "./BasketItem";
//import BasketEmpty from "./BasketEmpty";

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
        ]
      
const basketItems = product.map((item) => (

    
<BasketItems product={item} key={item.id}/>
))
console.log(product);
    return (
        <>
        <div className="basket__wrapper">
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
                
                <div className="total">Total: <span className="total_price">453647 USD</span></div>
                <div className="checkout"><Link to="/checkOut" className="checkout_btn">checkout</Link></div>
            </div>
        </div>
        </>
    )
}

export default Basket;
