import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {ReactComponent as ScaleSvg} from './icons/scales-of-justice-svgrepo-com.svg';
import './Header.scss';
import {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {selectorBasket, selectorFavorites, selectorScales} from "../../selectors";
import { useSelector, useDispatch} from 'react-redux'
import InputSearch from "../InputSearch";
import { actionChangeSearchFlag } from "../../reducers";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1800px', // Set your custom maxWidth value here
                },
            },
        },
    },
});

const Header = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const basket = useSelector(selectorBasket);
    const favorites = useSelector(selectorFavorites);
    const scales = useSelector(selectorScales);
    const countInBasket = basket.reduce((acc, {cartQuantity}) => acc + cartQuantity, 0)


    useEffect(() => {
        document.addEventListener("mousedown", handleBurgerMenu);
        return (() => {
            document.removeEventListener("mousedown", handleBurgerMenu);
        })
    },[])
    const burgerMenuRef = useRef();

    const handleBurgerMenu = (event) => {
        if (burgerMenuRef && !burgerMenuRef.current.contains(event.target) && isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        }
    }

    const handleSearchAll = () => {
        dispatch(actionChangeSearchFlag(false));
    }

    return (
        <>
            <header className="header">
                <ThemeProvider theme={theme}>
                    <Container maxWidth="xl">
                        <Box className="header__wrapper">
                            <Box className="header__logo-wrapper">
                                <Link to="/" className="logo">
                                    {window.innerWidth > 996 ? 'BestLaptops' : 'BL'}
                                    <span className="colored">24</span>
                                </Link>
                            </Box>

                            <nav className={isMenuOpen ? 'header__menu header__menu--active' : 'header__menu'} ref={burgerMenuRef}>
                                <Box className="menu-list">
                                    <NavLink
                                        to="/products"
                                        className="menu-list__item"
                                        activeClassName="menu-list__item active-item"
                                        onClick={ handleSearchAll }
                                    >
                                        Products
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className="menu-list__item"
                                        activeClassName="menu-list__item active-item"
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="/rules"
                                        className="menu-list__item"
                                        activeClassName="menu-list__item active-item"
                                    >
                                        Rules
                                    </NavLink>
                                    <NavLink
                                        to="/news"
                                        className="menu-list__item"
                                        activeClassName="menu-list__item active-item"
                                    >
                                        News
                                    </NavLink>
                                    <NavLink
                                        to="/contacts"
                                        className="menu-list__item"
                                        activeClassName="menu-list__item active-item"
                                    >
                                        Contacts
                                    </NavLink>
                                </Box>
                            </nav>

                            <Box className="header__input-wrapper">
                                <InputSearch style="header__input"/>
                            </Box>
                            <Box className="header__items-actions">
                                <Box className="action">
                                    <div className="count">
                                        <span>{favorites.length}</span>
                                    </div>
                                    <NavLink to="/favorites" className="action__icon icon-favorite">
                                        <StarBorderIcon/>
                                    </NavLink>
                                </Box>
                                <Box className="action">
                                    <div className="count">
                                        <span>{scales.length}</span>
                                    </div>
                                    <NavLink to="/compare" className="action__icon icon-compare">
                                        <ScaleSvg/>
                                    </NavLink>
                                </Box>
                                <Box className="action ">
                                    <div className="count count-cart">
                                        <span>{countInBasket}</span>
                                    </div>
                                    <NavLink to="/basket" className="action__icon icon-cart">
                                        <ShoppingCartOutlinedIcon/>
                                    </NavLink>
                                </Box>
                            </Box>

                            <Box className="header__user-actions">
                                <Box className="action">
                                    {
                                        <a href="#" className="action__icon icon-user">
                                            <Person2OutlinedIcon/>
                                        </a>
                                    }
                                </Box>
                            </Box>
                            <Box className="burger-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </header>
        </>
    );
};

export default Header;
