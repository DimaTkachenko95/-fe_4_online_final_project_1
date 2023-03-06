import Modal from "../Modal";
import AuthInput from "./AuthInput";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Formik, Form } from "formik";
import {validationSchema} from "./validation";
import Button from "../Button";
import {actionFetchLogin} from "../../reducers"
import { useDispatch, useSelector } from "react-redux";
import {selectorUserData} from "../../selectors";
import { useState } from "react";
import './Authorization.scss'

const Authorization = ({closeModalAuth}) => {
    const dispatch = useDispatch();
    const userData = useSelector(selectorUserData);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <Modal 
        modalAction={closeModalAuth}
        closeAction={closeModalAuth}>
            <Formik
          initialValues={userData}
          onSubmit={(values) => {
            closeModalAuth();
            dispatch(actionFetchLogin(values))
          }}
          validationSchema={validationSchema}
        >
          {(isValid) => {
            return (
            <Form>
              <div className="form-block">
                <h1 className="form-block__title">Log In to your account</h1>
                <AuthInput
                  type="text"
                  control="input"
                  color="success"
                  label="Email"
                  className="form-block__input"
                  name="loginOrEmail"
                  placeholder="Enter your email"
                  variant="outlined"
                  id="outlined-multiline-flexible"
                  required
                />
                <AuthInput
                htmlFor="outlined-adornment-password"
                label="Password"
                variant="outlined"
                control="input"
                color="success"
                className="form-block__input"
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
                {/* <p className="login_reminder" onClick={() => console.log("reminder")}>Forgot your password?</p> */}
                <Button className="form-block__btn" type="submit" text="LogIn" disabled={!isValid}/>
                <Button className="form-block__btn" type="button" to="/registration" text="Registration" variant="white-shadow" onClick={closeModalAuth}/>
                </div>
            </Form>
          )}}
        </Formik>

        </Modal>
    )
}

export default Authorization;
