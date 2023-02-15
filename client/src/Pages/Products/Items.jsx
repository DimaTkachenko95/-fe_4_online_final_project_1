import { Link } from "react-router-dom";
import Item from '@mui/material/Grid';
import Grid from "@mui/material/Grid";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ReactComponent as Favorites } from "./icons/favorite.svg"
import { ReactComponent as Scales } from "./icons/scales.svg"
import { width } from "@mui/system";
import { selectorAllProducts, selectorBasket, selectorFavorites, selectorScales } from "../../selectors";
import { actionFetchAllProducts, actionAddToBasket, actionAddToFavorites, actionDeleteFromFavorites, actionAddToScales, actionDeleteFromScales } from "../../reducers";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import cx from "classnames";


const Items = () => {
  const allProducts = useSelector(selectorAllProducts)
  const basket = useSelector(selectorBasket)
  const favorites = useSelector(selectorFavorites)
  const scales = useSelector(selectorScales)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actionFetchAllProducts())
  }, [])


  const addToBasket = (item) => {
    let flag = true;
    basket.forEach(el => {
      if (el._id == item._id) {
        flag = false
      }

    })
    flag && dispatch(actionAddToBasket(item))
  }

  const addToFavorites = (item) => {
    let flag = true;
    favorites.forEach(el => {
      if (el._id == item._id) {
        flag = false
        const localStoreFavorites = JSON.parse(localStorage.getItem('favorites'))
        let res = localStoreFavorites.filter((el) => el._id !== item._id)
        localStorage.setItem("favorites", JSON.stringify(res))

      }
    })
    flag ? dispatch(actionAddToFavorites(item)) : dispatch(actionDeleteFromFavorites(JSON.parse(localStorage.getItem("favorites"))))
  }


  const addToScales = (item) => {
    let flag = true
    scales.forEach(el => {
      if (el._id == item._id) {
        flag = false
        const localStoreScales = JSON.parse(localStorage.getItem('scales'))
        let res = localStoreScales.filter((el) => el._id !== item._id)
        localStorage.setItem("scales", JSON.stringify(res))
      }
    })
    flag ? dispatch(actionAddToScales(item)) : dispatch(actionDeleteFromScales(JSON.parse(localStorage.getItem("scales"))))
  }




  const favoriteId = favorites?.map(({ _id }) => {
    return _id
  })

  const scalesId = scales?.map(({ _id }) => {
    return _id
  })

  const basketId = basket?.map(({ _id }) => {
    return _id
  })




  const item = allProducts?.map(({ name, _id, currentPrice, imageUrls, brand, previousPrice }, index) => (
    <Grid className="grid-main-list" item xs="12" sm="6" md="4">
      <div className="list" id={_id} key={_id}>
        <div className="list__item">
          <div className="list__item--img">
            <Link to={`/products/${_id}`}>
              <img className="list__item--img--laptop" src={imageUrls[0]} alt="photo" />
            </Link>
          </div>
          <span >
            <Scales onClick={()=> addToScales(allProducts[index])} className={cx("list__item--scales", {"list__item--scales--curent": scalesId.includes(_id)})}/>
          </span>
          <span>
            <Favorites onClick={() => addToFavorites(allProducts[index])} className={cx("list__item--favorite", { "list__item--favorite--curent": favoriteId.includes(_id) })} />
          </span>

          <div>
            <Link to={`/products/${_id}`}>
              <p className="list__item--name">{name}</p>
            </Link>
            <p className="list__item--producer">{brand}</p>
          </div>
          <div className="list__item--price">
            <p className="list__item--price--curent">{currentPrice.toLocaleString()}$</p>
            {previousPrice && <p className="list__item--price--previous">{previousPrice.toLocaleString()}$</p>}
          </div>
          {basketId.includes(_id)?
           <button onClick={() => addToBasket(allProducts[index])} className="list__item--buy"><span className="list__item--buy--text">In basket</span></button>
            :
          <button onClick={() => addToBasket(allProducts[index])} className="list__item--buy"><ShoppingCartOutlinedIcon /><span className="list__item--buy--text">Buy</span></button>
          }
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
