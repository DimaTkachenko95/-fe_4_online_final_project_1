import { IconButton, InputBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { actionSearchProducts } from "../../reducers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {actionFetchSearchProducts} from "../../reducers/app.reducer";

import axios from 'axios';

const InputSearch = ({style = "header__input"}) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch(actionFetchSearchProducts(inputValue));
        setInputValue('');
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