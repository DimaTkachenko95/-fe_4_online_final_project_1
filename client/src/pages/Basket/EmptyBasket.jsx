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
            <div className="secEmpty">
            <img src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg" alt="dino"/>
                   <p>You haven't added any product yet</p>
            </div>
        </Title>
    )
}

export default EmptyBasket;