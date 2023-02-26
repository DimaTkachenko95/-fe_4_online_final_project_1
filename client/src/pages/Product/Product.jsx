import './Product.scss';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import ProductBlock from "../../components/ProductBlock";
import {actionChangeSearchFlag, actionFetchOneProduct} from "../../reducers";
import {selectorServerErrorProducts} from "../../selectors";

const Product = () => {
    let {itemNo} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchOneProduct(itemNo));
        return (() => {
            dispatch(actionChangeSearchFlag(false));
        })
    }, []);

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
            <ProductBlock/>
        </main>

    )
};

export default Product;
