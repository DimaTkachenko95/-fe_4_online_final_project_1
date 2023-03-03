import { Typography } from "@mui/material";
import styled from "styled-components";

const Title = styled(Typography) `
    && {
        text-align: center;
        margin-top: 50px;
        font-size: 32px;
        font-weight: 500;
    }
`

const EmptyBasket = () => {
    return (
        <Title variant="h2">
            You nave not added any product yet
        </Title>
    )
}

export default EmptyBasket;