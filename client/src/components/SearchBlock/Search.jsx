import {Box, InputBase, IconButton, Container, createTheme, ThemeProvider} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";
import './Search.scss'
import {actionSearchProducts} from "../../reducers/app.reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectorAllProducts} from "../../selectors";
const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const allProducts = useSelector(selectorAllProducts);
    const navigate = useNavigate();
    const dispatch = useDispatch();


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

    return(
        <Box className="search">
            <Container className="search__container">
                <Box className="search__wrapper">
                    <Box className="search__title">
                        <h3 className="search__title-text">
                            Are you looking for something specific?
                        </h3>
                    </Box>
                    <Box className="search__desc">
                        <p className="search__desc-text">
                            Welcome to BestLaptops24, where we offer an extensive range of laptops to cater to all your computing needs. Our store is designed to provide a comfortable and convenient shopping experience, with knowledgeable staff available to assist you in finding the perfect laptop to suit your requirements.After placing an order, you can pick it up from the pickup point or arrange delivery to any location in the world.
                        </p>
                    </Box>
                    <Box className="search__actions">
                        <Box className="search__catalog-button-wrapper">
                            <Link to="/products" className="search__catalog-button">Show all products</Link>
                        </Box>
                        <Box className="search__input-wrapper">
                            <Box className="search__input-wrapper--helper">
                                <InputBase
                                    className="search__input"
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
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Search;
