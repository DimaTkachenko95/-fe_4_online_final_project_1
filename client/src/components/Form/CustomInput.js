import { useField } from 'formik';
import styles from './FormComponent.module.scss';

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  const { type, placeholder } = props;
  return (
    <>
      <input type={type} placeholder={placeholder} {...field} />
      {!!meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
    </>
  );
};

export default CustomInput;
