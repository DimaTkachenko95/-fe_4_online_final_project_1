
import Modal from "../../components/Modal";
import InputForm from "./InputForm";
import { Formik, Form } from "formik";
import {validationSchema} from "./validation";
import { useNavigate } from "react-router-dom";

import './LogIn.scss'
import { useState } from "react";
import { Typography } from "@mui/material";

import {actionFetchLogin} from "../../reducers"
import { useDispatch, useSelector } from "react-redux";
import {selectorUserData, selectorLoginOrEmail} from "../../selectors"
const LogIn = () => {
    // const [cvData, setCvData] = useState({
    //     email: '',
    //     password: ''
    // });
const dispatch = useDispatch();
const navigation = useNavigate();
const goBack = () => navigation(-1);
const userData = useSelector(selectorUserData);
//const userLogin = useSelector(selectorLoginOrEmail)



console.log(userData);
    return (
        <Modal modalAction={() => {
            console.log("close")
            //goBack()
            }}>
            <Formik
          initialValues={userData}
          onSubmit={(values) => {
            console.log("Дані користувача", values);
            //goBack();
            dispatch(actionFetchLogin(values))
            
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form>
              <fieldset className="form-block">
                <Typography>Log In to your account</Typography>
                <InputForm
                
                  inputName="email"
                 // label="Email"
                  placeholder="E-mail/Login"
                  error={errors.email && touched.email}
                  
                />
                <InputForm
                
                  inputName="password"
                  type="password"
                 // label="Password"
                  placeholder="Password"
                  error={errors.password && touched.password}
                  
                />
                {/* <p className="login_reminder" onClick={() => console.log("reminder")}>Forgot your password?</p> */}
                <button className="logInBtn" type="submit">LogIn</button>
                <button className="regInBtn" type="button" onClick={() => console.log("registration")}>Register</button>
              </fieldset>
            </Form>
          )}
        </Formik>

        </Modal>
    )
}

export default LogIn;