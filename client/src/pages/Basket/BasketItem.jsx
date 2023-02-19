//import {} from "@mui/icons-material"
import { useState } from "react";
import {ReactComponent as Delete} from "./icons/003-delete.svg";
import {ReactComponent as Plus} from "./icons/plus.svg";
import {ReactComponent as Minus} from "./icons/minus.svg"

import "./Basket.scss"

const BasketItems = ({product, test}) => {

const {name, price, id, img, vendor} = product;
const [count, setCount] = useState(1);
const [totalProduct, setTotalProduct] = useState(price);

const increase = () => {
setCount(count + 1);
setTotalProduct(product.price * (count + 1))
}

const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
setTotalProduct(product.price * (count - 1))  
    }

return null;
}

return (
            <tr className="product_item" id={id}>
                <td className="product_img">
                    <img src={img} alt={name} />
                </td>
                <td className="product_name">
                    <p className="name">{name}</p>
                    <p className="vendor">{vendor}</p>
                    </td>
                <td className="product_price">{price} USD</td>
                <td className="quantity"><div>
                    <Minus className="decrease" onClick={() => {
                        decrease(product)
                        }}/>
                    <span>{count}</span>
                    <Plus className="increase" onClick={() => {
                        increase(product)
                            }
                        }/>
                    </div></td>
                <td className="product_total">{totalProduct} USD</td>
                <td className="delete_box"><Delete onClick={test} className="delete_btn"/></td>
            </tr>
)
}

export default BasketItems;