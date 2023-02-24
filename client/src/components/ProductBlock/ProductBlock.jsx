import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import {ReactComponent as FavSvg} from "./icons/favorite.svg";
import {ReactComponent as CompareSvg} from "./icons/scales.svg";
import './ProductBlock.scss';

const ProductBlock = () => {
    const MOC = {
        "enabled": true,
        "imageUrls": [
            "https://res.cloudinary.com/ducrc4lke/image/upload/v1676811597/laptop-shop/1/Capture_bd2yjd.png",
            "https://res.cloudinary.com/ducrc4lke/image/upload/v1676811597/laptop-shop/1/Capture3_xzgn0y.png",
            "https://res.cloudinary.com/ducrc4lke/image/upload/v1676811597/laptop-shop/1/Capture4_covpct.png",
            "https://res.cloudinary.com/ducrc4lke/image/upload/v1676811596/laptop-shop/1/Captur7_r1pmxa.png"
        ],
        "quantity": 100,
        "_id": "63e63315c5fb5de735d2b4a9",
        "itemNo": "1",
        "name": "ASUS ROG G513RM-WS74",
        "description": "Focused firepower streamlines and elevates the core Windows 11 gaming experience in the ROG Strix G15. With a powerful Ryzen 7 processor and GeForce RTX 3060 graphics, everything from gaming to mutitasking is fast and fluid. Go full-throttle on eSports speed with a competition-grade display with immerse rich details on the WQHD 165Hz/3ms display. Adaptative-Sync makes gameplay ultrasmooth, while advanced thermal upgrades help you stay cool under pressure. No matter what you game, you can achieve your perfect play.",
        "category": "Gaming Laptops",
        "brand": "Asus",
        "processorBrand": "AMD",
        "processorType": "AMD Ryzen 7",
        "screenSize": "15.6\"",
        "videoCard": "NVIDIA GeForce RTX 3060",
        "operatingSystem": "Windows 11 Home",
        "ramMemory": "16 GB",
        "hardDriveCapacity": "1 TB",
        "color": "black",
        "currentPrice": 1375,
        "previousPrice": 1450,
        "date": "2023-02-23T10:40:45.890Z"
    }

    return(
        <>
            <Box className="product">
                <Container maxWidth="lg" className="product__container">
                    <Box className="product__wrapper">
                        <Box className="product__title-wrapper">
                            <h3 className="product__title">{MOC.brand} <br/> {MOC.name}</h3>
                        </Box>
                        <Box className="product__image-wrapper">
                            <img src="https://res.cloudinary.com/ducrc4lke/image/upload/v1676811597/laptop-shop/1/Capture_bd2yjd.png" alt="laptop" className="product__image"/>
                            <CompareSvg/>
                            <FavSvg/>
                        </Box>
                        <Box className="product__desc-wrapper">
                            <Box className="product__desc-title-wrapper">
                                <h5 className="product__desc-title">Product description</h5>
                            </Box>

                            <Box className="product__desc-text-wrapper">
                                <p className="product__desc-text">{MOC.description}</p>
                            </Box>
                        </Box>

                        <Box className="product__info-wrapper">
                            <Box className="product__info-title-wrapper">
                                <h5 className="product__info-title">Information</h5>
                            </Box>

                            <Box className="product__info-content-wrapper">
                                <Box className="product__info-content">
                                    <span className="product__property">Brand</span>
                                    <span className="product__value">{MOC.brand}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Processor</span>
                                    <span className="product__value">{MOC.processorType}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Screen size</span>
                                    <span className="product__value">{MOC.screenSize}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">GPU</span>
                                    <span className="product__value">{MOC.videoCard}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">OS</span>
                                    <span className="product__value">{MOC.operatingSystem}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">RAM</span>
                                    <span className="product__value">{MOC.ramMemory}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">HDR</span>
                                    <span className="product__value">{MOC.hardDriveCapacity}</span>
                                </Box>

                                <Box className="product__info-content">
                                    <span className="product__property">Color</span>
                                    <span className="product__value">{MOC.color}</span>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ProductBlock;
