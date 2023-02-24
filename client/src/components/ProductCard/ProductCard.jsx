import { ReactComponent as Favorites } from "./icons/favorite.svg"
import { ReactComponent as Scales } from "./icons/scales.svg"
import { ReactComponent as CheckMark } from "./icons/check_mark.svg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import cx from "classnames";
import { selectorBasket, selectorFavorites, selectorScales } from "../../selectors";
import { actionAddToBasket } from "../../reducers";
import { toggleFavoriteProduct } from "../../reducers/favorites.reducer";
import { toggleScalesProduct } from "../../reducers/scales.reducer";
import { useSelector, useDispatch } from 'react-redux'
import {actionFetchOneProduct} from "../../reducers";
import "./ProductCard.scss"

const ProductCard = ({ el }) => {
  const { name, itemNo, _id, currentPrice, imageUrls, brand, previousPrice } = el;
  const basket = useSelector(selectorBasket);
  const favorites = useSelector(selectorFavorites);
  const scales = useSelector(selectorScales);
  const dispatch = useDispatch();

  const isProductInCart = basket.some(item => item._id === _id);
  const checkProduct = arrayProducts => arrayProducts.some(itemId => itemId === _id);

  const addToBasket = item => {
    dispatch(actionAddToBasket(item));
  }

  const toggleFavorites = id => {
    dispatch(toggleFavoriteProduct(id));
  }

  const toggleScales = id => {
    dispatch(toggleScalesProduct(id));
  }

  return (
    <div className="list" id={_id} key={_id}>
      <div className="list__item">
        <div className="list__item--img">
          <Link to={`/products/${itemNo}`} onClick={() => dispatch(actionFetchOneProduct(itemNo))}>
            <img className="list__item--img--laptop" src={imageUrls[0]} alt={name} />
          </Link>
        </div>
        <span >
          <Scales onClick={() => toggleScales(el._id)}
                  className={cx("list__item--scales", { "list__item--scales--curent": checkProduct(scales) })} />
        </span>
        <span>
          <Favorites onClick={() => toggleFavorites(el._id)}
                     className={cx("list__item--favorite", { "list__item--favorite--curent": checkProduct(favorites) })} />
        </span>
        <div>
          <Link to={`/products/${itemNo}`} onClick={() => dispatch(actionFetchOneProduct(itemNo))}>
            <p className="list__item--name">{name}</p>
          </Link>
          <p className="list__item--producer">{brand}</p>
        </div>
        <div className="list__item--price">
          <p className="list__item--price--curent">{currentPrice.toLocaleString()} $</p>
          {previousPrice && <p className="list__item--price--previous">{previousPrice.toLocaleString()} $</p>}
        </div>
        {isProductInCart ?
          <Link to="/basket">
            <button onClick={() => addToBasket(el)} className="list__item--inbasket "><CheckMark />
              <span className="list__item--buy--text">In basket</span>
            </button></Link>
          :
          <button onClick={() => addToBasket(el)} className="list__item--buy"><ShoppingCartOutlinedIcon />
            <span className="list__item--buy--text">Buy</span>
          </button>
        }
      </div>
    </div>
  )
}

export default ProductCard
