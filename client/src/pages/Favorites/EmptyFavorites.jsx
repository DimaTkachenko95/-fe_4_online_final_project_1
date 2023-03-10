import { Typography } from "@mui/material";
import styled from "styled-components";
import './Favorites.scss';
const Title = styled(Typography) `
    && {
        text-align: center;
        margin-top: 50px;
        font-size: 32px;
        font-weight: 500;
    }
`

const EmptyFavorites = () => {
    return (
            <Title varian = "h2" className="emptySection">
                    <img src="https://xl-static.rozetka.com.ua/assets/img/design/cabinet/cabinet-dummy-error.svg" alt="dino"/>
                    <p>You haven't added any product yet</p>
            </Title>
    )
}

export default EmptyFavorites;