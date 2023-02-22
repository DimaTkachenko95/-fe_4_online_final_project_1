import {Box, Container} from '@mui/material';
import {Link} from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return(
      <Box className="not-found">
          <Container maxWidth="xl" className="not-found__container">
              <Box className="not-found__wrapper">
                  <h4 className="not-found__error">Error 404</h4>
                  <h2 className="not-found__text">Page not found</h2>
                  <p className="not-found__desc">The address is entered incorrectly or such a page no longer exists on the site.</p>
                  <Link to="/" className="not-found__back-btn">Back to main page</Link>
              </Box>
          </Container>
      </Box>
  )
}

export default NotFound;
