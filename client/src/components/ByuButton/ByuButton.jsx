import React from 'react';
import {ReactComponent as CheckMark} from "../ProductCard/icons/check_mark.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useSelector, useDispatch} from "react-redux";
import {selectorBasket} from "../../selectors";
import {actionAddToBasket, actionAddToAuthBasket} from "../../reducers";
import Button from "../Button";
import './ByeButton.scss'
import PropTypes from "prop-types";

const ByuButton = ({product}) => {
    const basket = useSelector(selectorBasket);
    const productQuantity = product.quantity;
    const dispatch = useDispatch();

    const addToBasket = item => {
        if(!localStorage.getItem("token")) {
          if (!basket.find((elem) => elem.product === item._id)) {  
            dispatch(actionAddToBasket(item));
              } else return null
        } else {
          dispatch(actionAddToAuthBasket(item._id))
        }
      }
    return (
        <>
            {
                productQuantity <= 0 ?
                    <Button
                        disabled={true}
                        className="bue-button__out-of-stock"
                        width="100%"
                        text="out of stock"/>
                    : (<>
                        {basket.some(item => item.id === product._id) ?
                            <Button
                                to="/basket"
                                className="bue-button__in-basket"
                                width="100%"
                                text="In basket"
                                startIcon={<CheckMark/>} />
                            :
                            <Button
                                onClick={() => addToBasket(product)}
                                width="100%"
                                text="BUY"
                                startIcon={<ShoppingCartOutlinedIcon/>} />}
                    </>)
            }
        </>
    );
};

ByuButton.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ByuButton;
