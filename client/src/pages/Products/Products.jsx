import FilterMainList from "./components/FilterMainList";
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import {
    selectorAllProducts,
    selectorIsSearch,
    selectorSearchProducts,
    selectorServerErrorProducts
} from "../../selectors";
import { actionChangeSearchFlag, actionFetchAllProducts, actionSearchProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";
import BreadCrumbs from "../../components/BreadCrumbs";

import "./Products.scss";

const Products = () => {
    const allProducts = useSelector(selectorAllProducts);
    const searchProducts = useSelector(selectorSearchProducts);
    const isSearch = useSelector(selectorIsSearch);
    const serverError = useSelector(selectorServerErrorProducts);
    const dispatch = useDispatch();

    const productsShown = isSearch ? searchProducts : allProducts;

    useEffect(() => {
        dispatch(actionFetchAllProducts());
        return (() => {
            dispatch(actionSearchProducts([]));
        })
    }, [])

    const handleSearchAll = () => {
        dispatch(actionChangeSearchFlag(false));
    }

    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                {
                    serverError &&
                    (<section className="main-list__sections-nothing-found">
                        <p className="main-list__description">The system is currently experiencing difficulties;
                            please try again. </p>
                        <p className="main-list__description">If problem persists, please contact customer service.</p>
                    </section>)
                }

                {
                    (productsShown.length > 0 && !serverError) &&
                    (<>
                        <BreadCrumbs linksArray={ [{ link: "/products", text: "Products" }] }/>
                        <div>
                            <h5 className="count-found-product">Products <span
                                className="count-found-product__span">found</span></h5>
                        </div>
                        <section className="main-list__sections">
                            <div>
                                <div className="grid-main-list">
                                    { allProducts?.map((el, index) => (
                                          
                                                <ProductCard el={el} index={index}
                                                />
                                            
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <FilterMainList/>
                            </div>
                        </section>
                    </>)
                }

                {
                    (productsShown.length < 0 && !serverError) &&
                    (<section className="main-list__sections-nothing-found">
                        <p className="main-list__nothing-found">Sorry, nothing found</p>
                        <div className="main-list__descriptions">
                            <Box className="search__catalog-button-wrapper">
                                <Link
                                    to="/products"
                                    className="search__catalog-button"
                                    onClick={ handleSearchAll }
                                >
                                    Show all products
                                </Link>
                            </Box>
                        </div>
                    </section>)
                }
            </Container>
        </main>
    );
}
export default Products;
