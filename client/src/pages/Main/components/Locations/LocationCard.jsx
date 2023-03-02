import {Box} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import {Link} from 'react-router-dom';
const LocationCard = ({street}) => {
    return(
        <Box className="locations__content-wrapper">
            <Box className="locations__card">
                <Box className="locations__card-title-wrapper">
                    <LaptopMacIcon className="locations__card-icon"/>
                    <h5 className="locations__card-title">BestLaptop24</h5>
                </Box>
                <Box className="locations__card-address">{street}</Box>
                <Link to="/products" className="locations__card-link">http://best-laptops24.ua</Link>
            </Box>
        </Box>
    )
}

export default LocationCard;