import FilterMainList from "./components/FilterMainList";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { selectorAllProducts, selectorSearchProducts  } from "../../selectors";
import { actionFetchAllProducts, actionSearchProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../../components/ProductCard";

import "./Products.scss";

const Products = () => {
    const allProducts = useSelector(selectorAllProducts)
    const searchProducts = useSelector(selectorSearchProducts);
    const dispatch = useDispatch()
    console.log(searchProducts, "aaaa")

    /* useEffect(() => {
        dispatch(actionFetchAllProducts())
    }, [])  */

    useEffect(() => {
        dispatch(actionFetchAllProducts());
        return(() => {
          dispatch(actionSearchProducts(allProducts));
        })
      }, [])

    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                <div>
                    <h5 className="count-found-product">Products <span className="count-found-product__span">found</span></h5>
                </div>
                <section className="main-list__sections">
                    <div>
                        <Grid  container spacing={4}  >
                            { (searchProducts && allProducts.length ? searchProducts : allProducts).map((el, index) => {
                                return (
                                    <Grid className="grid-main-list" item xs="12"  sm="12" md="5" lg="4">
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
