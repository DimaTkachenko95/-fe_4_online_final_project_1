import {Box, InputBase, Container} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Header.scss';
import {useState} from "react";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    return (
        <>
            <header className="header">


                <Box className="header__wrapper">
                    <Box className="header__logo-wrapper">
                        <div className="header__logo"></div>
                    </Box>

                    <nav className={isMenuOpen ? "header__menu active" : "header__menu"}>
                        <Box className="menu-list">
                            <a href="#" className="menu-list__item">Catalog</a>
                            <a href="#" className="menu-list__item">About</a>
                            <a href="#" className="menu-list__item">Rules</a>
                            <a href="#" className="menu-list__item">News</a>
                            <a href="#" className="menu-list__item">Contacts</a>
                        </Box>
                    </nav>

                    <Box className="header__items-actions">
                        <Box className="action">
                            <div className="count">
                                <span>5</span>
                            </div>
                            <a href="#" className="action__icon icon-favorite"><StarBorderIcon/></a>
                        </Box>
                        <Box className="action">
                            <div className="count">
                                <span>7</span>
                            </div>
                            <a href="#" className="action__icon icon-compare"><LeaderboardOutlinedIcon/></a>
                        </Box>
                        <Box className="action ">
                            <div className="count count-cart">
                                <span>2</span>
                            </div>
                            <a href="#" className="action__icon icon-cart"><ShoppingCartOutlinedIcon/></a>
                        </Box>
                    </Box>

                    <Box className="header__user-actions">
                        <Box className="action">
                            <a href="#" className="action__icon icon-search" onClick={() => setIsSearchOpen(!isSearchOpen)}><SearchOutlinedIcon/></a>
                        </Box>
                        <Box className="action">
                            {<a href="#" className="action__icon icon-user"><Person2OutlinedIcon/></a>}
                        </Box>
                    </Box>
                    <Box className="burger-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>{
                        isMenuOpen ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
                    </Box>

                </Box>
                {isSearchOpen && <Box className="header__input-wrapper">
                    <InputBase
                        className="input"
                        placeholder="Search"
                    />
                    <button type="submit" className="search-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>Enter</button>
                </Box>}
            </header>

        </>
    )
}

export default Header;
