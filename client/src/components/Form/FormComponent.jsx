import styles from './FormComponent.module.scss';
import { Formik, Form } from 'formik';
import validationSchema from './ValidationSchema';
import FormikControl from './FormikControl';
import { Grid } from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const FormComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            <Form className={styles.form} style={{ width: '100%' }}>
              <Grid container spacing={1} columns={16}>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="First Name"
                    className={styles.formItem}
                    name="firstName"
                    placeholder="Enter your first name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="Last Name"
                    className={styles.formItem}
                    name="lastName"
                    placeholder="Enter your last name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="login"
                    className={styles.formItem}
                    name="login"
                    placeholder="Enter your login"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="email"
                    className={styles.formItem}
                    name="email"
                    placeholder="Enter your email"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    label="Password"
                    variant="outlined"
                    control="input"
                    className={styles.formItem}
                    name="password"
                    placeholder="Enter your password"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="telephone"
                    className={styles.formItem}
                    name="telephone"
                    placeholder="Enter your telephone"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="gender"
                    className={styles.formItem}
                    name="gender"
                    placeholder="male, female, other"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid item lg={8}>
                  <FormikControl
                    type="text"
                    control="input"
                    label="avatarUrl"
                    className={styles.formItem}
                    name="avatarUrl"
                    placeholder="enter link to avatar"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
              </Grid>
              <button type="submit" className={styles.submitButton} disabled={!isValid}>
                Submit
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
