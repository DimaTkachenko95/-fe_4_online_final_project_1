import { PropTypes } from "prop-types";

import './Input.scss'

const Input = ({type, nameInput, placeholder, label, ...restProps}) => {
    return (
        <>
        <label className="input-item">
            <p className="input-label">{label}</p></label>
            <input 
                type={type} 
                className="input" 
                name={nameInput} 
                placeholder={placeholder}
                {...restProps}/>
        </>
    )
}

Input.defaultProps = {
    type: "text"
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputName: PropTypes.string,
    label: PropTypes.string,
}

export default Input;