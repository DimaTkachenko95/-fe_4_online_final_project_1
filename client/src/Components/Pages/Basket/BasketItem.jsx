//import {} from "@mui/icons-material"
import { useState } from "react";
import {ReactComponent as Delete} from "./icons/003-delete.svg";
import {ReactComponent as Plus} from "./icons/plus.svg";
import {ReactComponent as Minus} from "./icons/minus.svg"

import "./Basket.scss"

const BasketItems = ({product, test}) => {

const {name, price, id, img, vendor} = product;
const [count, setCount] = useState(0);

return (
            <tr className="product_item" id={id}>
                <td className="product_img">
                    <img src={img} alt={name} />
                </td>
                <td className="product_name"><span className="name">{name}</span><br/><span className="vendor">{vendor}</span></td>
                <td className="product_price">{price} USD</td>
                <td className="quantity"><div>
                    <Minus className="decrease" onClick={() => {setCount(count - 1)}}/>
                    <span>{count}</span>
                    <Plus className="increase" onClick={() => setCount(count + 1)}/>
                    </div></td>
                <td className="product_total">{count * price}</td>
                <td className="delete_box"><Delete onClick={test} className="delete_btn"/></td>
            </tr>
)
}

export default BasketItems;