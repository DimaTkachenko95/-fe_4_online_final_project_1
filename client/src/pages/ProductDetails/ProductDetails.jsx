import './ProductDetails.scss';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Product from "./components/Product";
import {actionChangeSearchFlag, actionFetchOneProduct} from "../../reducers";
import {selectorServerErrorProducts} from "../../selectors";

const ProductDetails = () => {
    let {itemNo} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchOneProduct(itemNo));
        return (() => {
            dispatch(actionChangeSearchFlag(false));
        })
    }, [itemNo, dispatch]);

    const serverError = useSelector(selectorServerErrorProducts);

    return (
        <main>
            {
                serverError &&
                (<section className="main-list__sections-nothing-found">
                    <p className="main-list__description">The system is currently experiencing difficulties;
                        please try again. </p>
                    <p className="main-list__description">If problem persists, please contact customer service.</p>
                </section>)
            }
            <Product/>
        </main>

    )
};

export default ProductDetails;
