import { Link } from "react-router-dom";
import Item from '@mui/material/Grid';
import Grid from "@mui/material/Grid";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ReactComponent as Favorites } from "./icons/favorite.svg"
import { ReactComponent as Scales } from "./icons/scales.svg"
import { width } from "@mui/system";
import { selectorAllProducts} from "../../selectors";
import { actionFetchAllProducts, actionAddToBasket } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'


const Items = () => {
  const allProducts = useSelector(selectorAllProducts)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actionFetchAllProducts())
  }, [])


  const addToBasket = (item) =>{
    dispatch(actionAddToBasket(item))
  }

  
  

  const item = allProducts?.map(({ name, _id, currentPrice, imageUrls, brand, previousPrice }, index) => (
    <Grid className="grid-main-list" item xs="12" sm="6" md="4">
      <div className="list" id={_id} key={_id}>
        <div className="list__item">
          <div className="list__item--img">
          <Link to={`/products/${_id}`}>
            <img className="list__item--img--laptop" src={imageUrls[0]} alt="photo" />
          </Link>
          </div>
          <span className="list__item--scales" >
            <Scales />
          </span>
          <span>
            <Favorites className="list__item--favorite" />
          </span>

          <div>
           <Link to={`/products/${_id}`}> 
            <p className="list__item--name">{name}</p>
           </Link> 
            <p className="list__item--producer">{brand}</p>
          </div>
          <div className="list__item--price">
          <p className="list__item--price--curent">{currentPrice.toLocaleString()}$</p>
          { previousPrice && <p className="list__item--price--previous">{previousPrice.toLocaleString()}$</p>}
          </div>
          <button onClick={()=>addToBasket(allProducts[index])} className="list__item--buy"><ShoppingCartOutlinedIcon/><span className="list__item--buy--text">Buy</span></button>
        </div>
      </div>
    </Grid>
  ))

  return (
    <>
      {item}
    </>
  )
}

export default Items;
