import FilterMainList from "./components/FilterMainList";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    selectorAllProducts,
    selectorIsSearch,
    selectorSearchProducts,
    selectorServerErrorProducts
} from "../../selectors";
import { actionFetchAllProducts, actionSearchProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";
import BreadCrumbs from "../../components/BreadCrumbs";
import ServerError from "../../components/Notifications/ServerError";
import NothingFound from "./components/NothingFound";

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

    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                { serverError && <ServerError /> }
                { (productsShown.length === 0 && !serverError) && <NothingFound /> }

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
                                <Grid container spacing={ 4 }>
                                    { productsShown.map((el, index) => (
                                        <Grid className="grid-main-list" item xs="12" sm="6" md="4" key={ el._id }>
                                            <ProductCard el={ el } index={ index }/>
                                        </Grid>))
                                    }
                                </Grid>
                            </div>
                            <div>
                                <FilterMainList/>
                            </div>
                        </section>
                    </>)
                }
            </Container>
        </main>
    );
}
export default Products;
