import './Product.scss';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {actionFetchProduct} from "../../reducers/app.reducer";
import ProductBlock from "../../components/ProductBlock";
const Product = () => {
    let {itemNo} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchProduct(itemNo));
    });

    return(
        <ProductBlock/>
    )
};

export default Product;
