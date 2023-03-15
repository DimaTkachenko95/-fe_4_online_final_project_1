
import { Formik, Form } from 'formik';
import validationSchemaPassword from './compomemts/ValidationSchemaPassword';
import { useState } from 'react';
import { selectorChangePassword, selectorChangePasswordMessage } from '../../../../selectors';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/Button';
import PasswordInput from './compomemts/PasswordInput';
import { actionFetchUpdateCustomerPassword } from '../../../../reducers';

import './ChangePassword.scss'


const ChangePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const dispatch = useDispatch()

    const changePassword = useSelector(selectorChangePassword)
    const changePasswordMessage = useSelector(selectorChangePasswordMessage)

    return (
            <Formik
                initialValues={changePassword}
                validationSchema={validationSchemaPassword}
                onSubmit={(values)=> dispatch(actionFetchUpdateCustomerPassword(values))}  
            >
                {(isValid) => {
                    return (
                        <>
                            <Form className="form-registration" style={{ width: '100%' }}>
                                <div className="form-registration__grid_wrapper">
                                    <PasswordInput
                                        label={"Old password"}
                                        name={"password"}
                                        placeholder="Enter your old password"
                                        type={showOldPassword ? 'text' : 'password'}
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                        onMouseDown={(e) => e.preventDefault()} 
                                        showPassword={showOldPassword} />

                                    <PasswordInput
                                        label={"New password"}
                                        name={"newPassword"}
                                        placeholder="Enter your new password"
                                        type={showNewPassword ? 'text' : 'password'}
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                         onMouseDown={(e) => e.preventDefault()} 
                                        showPassword={showNewPassword} />
                                </div>
                                <p className='change-password-message'>{changePasswordMessage}</p>
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
    )
}

export default ChangePassword