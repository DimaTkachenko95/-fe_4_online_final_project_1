import FilterMainList from "./components/FilterMainList";
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { selectorAllProducts, selectorIsSearch, selectorSearchProducts } from "../../selectors";
import { actionChangeSearchFlag, actionFetchAllProducts, actionSearchProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";

import "./Products.scss";

const Products = () => {
    const allProducts = useSelector(selectorAllProducts);
    const searchProducts = useSelector(selectorSearchProducts);
    const isSearch = useSelector(selectorIsSearch);
    const dispatch = useDispatch();

    const productsShown = isSearch ? searchProducts : allProducts;

    useEffect(() => {
        dispatch(actionFetchAllProducts());
        return(() => {
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
                    (productsShown.length > 0) ?
                        (<>
                            <div>
                                <h5 className="count-found-product">Products <span className="count-found-product__span">found</span></h5>
                            </div>
                            <section className="main-list__sections">
                                <div>
                                    <Grid container spacing={4}>
                                        { productsShown.map((el, index) => (
                                                <Grid className="grid-main-list" item xs="12" sm="6" md="4" key={el._id}>
                                                    <ProductCard el={el} index={index} />
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </div>
                                <div>
                                    <FilterMainList />
                                </div>
                            </section>
                        </>)
                        :
                        (<section className="main-list__sections-nothing-found">
                            <p className="main-list__nothing-found">Sorry, nothing found</p>
                            <div className="main-list__nothing-found">
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
        </main >
    );
}
export default Products;
