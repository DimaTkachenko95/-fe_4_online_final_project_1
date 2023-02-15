import Modal from "../../components/Modal";
import styled from "styled-components";

import './LogIn.scss'

const LogIn = () => {
    return (
        <Modal>
            <h1 className="login_title">Log In to your account</h1>
            <input type="text" className="input" name="contacts" placeholder="Email/Phone"/>
            <input type="password" className="input" name="password" placeholder="Password"/>
            <p className="login_reminder" onClick={() => console.log("напоминалка пароля?")}>Forgot password?</p>
            <button className="logInBtn">LogIn</button>
            <button className="regInBtn">Register</button>
        </Modal>
    )
}

export default LogIn;