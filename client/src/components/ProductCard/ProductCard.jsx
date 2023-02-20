



const ProductCard = ({ name, _id, currentPrice, imageUrls, brand, previousPrice }, index) => {
    return (
        <div className="list" id={_id} key={_id}>
            <div className="list__item">
                <div className="list__item--img">
                    <Link to={`/products/${_id}`}>
                        <img className="list__item--img--laptop" src={imageUrls[0]} alt="photo" />
                    </Link>
                </div>
                <span >
                    <Scales onClick={() => addToScales(allProducts[index])} className={cx("list__item--scales", { "list__item--scales--curent": scalesId.includes(_id) })} />
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
                {basketId.includes(_id) ?
                    <Link to="/basket"><button onClick={() => addToBasket(allProducts[index])} className="list__item--inbasket "><CheckMark /><span className="list__item--buy--text">In basket</span></button></Link>
                    :
                    <button onClick={() => addToBasket(allProducts[index])} className="list__item--buy"><ShoppingCartOutlinedIcon /><span className="list__item--buy--text">Buy</span></button>
                }
            </div>
        </div>
    )
}
