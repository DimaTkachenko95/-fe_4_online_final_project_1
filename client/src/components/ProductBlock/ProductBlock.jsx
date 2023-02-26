import {Box, Container} from '@mui/material';
import {ReactComponent as Scales} from "./icons/scales.svg"
import {ReactComponent as Favorites} from "../ProductCard/icons/favorite.svg";
import './ProductBlock.scss';
import BreadCrumbs from "../BreadCrumbs";
import cx from "classnames";
import {toggleFavoriteProduct} from "../../reducers/favorites.reducer";
import {toggleScalesProduct} from "../../reducers/scales.reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    selectorBasket,
    selectorFavorites,
    selectorProduct,
    selectorScales,
} from "../../selectors";
import {actionAddToBasket} from "../../reducers";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import {ReactComponent as CheckMark} from "../ProductCard/icons/check_mark.svg";
import Comments from "./components/Comments";
import {useEffect, useState} from "react";

const ProductBlock = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 970);
    }, []);

    const product = useSelector(selectorProduct);
    const basket = useSelector(selectorBasket);
    const favorites = useSelector(selectorFavorites);
    const scales = useSelector(selectorScales);

    const dispatch = useDispatch();

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const toggleFavorites = id => {
        dispatch(toggleFavoriteProduct(id));
    }

    const toggleScales = id => {
        dispatch(toggleScalesProduct(id));
    }

    const addToBasket = item => {
        dispatch(actionAddToBasket(item));
    }

    const checkProduct = arrayProducts => arrayProducts.some(itemId => itemId === product._id);
    const isProductInCart = basket.some(item => item._id === product._id);


    return (
        <>

            {Object.keys(product).length > 0 && <Box className="product">
                <Container maxWidth="lg" className="product__container">
                    <BreadCrumbs linksArray={[{link: "/products", text: "Products"}, {
                        link: `/products/${product.itemNo}`,
                        text: `${product.name}`
                    }]}/>
                    <Box className={showAll && isMobile ? "product__wrapper--mobile" : "product__wrapper"}>
                        <Box className="product__title-wrapper">
                            <h3 className="product__title">{product.name}</h3>
                        </Box>
                        <Box className="product__image-wrapper">
                            <img
                                src={product.imageUrls[0]}
                                alt="laptop" className="product__image"/>
                            <Box className="product__action-wrapper">
                                 <span>
                                     <Scales onClick={() => toggleScales(product._id)}
                                             className={cx("list__item--scales", {"list__item--scales--curent": checkProduct(scales)})}/>
                                 </span>
                                <span>
                                    <Favorites onClick={() => toggleFavorites(product._id)}
                                               className={cx("list__item--favorite", {"list__item--favorite--curent": checkProduct(favorites)})}/>
                                </span>
                            </Box>
                        </Box>
                        <Box className="product__desc-wrapper">
                            <Box className="product__desc-title-wrapper">
                                <h5 className="product__desc-title">Product description</h5>
                            </Box>

                            <Box className="product__desc-text-wrapper">
                                <p className="product__desc-text">
                                    { !isMobile || showAll ? product.description : `${product.description.slice(0, 225)}...`}
                                </p>
                                {isMobile &&  (
                                    <button onClick={toggleShowAll} className="product__desc-button">
                                        {showAll ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </Box>
                        </Box>


                        <Box className="product__info-wrapper">
                            <Box className="product__info-title-wrapper">
                                <h5 className="product__info-title">Information</h5>
                            </Box>

                            <Box className="product__info-content-wrapper">
                                <Box className="product__info-content">
                                    <span className="product__property">Brand</span>
                                    <span className="product__value">{product.brand}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Processor</span>
                                    <span className="product__value">{product.processorType}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Screen size</span>
                                    <span className="product__value">{product.screenSize}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">GPU</span>
                                    <span className="product__value">{product.videoCard}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">OS</span>
                                    <span className="product__value">{product.operatingSystem || "Without OS"}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">RAM</span>
                                    <span className="product__value">{product.ramMemory}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">HDR</span>
                                    <span className="product__value">{product.hardDriveCapacity}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Color</span>
                                    <span className="product__value">{product.color}</span>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="product__button-wrapper">
                            <Box className="product__price-wrapper">
                                <span className="product__price-text">PRICE</span>
                                <Box className="product__item--price">
                                    <p className="product__item--price--curent">{product.currentPrice.toLocaleString()} $</p>
                                    {product.previousPrice &&
                                        <p className="product__item--price--previous">{product.previousPrice.toLocaleString()} $</p>}
                                </Box>
                            </Box>

                            {isProductInCart ?
                                <Link to="/basket">
                                    <button className="list__item--inbasket "><CheckMark/>
                                        <span className="list__item--buy--text">In basket</span>
                                    </button>
                                </Link>
                                :
                                <button onClick={() => addToBasket(product)} className="list__item--buy">
                                    <ShoppingCartOutlinedIcon/>
                                    <span className="list__item--buy--text">Buy</span>
                                </button>
                            }
                        </Box>
                    </Box>

                    <Comments/>
                </Container>
            </Box>}
        </>
    )
}

export default ProductBlock;
