import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import './Hero.scss';



function Hero() {
  return (
    <>
          <Box className="hero__wrapper" />
          <Box className="hero__advantages-wrapper">
            <Box className="advantage">
              <Box className="advantage__icon-wrapper">
                <ListAltOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon" />
              </Box>
              <Box className="advantage__text">
                <p>
                  The largest selection of equipment
                </p>
              </Box>
            </Box>
            <Box className="advantage">
              <Box className="advantage__icon-wrapper">
                <AccessTimeOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon" />
              </Box>
              <Box className="advantage__text">
                <p>
                  Quick checkout
                </p>
              </Box>
            </Box>
            <Box className="advantage">
              <Box className="advantage__icon-wrapper">
                <LocationOnOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon" />
              </Box>
              <Box className="advantage__text">
                <p>
                  Can be ordered from anywhere in the world
                </p>
              </Box>
            </Box>
            <Box className="advantage">
              <Box className="advantage__icon-wrapper">
                <CurrencyBitcoinOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon" />
              </Box>
              <Box className="advantage__text">
                <p>
                  Accepts any cryptocurrency payments
                </p>
              </Box>
            </Box>
          </Box>
    </>
  );
}

export default Hero;
