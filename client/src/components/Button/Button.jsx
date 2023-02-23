import {ButtonBase} from "@mui/material";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import classnames from 'classnames';

const mixin = (props) => {
    switch (props.variant) {
      case 'gradient-green':
        return css`
          && {color: #ffffff;
          background: linear-gradient(#8EE902, #4F9C2C);
          box-shadow: 0px 5px 6px rgba(79, 156, 44, 0.6);
            &:hover {
              ${hoverGradientGreen}
            }}
        `;
      case 'white-shadow':
        return css`
          && {color: #000000;
          background: #ffffff;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
           &:hover {
             ${hoverWhiteShadow}
           }}
        `;
        case 'pale-green': 
         return css`
            && {background: #d6e3d1;
            color: #4d9546;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;}
         `

      default:
        return css`
          && {color: rgb(245, 240, 240);
          background: #4ba123;
           &:hover {
            ${hoverGreen}
           }}
        `;
    }
  };

  const hoverGreen = css`
    background: #d6e3d1;
    color: #4d9546;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `
  
  const hoverGradientGreen = css`
    background: linear-gradient(to bottom, #FFFFFF, #80808080);
    color: #4d9546;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `

  const hoverWhiteShadow = css`
    box-shadow: 0px 3px 8px rgba(79, 156, 44, 0.6);
    background: linear-gradient(#FFFFFF, rgba(79, 156, 44, 0.6));
    color: #4d9546;
    //background: linear-gradient(to bottom, #FFFFFF, #D3D3D3);
  `

  //background: linear-gradient(to bottom, #f5f5f5, #d3d3d3);

  const widthMixin = css`
  && {
    width: ${props => props.width || "240px"};
  }
`;

        // background-color: #d6e3d1;
        // color: #4d9546;
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  const ButtonMain = styled(ButtonBase).attrs((props) => ({
    href: props.href,
    component: props.to && Link,
    to: props.to,
  })) `
  && {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    min-width: 50px;
    height: 50px;
    border-radius: 30px;
    border: none;}
    ${(props) => mixin(props)}
    ${widthMixin}
  `;
 
const Btn = ({text, type, variant, width, href, to, className, ...restProps}) => {

    const buttonClassName = classnames({
        'gradient-green': variant === 'gradient-green',
        'pale-green': variant === 'pale-green',
        'white-shadow': variant === 'white-shadow'
      }, className);
    

return (
    <ButtonMain 
        type={type}                 // тип кнопки (button, submit)
        variant={variant}           // зовнішній вигляд (gradient-green, white-shadow)
        width={width}               // ширину задавати тільки в тому випадку, якщо кнопка повинна бути менша 240px
        href={href}                 // посилання для кнопки типу a href="" 
        to={to}                     // посилання для кнопки типу Link to=""
        className={buttonClassName} // ігнорувати. також можна передавати до кнопки новий додатковий className
        {...restProps} 
        >
        {text} 
    </ButtonMain>
)

}

export default Btn;