import './Product.scss';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import ProductBlock from "../../components/ProductBlock";
import {actionFetchOneProduct} from "../../reducers/products.reducer";
const Product = () => {
    let {itemNo} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchOneProduct(itemNo));
    });

    return(
        <ProductBlock/>
    )
};

export default Product;
