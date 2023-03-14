import './DiscountedProductsSlider.scss';
import ProductsSlider from '../ProductsSlider';
import { Container } from "@mui/material";
import { selectorDiscountedProducts } from "../../selectors";
import { actionFetchDiscountedProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const DiscountedProductsSlider = () => {
  const discountedProducts = useSelector(selectorDiscountedProducts)
  const dispatch = useDispatch()
  console.log(discountedProducts);
  
  useEffect(() => {
    dispatch(actionFetchDiscountedProducts())
  }, [])
  return(
  <>
      {!!discountedProducts.length &&
      (
      <Container maxWidth="lg" className="discounted-products">
        <h2 className="discounted-products__title"><span className="discounted-products__title-colored">DISCOUNTED</span> PRODUCTS</h2>
      <ProductsSlider products={discountedProducts}/>
            </Container>
      )
      }
    </>
  )
};

export default DiscountedProductsSlider;