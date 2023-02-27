import {Box} from "@mui/material";
import styled from "styled-components";

import {ReactComponent as Close} from './icons/close.svg'

const ModalWrapper = styled.div `
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        margin: 0 auto;
    `

const ModalBlock = styled(Box) `
        max-width: 450px;
        min-width: 320px;
        position: relative;
        background-color: #FFFFFF;
        padding: 45px 35px 30px;
        box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

const CloseBtn = styled(Close) `
        position: absolute;
        top: -10px;
        right: -10px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    `

const Modal = ({children, modalAction}) => {
return (
    <div className="wrapper">
    <ModalWrapper>
        <ModalBlock>
            <CloseBtn fontSize="large" stroke="white" onClick={modalAction}/>
            {children}
        </ModalBlock>
    </ModalWrapper>
    </div>
)
}

export default Modal;