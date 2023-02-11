import { Box, InputBase } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="header">
      <Box className="header__wrapper">
        <Box className="header__logo-wrapper">
          <div className="header__logo" />
        </Box>

        <nav className={isMenuOpen ? 'header__menu active' : 'header__menu'}>
          <Box className="menu-list">
            <Link to="/catalog" className="menu-list__item">
              Catalog
            </Link>
            <Link to="/about" className="menu-list__item">
              About
            </Link>
            <Link to="/rules" className="menu-list__item">
              Rules
            </Link>
            <Link to="/news" className="menu-list__item">
              News
            </Link>
            <Link to="/contacts" className="menu-list__item">
              Contacts
            </Link>
          </Box>
        </nav>

        <Box className="header__items-actions">
          <Box className="action">
            <div className="count">
              <span>5</span>
            </div>
            <Link to="/favorites" className="action__icon icon-favorite">
              <StarBorderIcon />
            </Link>
          </Box>
          <Box className="action">
            <div className="count">
              <span>7</span>
            </div>
            <Link to="/compare" className="action__icon icon-compare">
              <LeaderboardOutlinedIcon />
            </Link>
          </Box>
          <Box className="action ">
            <div className="count count-cart">
              <span>2</span>
            </div>
            <Link to="/bascet" className="action__icon icon-cart">
              <ShoppingCartOutlinedIcon />
            </Link>
          </Box>
        </Box>

        <Box className="header__user-actions">
          <Box className="action">
            <a
              href="#"
              className="action__icon icon-search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <SearchOutlinedIcon />
            </a>
          </Box>
          <Box className="action">
            <a href="#" className="action__icon icon-user">
              <Person2OutlinedIcon />
            </a>
          </Box>
        </Box>
        <Box className="burger-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </Box>
      </Box>
      {isSearchOpen && (
        <Box className="header__input-wrapper">
          <InputBase className="input" placeholder="Search" />
          <button
            type="submit"
            className="search-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            Enter
          </button>
        </Box>
      )}
    </header>
  );
};

export default Header;
