import FilterMainList from "../../components/FilterMainList";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { selectorAllProducts } from "../../selectors";
import { actionFetchAllProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";

import "./Products.scss";



const Products = () => {
    const allProducts = useSelector(selectorAllProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionFetchAllProducts())
    }, [])

    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                <div>
                    <h5 className="count-found-product">Products <span className="count-found-product__span">found</span></h5>
                </div>
                <section className="main-list__sections">
                    <div>
                        <Grid container spacing={4}>
                            {allProducts && allProducts?.map((el, index) => {
                                return (
                                    <Grid className="grid-main-list" item xs="12" sm="6" md="4">
                                        <ProductCard el={el} index={index}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                    <div>
                        <FilterMainList />
                    </div>
                </section>
            </Container>
        </main >
    );
}
export default Products;