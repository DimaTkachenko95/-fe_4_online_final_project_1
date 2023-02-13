import styles from './FormComponent.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const FormComponent = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    gender: '',
    avatarUrl: '',
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'Min 3 symbols')
      .max(20, 'Max 20 symbols')
      .required('First name field is requierd'),
    lastName: yup
      .string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      .required('Last name field is requierd'),
    login: yup
      .string()
      .min(3, 'Min 3 symbols')
      .max(20, 'Max 20 symbols')
      .required('Not valid login'),
    email: yup.string().email('Not valid email'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    telephone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
    gender: yup.mixed().oneOf(['male', 'female', 'other']).defined(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {(props) => {
        console.log(props);
        return (
          <Form className={styles.form}>
            <Field
              className={styles.formItem}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field
              className={styles.formItem}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field className={styles.formItem} type="text" name="login" placeholder="Login" />
            <ErrorMessage name="login">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field className={styles.formItem} type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field className={styles.formItem} type="text" name="password" placeholder="Password" />
            <ErrorMessage name="password">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field
              className={styles.formItem}
              type="text"
              name="telephone"
              placeholder="Telephone"
            />
            <ErrorMessage name="telephone">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field
              className={styles.formItem}
              type="text"
              name="gender"
              placeholder="male, female, other"
            />
            <ErrorMessage name="gender">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <Field
              className={styles.formItem}
              type="object"
              name="avatarUrl"
              placeholder="Avatar"
            />
            <ErrorMessage name="avatarUrl">
              {(msg) => <span className={styles.error}>{msg}</span>}
            </ErrorMessage>
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
