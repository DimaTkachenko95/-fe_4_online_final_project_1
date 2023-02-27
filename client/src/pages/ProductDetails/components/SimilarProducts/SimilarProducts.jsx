import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectorProduct, selectorSimilarProducts } from "../../../../selectors";

const SimilarProducts = () => {
    const product = useSelector(selectorProduct);
    const similarProducts = useSelector(selectorSimilarProducts);
    const dispatch = useDispatch();

    console.log(product)
    const category = product.category;
    const currentPrice = product.currentPrice;

    return (
        <div>

        </div>
    );
};

export default SimilarProducts;
