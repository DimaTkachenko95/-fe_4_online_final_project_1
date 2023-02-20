import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ReactComponent as Favorites } from "./img/favorit.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Items.module.scss';



const Items = () => {
    const popularProductsList = [
        {
          "id": 1,
          "name": "PowerShot SX620 HS",
          "price": 500,
          "img": "./img/orig(1).png",
          "producer": "Canon"
        },
        {
          "id": 2,
          "name": "PowerShot SX620 HS",
          "price": 676,
          "img": "./img/orig(2).png",
          "producer": "Sony"
        },
        {
          "id": 3,
          "name": "PowerShot SX620 HS",
          "price": 234,
          "img": "./img/orig(3).png",
          "producer": "Sony"
        },
        {
          "id": 4,
          "name": "PowerShot SX620 HS",
          "price": 898,
          "img": "./img/orig(4).png",
          "producer": "Sony"
        },
        {
          "id": 5,
          "name": "PowerShot SX620 HS",
          "price": 875,
          "img": "./img/orig(4).png",
          "producer": "Sony"
        },
        {
          "id": 6,
          "name": "PowerShot SX620 HS",
          "price": 898,
          "img": "./img/photo.png",
          "producer": "Sony"
        }
      ]

      const item = popularProductsList?.map(({ name, id, price, img, producer }) => (
        <Grid item xs="12" sm="6" md="4">
          <div className={styles.list} id={id} key={id}>
            <div className={styles.listItem}>
              <img className={styles.listItemImage} src={require(`${img}`)} alt={name} />
              <span className={styles.listItemRating} >
                <span className={styles.listItemRatingLine}></span>
              </span>
              <span>
                <Favorites className={styles.listItemFavourite} />
              </span>
              <div className={styles.listItemMainInfo}>
                <h5 className={styles.listItemName}>{name}</h5>
                <p className={styles.listItemProducer}>{producer}</p>
                <p className={styles.listItemPrice}>{price}$</p>
              
              </div>
              <div className={styles.listButtonContainer}>
              <Button 
                variant="outlined" 
                className={styles.listItemButtonMore}
                sx={{
                  color: '#000000',
                  height: '40px',
                  width: '135px',
                  fontSize: '14px',
                  lineHeight: '16px',
                  borderRadius: '25px',
                  border: '1px solid #EFEFEF',
                  backgroundColor: '#EEEEEE',
                  margin: '0 10px',
                  ':hover': {
                  border: '1px solid #60B021'
                  }
                }}
                >More
              </Button>
              <Button 
                variant="contained" 
                className={styles.listItemButtonToBasket} 
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  color: '#ffffff',
                  height: '40px',
                  width: '135px',
                  fontSize: '14px',
                  lineHeight: '16px',
                  borderRadius: '25px',
                  backgroundColor: '#60B021',
                  margin: '0 10px',
                  ':hover': {
                  bgcolor: '#60B021', 
                  color: 'white',
                  border: '1px solid #ffffff'
                  }
                }}
                > to basket</Button>
                </div>


            </div>
          </div>
        </Grid>
      ))

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
};

// const CustomRightArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType }
//   } = rest;
//   // onMove means if dragging or swiping in progress.
//   return <Button onClick={() => onClick()} sx={{
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#aqua'
//   }}/>;
// };


// const CustomRightArrow = () => {
//   return <Button sx={{
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#000000'
//   }} />;
// };


    return (
        <>
          <Carousel 
            className={styles.productCarousel}
            infinite={true} 
            responsive={responsive}
            renderButtonGroupOutside={true}
            // customRightArrow={<CustomRightArrow />}
            
            >
            
            {item}
          </Carousel>
        </>
    )
}

export default Items;