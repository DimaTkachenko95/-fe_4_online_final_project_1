import './Main.scss';
import Hero from "./components/Hero";
import SearchBlock from "./components/SearchBlock";
import ProductsSlider from '../../components/ProductsSlider';
import { selectorDiscountedProducts } from "../../selectors";
import { actionFetchDiscountedProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const discountedProducts = useSelector(selectorDiscountedProducts)
  const dispatch = useDispatch()
  console.log(discountedProducts);
  
  useEffect(() => {
    dispatch(actionFetchDiscountedProducts())
  }, [])
  return(
  <main>
      <Hero />    
      <ProductsSlider products={discountedProducts}/>
      <SearchBlock/>

  </main>
  )
};

export default Main;
