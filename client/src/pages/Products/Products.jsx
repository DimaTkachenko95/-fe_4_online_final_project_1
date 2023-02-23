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

    useEffect(() => {
        dispatch(actionFetchAllProducts())
    }, [])   
   

 /*    useEffect(() => {
        dispatch(actionFetchAllProducts());
        return(() => {
           dispatch(actionSearchProducts(allProducts)); 
        })
      }, []) */
  

    return (
        <main>
            <Container className="main-list" maxWidth="lg">
                {
                    allProducts.length > 0 &&
                    <>
                        <div>
                            <h5 className="count-found-product">Products <span className="count-found-product__span">found</span></h5>
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
                                <FilterMainList />
                            </div>
                        </section>
                    </>
                }
            </Container>
        </main >
    );
}
export default Products;
