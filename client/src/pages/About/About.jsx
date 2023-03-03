import {Box, Container} from '@mui/material';
import './About.scss';

const About = () => {
    return(
        <Box className="about">
            <Box className="hero__wrapper"/>
            <Container maxWidth="xl" className="about__container">
                <Box className="about__wrapper">
                    <h1 className="about-title">Welcome to our web store of laptops! We're a team of passionate technology enthusiasts who love nothing more than helping our customers find the perfect laptop for their needs.
                        <br/>
                        <br/>
                        Our store was founded on the belief that everyone should have access to high-quality laptops at affordable prices. We've worked hard to create a diverse selection of laptops from top brands, so whether you're looking for a powerful gaming laptop or a lightweight notebook for work or school, we've got you covered.
                        <br/>
                        <br/>
                        At our store, we pride ourselves on providing exceptional customer service. We understand that buying a laptop can be a daunting process, which is why we're here to help every step of the way. Whether you need help choosing the right laptop, setting it up, or troubleshooting any issues, our team of experts is always available to assist you.
                        <br/>
                        <br/>
                        We're also committed to ensuring that our customers have a seamless shopping experience. That's why we offer fast and reliable shipping, easy returns, and secure payment options.
                        <br/>
                        <br/>
                        Thank you for choosing our web store of laptops. We look forward to helping you find your perfect laptop!</h1>
                </Box>
            </Container>
        </Box>
    )
}

export default About;