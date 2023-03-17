import './FormRegistration.scss';
import { Formik, Form } from 'formik';
import validationSchema from './components/ValidationSchema'
import FormikControl from './components/FormikControl'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionEditInputs } from '../../reducers';
import Button from '../Button';
import EditButton from './components/EditButton';
import {createCustomerServerApi} from "../../helpers/createNewCustomer";
import Preloader from "../Preloader";
import RegistrationError from "../../components/FormRegistration/RegistrationError";
import ModalSuccessRegistration from "../../components/FormRegistration/ModalSuccessRegistration";

const initialState = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    gender: '',
    avatarUrl: '',
    serverError: null,
};

const FormRegistration = ({ btnEdit, inputsEditName, withPassword }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const toggleModal = (event) => {
        setOpenModal(!openModal);
    };
    const closeModal = () => {
        setOpenModal(false);
    };

  return (
    <>
        {!loading ? (
      <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
              delete values.confirmPassword;
              createCustomerServerApi(values).then((axiosValue) => {
                  if (axiosValue) {
                      resetForm();
                      toggleModal();
                      setLoading(false);
                  } else {
                      setLoading(true);
                  }
              });
              setLoading(true);
          }}
      >
        {(isValid) => {
          return (
            <>
              <Form className="form-registration" style={{ width: '100%' }}>
                <div className="form-registration__grid_wrapper">

                  <FormikControl
                    sx={[!inputsEditName.includes("firstName") && {
                      "& fieldset": { border: 'none' }
                    }]}
                    type="text"
                    control="input"
                    label="First Name"
                    color="success"
                    className="form-registration__input"
                    name="firstName"
                    placeholder="Enter your first name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    disabled={!inputsEditName.includes("firstName")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"firstName"} onClick={() => dispatch(actionEditInputs("firstName"))} />)
                    }}
                    required
                  />

                  <FormikControl
                    sx={[!inputsEditName.includes("lastName") && {
                      "& fieldset": { border: 'none' }
                    }]}
                    type="text"
                    control="input"
                    color="success"
                    label="Last Name"
                    className="form-registration__input"
                    name="lastName"
                    placeholder="Enter your last name"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    disabled={!inputsEditName.includes("lastName")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"lastName"} onClick={() => dispatch(actionEditInputs("lastName"))} />)
                    }}
                    required
                  />

                  <FormikControl
                    sx={[!inputsEditName.includes("login") && {
                      "& fieldset": { border: 'none' }
                    }]}
                    type="text"
                    control="input"
                    color="success"
                    label="Login"
                    className="form-registration__input"
                    name="login"
                    placeholder="Enter your login"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    disabled={!inputsEditName.includes("login")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"login"} onClick={() => dispatch(actionEditInputs("login"))} />)
                    }}
                    required
                  />

                  <FormikControl
                    sx={[!inputsEditName.includes("email") && {
                      "& fieldset": { border: 'none' }
                    }]}
                    type="text"
                    control="input"
                    color="success"
                    label="Email"
                    className="form-registration__input"
                    name="email"
                    placeholder="Enter your email"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    disabled={!inputsEditName.includes("email")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"email"} onClick={() => dispatch(actionEditInputs("email"))} />)
                    }}
                    required
                  />

                  {!withPassword &&
                    <FormikControl
                      sx={[!inputsEditName.includes("password") && {
                        "& fieldset": { border: 'none' }
                      }]}
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
                      disabled={!inputsEditName.includes("password")}
                      InputProps={{
                        endAdornment: (
                          <>
                            <InputAdornment position="end">
                              <IconButton
                                disabled={!inputsEditName.includes("password")}
                                aria-label="toggle password visibility"
                                onClick={()=>setShowPassword(!showPassword)}
                                onMouseDown={(e)=>e.preventDefault()}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                              {btnEdit &&

                                <EditButton dataName={"password"} onClick={() => dispatch(actionEditInputs("password"))} />
                              }
                            </InputAdornment>
                          </>
                        ),
                      }}
                    />
                  }
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
                    sx={[!inputsEditName.includes("telephone") && {
                      "& fieldset": { border: 'none' }
                    }]}
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
                    placeholder="+380 99 999 99 99"
                    disabled={!inputsEditName.includes("telephone")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"telephone"} onClick={() => dispatch(actionEditInputs("telephone"))} />)
                    }}
                  />

                  <FormikControl
                    sx={[!inputsEditName.includes("avatarUrl") && {
                      "& fieldset": { border: 'none' }
                    }]}
                    type="url"
                    control="input"
                    color="success"
                    label="Avatar"
                    className="form-registration__input"
                    name="avatarUrl"
                    placeholder="Enter avatar url"
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    disabled={!inputsEditName.includes("avatarUrl")}
                    InputProps={btnEdit && {
                      endAdornment: (<EditButton dataName={"avatarUrl"} onClick={() => dispatch(actionEditInputs("avatarUrl"))} />)
                    }}
                  />

                </div>
                <Button
                  type="submit"
                  disabled={!isValid}
                  text="submit"
                  style={{ display: 'block', margin: '0 auto', marginTop: 60, marginBottom: 150 }}
                />
              </Form>
            </>
          );
        }}
      </Formik>
        ) : (
            <>
                <Preloader open={setLoading} />
                <RegistrationError />
            </>
        )}
        {openModal && <ModalSuccessRegistration closeModal={() => closeModal()} />}
    </>
  );
};

export default FormRegistration;
