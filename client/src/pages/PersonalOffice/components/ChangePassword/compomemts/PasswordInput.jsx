
import FormikControl from '../../../../../components/FormRegistration/components/FormikControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const PasswordInput = ({name, label, type, onClick, onMouseDown, placeholder, showPassword}) => {
    return (
        <FormikControl
            htmlFor="outlined-adornment-password"
            label={label}
            variant="outlined"
            control="input"
            color="success"
            className="form-registration__input"
            name={name}
            placeholder={placeholder}
            id="outlined-adornment-password"
            required
            type={type}
            InputProps={{
                endAdornment: (
                    <>
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={onClick}
                                onMouseDown={onMouseDown}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    </>
                ),
            }}
        />
    )
}

export default PasswordInput