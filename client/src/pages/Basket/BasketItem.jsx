import {useState, useEffect } from "react";
import {ReactComponent as Delete} from "./icons/003-delete.svg";
import {ReactComponent as Plus} from "./icons/plus.svg";
import {ReactComponent as Minus} from "./icons/minus.svg";

import { useSelector, useDispatch } from "react-redux";
import { selectorBasket } from "../../selectors";
import { actionDeleteFromBasket } from "../../reducers";

import "./Basket.scss"

const BasketItems = () => {

    const product = useSelector(selectorBasket);
    const [single, setSingle] = useState(true);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1)

const handlerDeleteFromBasket = (item) => {
    dispatch(actionDeleteFromBasket(item))
    console.log(item);
    console.log(product);
}



// const handlerIncrease = (id) => {
//     setProdBasket(product.map((item) => {
//     if (item._id === id) {
//         return {
//             ...item,
//             count: item.count + 1
//         }
//     } return item
//     }))
//     }

    // const handleDecrease = (id) => {
    //     setProdBasket(product.map((item) => {
    //     if (item._id === id) {
    //         if (item.count > 1) {
    //             return {
    //             ...item,
    //             count: item.count - 1
    //         }
    //         }
    //     } return item
    //     }))
    //     }



const item = product.map((item) => (
    <tr className="product_item" id={item._id} key={item._id}>
                <td className="product_img">
                    <img src={item.imageUrls[0]} alt={item.name} />
                </td>
                <td className="product_name">
                    <p className="name">{item.name}</p>
                    <p className="vendor">{item.vendor}</p>
                    </td>
                <td className="product_price">{item.currentPrice} USD</td>
                <td className="quantity"><div>
                    <Minus 
                        className={!single ? "decrease" : "decrease_disabled"} 
                        onClick={() => {
                         //   handleDecrease(item._id)
                        }}
                    />
                    <span>{count}</span>
                    <Plus className="increase" onClick={() => {
                      // handlerIncrease(item._id)
                            }
                        }/>
                    </div></td>
                <td className="product_total">{count * item.currentPrice} USD</td>
                <td className="delete_box"><Delete className="delete_btn" onClick={() => handlerDeleteFromBasket(item)}/></td>
            </tr>
))

return (
    <>
          {item}  
    </>
)
}

export default BasketItems;