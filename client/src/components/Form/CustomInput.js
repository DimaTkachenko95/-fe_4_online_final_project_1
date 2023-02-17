import { Field, useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import TextError from './TextError';
import useStyles from './createStyles';

const CustomInput = (props) => {
  const classes = useStyles();
  const [field] = useField(props);
  //const { type, placeholder, className } = props;
  const { name, label, type, placeholder, className, id, ...rest } = props;

  return (
    <>
      {/*<FormLabel component="legend">{label}</FormLabel>*/}
      <Field
        type={type}
        placeholder={placeholder}
        className={className}
        {...field}
        {...rest}
        as={TextField}
        label={label}
        required
        id={id}
      />
      <ErrorMessage className="classes.errorMessage" name={name} as={TextError} />
    </>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default CustomInput;

//{!!meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
