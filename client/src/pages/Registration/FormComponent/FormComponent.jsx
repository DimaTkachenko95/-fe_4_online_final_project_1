import './FormComponent.scss';
import { Formik, Form } from 'formik';
import validationSchema from './ValidationSchema';
import FormikControl from './FormikControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomerServerApi } from '../../../reducers';
import { initialState } from '../../../reducers/registration.reducer';
import Button from '../../../components/Button';
//import Authorization from '../../../pages/Authorization';
import SuccessModal from './SuccessRegistration';

const FormComponent = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleModal = (event) => {
    event.preventDefault();
    setOpenModal(!openModal);
  };

  const onClickModal = (event) => {
    toggleModal(event);
  };

  // const newArr = comparisonProducts.filter((produc) => produc._id !== id);
  // setComparisonProducts(newArr);

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values, event, { resetForm }) => {
        dispatch(createCustomerServerApi(values));
        resetForm();
        onClickModal();
      }}
    >
      {(isValid) => {
        return (
          <>
            <Form className="form-registration" style={{ width: '100%' }}>
              <div className="form-registration__grid_wrapper">
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
                  required
                />

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
                  required
                />

                <FormikControl
                  type="text"
                  control="input"
                  color="success"
                  label="Login"
                  className="form-registration__input"
                  name="login"
                  placeholder="Enter your login"
                  variant="outlined"
                  id="outlined-multiline-flexible"
                  required
                />

                <FormikControl
                  type="text"
                  control="input"
                  color="success"
                  label="Email"
                  className="form-registration__input"
                  name="email"
                  placeholder="Enter your email"
                  variant="outlined"
                  id="outlined-multiline-flexible"
                  required
                />

                <FormikControl
                  htmlFor="outlined-adornment-password"
                  label="Password"
                  variant="outlined"
                  control="input"
                  color="success"
                  className="form-registration__input"
                  name="password"
                  placeholder="Enter your password"
                  id="outlined-adornment-password"
                  required
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
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
                    ),
                  }}
                />

                <FormikControl
                  htmlFor="outlined-adornment-password"
                  label="Confirm password"
                  variant="outlined"
                  control="input"
                  color="success"
                  className="form-registration__input"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  id="outlined-adornment-password"
                  required
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
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
                    ),
                  }}
                />

                <FormikControl
                  type="text"
                  control="input"
                  color="success"
                  label="Telephone"
                  className="form-registration__input"
                  name="telephone"
                  // placeholder="Enter your telephone"
                  variant="outlined"
                  id="outlined-multiline-flexible"
                  required
                  mask="+380 99 999 99 99"
                  placeholder="+380 99 999 99 99"
                />

                <FormikControl
                  type="url"
                  control="input"
                  color="success"
                  label="Avatar"
                  className="form-registration__input"
                  name="avatarUrl"
                  placeholder="Enter avatar url"
                  variant="outlined"
                  id="outlined-multiline-flexible"
                />
              </div>
              <Button
                type="submit"
                disabled={!isValid}
                text="submit"
                style={{ display: 'block', margin: '0 auto', marginTop: 60, marginBottom: 150 }}
                onClick={(event) => toggleModal(event)}
              />
              {openModal && <SuccessModal closeModal={() => closeModal()} />}
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
