import { IconButton, InputBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { selectorSearchInputValue } from "../../selectors";
import {actionSearchInputValue, actionFetchSearchProducts} from "../../reducers/products.reducer";

const InputSearch = ({style = "header__input"}) => {
     const searchInputValue = useSelector(selectorSearchInputValue)
     const dispatch = useDispatch();
     const navigate = useNavigate(); 

    const handleSearch = () => {
        if(searchInputValue.length > 0){
            dispatch(actionFetchSearchProducts(searchInputValue));
            dispatch(actionSearchInputValue(''));
        }
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
             value={searchInputValue} 
             onChange={(e) => {
                dispatch(actionSearchInputValue(e.target.value));
            }} 
            onKeyPress={handleEnterPress}
            endAdornment={
                <Link to="/products">
                    <IconButton onClick={()=>handleSearch()}>
                        <SearchIcon/>
                    </IconButton>
                </Link>
            }
        />
    )
}

export default InputSearch;
