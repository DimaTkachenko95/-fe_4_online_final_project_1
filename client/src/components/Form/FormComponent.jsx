import './FormComponent.scss';
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
            <Form className="form-registration" style={{ width: '100%' }}>
              <Grid className="form-registration__grid" container spacing={1} columns={16}>
                <Grid
                  className="form-registration__grid-item"
                  item
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    label="First Name"
                    color="success"
                    className="form-registration__input"
                    name="firstName"
                    placeholder="Enter your first name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  justifyContent="center"
                  item
                  display="flex"
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    color="success"
                    label="Last Name"
                    className="form-registration__input"
                    name="lastName"
                    placeholder="Enter your last name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  display="flex"
                  justifyContent="center"
                  item
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    color="success"
                    label="login"
                    className="form-registration__input"
                    name="login"
                    placeholder="Enter your login"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  display="flex"
                  justifyContent="center"
                  item
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    color="success"
                    label="email"
                    className="form-registration__input"
                    name="email"
                    placeholder="Enter your email"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  justifyContent="center"
                  item
                  display="flex"
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    label="Password"
                    variant="outlined"
                    control="input"
                    color="success"
                    className="form-registration__input"
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
                <Grid
                  className="form-registration__grid-item"
                  display="flex"
                  justifyContent="center"
                  item
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    color="success"
                    label="telephone"
                    className="form-registration__input"
                    name="telephone"
                    placeholder="Enter your telephone"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  display="flex"
                  justifyContent="center"
                  item
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="text"
                    control="input"
                    color="success"
                    label="gender"
                    className="form-registration__input"
                    name="gender"
                    placeholder="male, female, other"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
                <Grid
                  className="form-registration__grid-item"
                  justifyContent="center"
                  item
                  display="flex"
                  flexDirection="column"
                  lg={8}
                >
                  <FormikControl
                    type="url"
                    control="input"
                    color="success"
                    label="avatarUrl"
                    className="form-registration__input"
                    name="avatarUrl"
                    placeholder="enter link to avatar"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                  />
                </Grid>
              </Grid>
              <button type="submit" className="form-registration__submit" disabled={!isValid}>
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
