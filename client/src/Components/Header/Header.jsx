import {Box, InputBase, IconButton} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {ReactComponent as ScaleSvg} from './icons/scales-of-justice-svgrepo-com.svg';
import './Header.scss';
import {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { selectorBasket, selectorFavorites, selectorScales } from "../../selectors";
import { useSelector} from 'react-redux'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const basket = useSelector(selectorBasket)
    const favorites = useSelector(selectorFavorites)
    const scales = useSelector(selectorScales)

    useEffect(() => {
        document.addEventListener("mousedown", handleBurgerMenu);

        return (() => {
            document.removeEventListener("mousedown", handleBurgerMenu);
        })
    })
    const burgerMenuRef = useRef();

    const handleBurgerMenu = (event) => {
        if (burgerMenuRef && !burgerMenuRef.current.contains(event.target) && isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        }
    }


    const handleSearch = () => {
        console.log(`We ready to show you ${inputValue}`);
    };
    return (
        <>
            <header className="header">
                <Box className="header__wrapper">
                    <Box className="header__logo-wrapper">
                        <Link to="/" className="logo">
                            {window.innerWidth > 996 ? 'BestLaptops' : 'BL'}
                            <span className="colored">24</span>
                        </Link>
                    </Box>

                    <nav className={isMenuOpen ? 'header__menu active' : 'header__menu'} ref={burgerMenuRef}>
                        <Box className="menu-list">
                            <NavLink
                                to="/products"
                                className="menu-list__item"
                                activeClassName="menu-list__item active-item"
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
                        <InputBase
                            className="header__input"
                            placeholder="Search"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                            endAdornment={
                                <IconButton onClick={handleSearch}>
                                    <SearchIcon/>
                                </IconButton>
                            }
                        />
                    </Box>
                    <Box className="header__items-actions">
                        <Box className="action">
                            <div className="count">
                            <span>{favorites.length}</span>
                            </div>
                            <Link to="/favorites" className="action__icon icon-favorite">
                                <StarBorderIcon/>
                            </Link>
                        </Box>
                        <Box className="action">
                            <div className="count">
                            <span>{scales.length}</span>
                            </div>
                            <Link to="/compare" className="action__icon icon-compare">
                                <ScaleSvg/>
                            </Link>
                        </Box>
                        <Box className="action ">
                            <div className="count count-cart">
                            <span>{basket.length}</span>
                            </div>
                            <Link to="/basket" className="action__icon icon-cart">
                                <ShoppingCartOutlinedIcon/>
                            </Link>
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
            </header>
        </>
    );
};

export default Header;