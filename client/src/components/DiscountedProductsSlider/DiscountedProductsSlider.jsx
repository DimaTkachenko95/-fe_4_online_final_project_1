import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import { selectorDiscountedProducts } from "../../selectors";
import { actionFetchDiscountedProducts } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../ProductCard";
import "./DiscountedProductsSlider.scss"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const DiscountedProductsSlider = () => {
  const allDiscountedProducts = useSelector(selectorDiscountedProducts)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionFetchDiscountedProducts())
  }, [])

  const NextArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <NavigateNextIcon style={{color: 'black'}}/>
    </div>
  );
}

const PrevArrow = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <NavigateBeforeIcon style={{color: 'black'}}/>
    </div>
  );
}

  const settings = {
      className: "discounted-products__slider",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    };
return(
<>
<Container maxWidth="lg" className="discounted-products">
<div className="discounted-products__title"><span className="discounted-products__title-colored">DISCOUNTED</span> PRODUCTS</div>
  <Container className="discounted-products__slider-container" maxWidth="lg">
     {!!allDiscountedProducts.length &&
      (
        <Slider {...settings}>
          {allDiscountedProducts?.map((el, index) => {
          return (
            <div className="discounted-products__slider-item">
              <ProductCard className="discounted-products__slider-item-card" el={el} index={index}
              />
            </div>
          )
        })}
        </Slider>
      )
      }
  </Container>
  </Container>
</>
)
}

export default DiscountedProductsSlider;