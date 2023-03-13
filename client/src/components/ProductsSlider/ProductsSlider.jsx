import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import ProductCard from "../ProductCard";
import "./ProductsSlider.scss"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ProductsSlider = ({ products }) => {
  
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
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };
  return(
    <>
      {!!products.length &&
      (
      <Container maxWidth="lg" className="discounted-products">
        <h2 className="discounted-products__title"><span className="discounted-products__title-colored">DISCOUNTED</span> PRODUCTS</h2>
        <Container className="discounted-products__slider-container" maxWidth="lg">
          <Slider {...settings}>
          {products?.map((el, index) => {
          return (
            <div className="discounted-products__slider-item">
              <ProductCard className="discounted-products__slider-item-card" el={el} index={index} key={index}
              />
            </div>
          )
          })}
          </Slider>
        </Container>
      </Container>
      )
      }
    </>
  )
}

export default ProductsSlider;