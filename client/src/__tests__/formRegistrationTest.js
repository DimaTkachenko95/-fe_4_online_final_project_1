import React from 'react';
import { Formik } from 'formik';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as Yup from 'yup';
import FormRegistration from '../components/FormRegistration';

const mockStore = configureStore([]);

describe('FormRegistration', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('renders without crashing', () => {
        expect(
            <Provider store={store}>
                <FormRegistration onSubmit={() => {}} />
            </Provider>
        );
    });

    it('submits the form when the submit button is clicked', () => {
        const handleSubmit = jest.fn();
        const initialValues = {
            firstName: '',
            lastName: '',
            login: '',
            email: '',
            password: '',
            confirmPassword: '',
            telephone: '',
            city: '',
            country: '',
        };
        const validationSchema = Yup.object().shape({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            login: Yup.string().required('Login is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords do not match')
                .required('Confirm password is required'),
            telephone: Yup.string().required('Telephone is required'),
            city: Yup.string().required('City is required'),
            country: Yup.string().required('Country is required'),
        });
       expect(
            <Provider store={store}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(isValid) => (
                        <FormRegistration
                            onSubmit={handleSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        />
                    )}
                </Formik>
            </Provider>
        );
    });
});
