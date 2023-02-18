import CustomInput from './CustomInput';
import PropTypes from 'prop-types';
import InputAdornments from './FormComponent';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <CustomInput {...rest} />;
      return <InputAdornments {...rest} />;
    // other cases...
    default:
      return null;
  }
};
FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
};
export default FormikControl;
