import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { selectorDiscountedProducts } from "../../selectors";
import { actionFetchDiscountedProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../ProductCard";
import "./Slider.scss"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Slider = () => {
  const allDiscountedProducts = useSelector(selectorDiscountedProducts)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionFetchDiscountedProducts())
  }, [])

  const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 850 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 850, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 345 },
    items: 1
  }
}

return(
<>
<Container maxWidth="lg" className="discounted-products">
<div className="discounted-products__title"><span className="discounted-products__title-colored">DISCOUNTED</span> PRODUCTS</div>
  <Container maxWidth="lg">
     {!!allDiscountedProducts.length &&
      (<Carousel 
        className="discounted-products__carousel"
        infinite={true} 
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {allDiscountedProducts?.map((el, index) => {
          return (
            <Grid key={index} className="grid-main-list" item spacing={2}>
              <ProductCard el={el} index={index}
              />
            </Grid>
          )
        })}
      </Carousel>)
      }
  </Container>
  </Container>
</>
)
}

export default Slider;