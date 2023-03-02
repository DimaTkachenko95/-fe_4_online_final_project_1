import {Box, Container} from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import './Locations.scss';
import LocationCard from "./LocationCard";
const Locations = () => {
  return(
      <>
          <section className="locations">
              <Container maxWidth="lg" className="locations__container">
                  <Box className="locations__wrapper">
                      <Box className="locations__title-wrapper">
                          <h3 className="locations__title">BESTLAPTOPS LOCATIONS IN KYIV</h3>
                      </Box>
                      <Box className="locations__card-wrapper">
                          <LocationCard street="Shota Rustaveli St"/>
                          <LocationCard street="Shota Rustaveli St"/>
                          <LocationCard street="Shota Rustaveli St"/>
                          <LocationCard street="Shota Rustaveli St"/>
                      </Box>
                  </Box>
              </Container>
          </section>
      </>
  )
}

export default Locations;