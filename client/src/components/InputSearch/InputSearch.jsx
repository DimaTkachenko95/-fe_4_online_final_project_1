import { IconButton, InputBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { actionSearchProducts } from "../../reducers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorAllProducts } from "../../selectors";

const InputSearch = ({style = "header__input"}) => {
    const [inputValue, setInputValue] = useState('');
    const allProducts = useSelector(selectorAllProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        const searchProducts = allProducts.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()));
        dispatch(actionSearchProducts(searchProducts));
        setInputValue('')
    }

    const handleEnterPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
            navigate(`/products`);
        }
    }

    return (
        <InputBase
            className={style}
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            onKeyPress={handleEnterPress}
            endAdornment={
                <Link to="/products">
                    <IconButton onClick={handleSearch}>
                        <SearchIcon/>
                    </IconButton>
                </Link>
            }
        />
    )
}

export default InputSearch;
