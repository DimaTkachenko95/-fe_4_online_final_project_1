import {Box} from "@mui/material";
import {ReactComponent as HeroDotSvg} from "./images/heroDot.svg";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import './Hero.scss';

function Hero() {
    return(
        <>
            <Box className="hero__wrapper">

            </Box>
            <Box className="hero__advantages-wrapper">
                <Box className="advantage">
                    <Box className="advantage__icon-wrapper"><ListAltOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon"/></Box>
                    <Box className="advantage__text"><p>The largest <br/> selection of equipment</p></Box>
                </Box>
                <Box className="advantage">
                    <Box className="advantage__icon-wrapper"><AccessTimeOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon"/></Box>
                    <Box className="advantage__text"><p>Quick <br/> checkout</p></Box>
                </Box>
                <Box className="advantage">
                    <Box className="advantage__icon-wrapper"><LocationOnOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon"/></Box>
                    <Box className="advantage__text"><p>Can be ordered from <br/> anywhere in the world</p></Box>
                </Box>
                <Box className="advantage">
                    <Box className="advantage__icon-wrapper"><CurrencyBitcoinOutlinedIcon sx={{ fontSize: 46 }} className="advantage__icon"/></Box>
                    <Box className="advantage__text"><p>Accepts any <br/> cryptocurrency payments</p></Box>
                </Box>
            </Box>
        </>
    )
}

export default Hero;
