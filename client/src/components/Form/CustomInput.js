import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import styles from './CustomInput.module.scss';

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  const { name, label, type, placeholder, className, id, ...rest } = props;
  return (
    <>
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
      {!!meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
    </>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default CustomInput;
