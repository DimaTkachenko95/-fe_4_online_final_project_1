import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './SliderItems.module.scss';
import { selectorAllProducts } from "../../selectors";
import { actionFetchAllProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard'



const Items = () => {
  const allProducts = useSelector(selectorAllProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchAllProducts())
  }, [])

  console.log(allProducts)

  const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

  return (
    <>
      <Carousel 
        className={styles.productCarousel}
        infinite={true} 
        responsive={responsive}
        >
        {allProducts.length && allProducts?.map((el, index) => {
          return (
            <Grid key={index} className="grid-main-list" item xs="12" sm="6" md="4">
              <ProductCard el={el} index={index}
              />
            </Grid>
          )
        })}
      </Carousel>
    </>
  )
}

export default Items;