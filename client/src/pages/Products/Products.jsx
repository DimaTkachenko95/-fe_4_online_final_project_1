import FilterMainList from "./components/FilterMainList";
import { Container } from '@mui/material';
import {
    selectorAllProducts,
    selectorIsSearch,
    selectorSearchProducts,
    selectorServerErrorProducts,
    selectorProductsQuantity,
} from "../../selectors";
import { actionFetchAllProducts, actionFetchSearchFilterProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";
import BreadCrumbs from "../../components/BreadCrumbs";
import ButtonChangePages from "./components/ButtonChangePages";


import "./Products.scss";

const Products = () => {
    const allProducts = useSelector(selectorAllProducts);
    const productsQuantity = useSelector(selectorProductsQuantity);
    const searchProducts = useSelector(selectorSearchProducts);
    const isSearch = useSelector(selectorIsSearch);
    const serverError = useSelector(selectorServerErrorProducts);

    const dispatch = useDispatch();


    const productsShown = isSearch ? searchProducts : allProducts;

    useEffect(() => {
        let obj = JSON.parse(localStorage.getItem("requestObjUser"))
        obj? dispatch(actionFetchSearchFilterProducts(obj))
        :
        dispatch(actionFetchAllProducts()); 
    }, [])

  
    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                
                {!serverError && (
                    <>
                        <BreadCrumbs linksArray={[{ link: "/products", text: "Products" }]} />
                        <div>
                            <h5 className="count-found-product">Products <span
                                className="count-found-product__span">{productsQuantity} found</span></h5>
                        </div>
                        <section className="main-list__sections">
                            <div>
                                {(productsShown.length > 0 && !serverError) ?
                                    <>
                                        <div className="grid-main-list">
                                            {productsShown?.map((el, index) => (
                                                <ProductCard el={el} index={index} />
                                            ))
                                            }
                                        </div>
                                        <ButtonChangePages />
                                    </>
                                   
                                    :
                                    <h1>Nothing to find, pleace change your filter</h1>
                                }
                            </div>
                            <div>
                                <FilterMainList />
                            </div>
                        </section>
                    </>
                )
                }

            </Container>
        </main>
    );
}
export default Products;
