import { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectorProduct, selectorSimilarProducts } from "../../../../selectors";
import './SimilarProducts.scss';
import ProductCard from "../../../../components/ProductCard";
import { actionFetchSimilarProducts } from "../../../../reducers/productDetails.reducer";

const SimilarProducts = () => {
    const dispatch = useDispatch();
    const product = useSelector(selectorProduct);
    const similarProducts = useSelector(selectorSimilarProducts);

    // TODO: Добавить фильтрацию по цене после расширения бд
    const currentPrice = product.currentPrice;
    const category = product.category;
    const filters = {
        category,
        // minPrice: currentPrice - 100,
        // maxPrice: currentPrice + 500
    }

    useEffect(() => {
        dispatch(actionFetchSimilarProducts(filters));
    }, [product])

    const shownProduct = similarProducts?.filter(({_id}) => _id !== product._id);

    return (
        <>
            { shownProduct.length > 0 && (
                <div className="similar-products__container">
                    <h3 className="similar-products__title">Similar items <span>you might like</span></h3>
                    <div className="similar-products__wrapper">
                        { shownProduct.map( (item, index) => (
                            (index < 4) &&
                                <div key={item._id} className="similar-products__item">
                                    <ProductCard el={item} />
                                </div> )
                            )
                        }
                    </div>
                </div>
            ) }
        </>
    );
};

export default SimilarProducts;
