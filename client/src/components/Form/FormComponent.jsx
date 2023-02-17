import styles from './FormComponent.module.scss';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import CustomInput from './CustomInput';

const FormComponent = () => {
  // const history = useHistory();
  //
  // const handleSubmit = async (values, {resetForm, setFieldError}) => {
  //   if (values.password === values.repeatPassword) {
  //     const result = fetch('http://localhost:3001/sign-up', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(values)
  //     }).then(res => res.json())
  //
  //     if (result.status === 'success') {
  //       history.push('/')
  //     }
  //     resetForm();
  //   }
  //   else {
  //     setFieldError('repeatPassword', 'Password is not the same');
  //   }
  // }

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
      .required('First name field is requierd')
      .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
    lastName: yup
      .string()
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols')
      .required('Last name field is requierd')
      .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
    login: yup
      .string()
      .min(3, 'Min 3 symbols')
      .max(20, 'Max 20 symbols')
      .required('Not valid login'),
    email: yup.string().email('Not valid email').required(),
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
      {(isValid) => {
        console.log(isValid);
        return (
          <>
            <Form className={styles.form}>
              <CustomInput
                className={styles.formItem}
                type="text"
                name="firstName"
                placeholder="First Name"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="login"
                placeholder="Login"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="email"
                placeholder="Email"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="password"
                placeholder="Password"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="telephone"
                placeholder="Telephone"
              />

              <CustomInput
                className={styles.formItem}
                type="text"
                name="gender"
                placeholder="male, female, other"
              />

              <CustomInput
                className={styles.formItem}
                type="object"
                name="avatarUrl"
                placeholder="Avatar"
              />
            </Form>

            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
