import { ReactComponent as Favorites } from "./icons/favorite.svg"
import {ReactComponent as Scales } from "./icons/scales.svg"
import { ReactComponent as CheckMark } from "./icons/check_mark.svg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import cx from "classnames";
import { selectorBasket, selectorFavorites, selectorScales } from "../../selectors";
import { actionAddToBasket, toggleScalesProduct, toggleFavoriteProduct } from "../../reducers";
import { useSelector, useDispatch } from 'react-redux'
import "./ProductCard.scss"

const ProductCard = ({el, isForOrderedPage}) => {
    const {name, itemNo, _id, currentPrice, imageUrls, brand, previousPrice} = el;
    const basket = useSelector(selectorBasket);
    const favorites = useSelector(selectorFavorites);
    const scales = useSelector(selectorScales);
    const dispatch = useDispatch();

    const isProductInCart = basket.some(item => item.id === _id);
    const checkProduct = arrayProducts => arrayProducts.some(itemId => itemId === _id);

    const addToBasket = item => {
        if (!basket.find((elem) => elem.id === item._id)) {
            dispatch(actionAddToBasket(item));
        }
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
                <div>
                    <div className="list__item--img">
                        <Link to={`/products/${itemNo}`}>
                            <img className="list__item--img--laptop" src={imageUrls[0]} alt={name}/>
                        </Link>
                    </div>

                    { !isForOrderedPage && (<>
                        <span>
                            <Scales
                                onClick={() => toggleScales(el._id)}
                                className={cx("list__item--scales", {"list__item--scales--curent": checkProduct(scales)})}
                            />
                        </span>
                        <span>
                            <Favorites
                                onClick={() => toggleFavorites(el._id)}
                                className={cx("list__item--favorite", {"list__item--favorite--curent": checkProduct(favorites)})}/>
                        </span>
                      </>)
                    }
                </div>

                <div>
                    <div>
                        <Link to={`/products/${itemNo}`}>
                            <p className="list__item--name">{name}</p>
                        </Link>
                        <p className="list__item--brand">{brand}</p>
                    </div>

                    <div className="list__item--price">
                        <span className={cx("list__item--price--curent", {"list__item--price--curent-new": previousPrice})}>
                            {currentPrice.toLocaleString()} $
                        </span>
                        {
                            previousPrice &&
                            <span className="list__item--price--previous">{previousPrice.toLocaleString()} $</span>
                        }
                    </div>

                  { !isForOrderedPage && <div>
                    {isProductInCart ?
                        <Link to="/basket">
                          <button onClick={() => addToBasket(el)} className="list__item--inbasket "><CheckMark/>
                            <span className="list__item--buy--text">In basket</span>
                          </button>
                        </Link>
                        :
                        <button onClick={() => addToBasket(el)} className="list__item--buy"><ShoppingCartOutlinedIcon/>
                          <span className="list__item--buy--text">Buy</span>
                        </button>
                    }
                  </div>}

                </div>
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
  isForOrderedPage: false,
}

export default ProductCard
