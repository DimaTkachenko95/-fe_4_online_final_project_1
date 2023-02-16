import Modal from "../../components/Modal";
import InputForm from "./InputForm";
import { Formik, Form } from "formik";
import {validationSchema} from "./validation"

import './LogIn.scss'
import { useState } from "react";

const LogIn = () => {
    const [cvData, setCvData] = useState({
        email: '',
        password: ''
    })
    return (
        <Modal modalAction={() => console.log("close")}>
            <Formik
          initialValues={cvData}
          onSubmit={(values) => {
            console.log("Дані користувача", values);
            setCvData({...values});
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, getFieldProps }) => (
            <Form>
              <fieldset className="form-block">
                <legend className="login_title">Log In to your account</legend>
                <InputForm
                
                  inputName="email"
                 // label="Email"
                  placeholder="E-mail/Phone number"
                  error={errors.name && touched.name}
                />
                <InputForm
                
                  inputName="password"
                  type="password"
                 // label="Password"
                  placeholder="Password"
                  error={errors.name && touched.lastName}
                />
                <p className="login_reminder" onClick={() => console.log("reminder")}>Forgot your password?</p>
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