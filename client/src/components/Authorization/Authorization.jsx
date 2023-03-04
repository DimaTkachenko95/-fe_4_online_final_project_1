import Modal from "../Modal";
import InputForm from "./InputForm";
import { Formik, Form } from "formik";
import {validationSchema} from "./validation";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import {actionFetchLogin} from "../../reducers"
import { useDispatch, useSelector } from "react-redux";
import {selectorUserData} from "../../selectors"
import './Authorization.scss'

const Authorization = ({closeModalAuth}) => {

const dispatch = useDispatch();
const navigation = useNavigate();
//const goBack = () => navigation(-1);
const userData = useSelector(selectorUserData);

    return (
        <Modal 
        modalAction={closeModalAuth}
        closeAction={closeModalAuth}>
            <Formik
          initialValues={userData}
          onSubmit={(values) => {
            console.log("Дані користувача", values);
            closeModalAuth();
            dispatch(actionFetchLogin(values))
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form>
              <fieldset className="form-block">
                <Typography>Log In to your account</Typography>
                <InputForm
                
                  inputName="loginOrEmail"
                 // label="Email"
                  placeholder="E-mail/Login"
                  error={errors.loginOrEmail && touched.loginOrEmail}
                  
                />
                <InputForm
                
                  inputName="password"
                  type="password"
                  placeholder="Password"
                  error={errors.password && touched.password}
                  
                />
                {/* <p className="login_reminder" onClick={() => console.log("reminder")}>Forgot your password?</p> */}
                <button className="logInBtn" type="submit">LogIn</button>
                
                <button className="regInBtn" type="button" onClick={() => console.log("registration")}>Registration</button>
              </fieldset>
            </Form>
          )}
        </Formik>

        </Modal>
    )
}

export default Authorization;