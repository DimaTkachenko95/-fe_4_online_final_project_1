import { Container } from '@mui/material';
import { useState } from 'react';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import {createCustomerServerApi, registrationIsLoading} from '../../reducers';
import FormRegistration from '../../components/FormRegistration';
import ValidationSchema from './components/ValidationSchema';
import ModalSuccessRegistration from './components/ModalSuccessRegistration';
import Preloader from '../../components/Preloader'
import {useDispatch} from "react-redux";
import {initialState} from '../../reducers'

const Registration = () => {
    const dispatch = useDispatch();
    //const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };
    const closeModal = () => {
        setOpenModal(false);
    };

  return (
    <main>
      <Container className="registration-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/registration', text: 'Registration' }]} />
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>

          <FormRegistration
              initialValues={initialState}
              validationSchema={ValidationSchema}
              onSubmit={(values, { resetForm }) => {
                  delete values.confirmPassword;
                  dispatch(registrationIsLoading(true))
                  createCustomerServerApi.then((savedCustomer) => {
                      if (savedCustomer) {
                          resetForm();
                          toggleModal();}
                      dispatch(registrationIsLoading(false))
                  });
              }}
                  inputsEditName={["firstName", "lastName", "login", "email", "password", "telephone", "gender", "avatarUrl"]}
          />

            {openModal && <ModalSuccessRegistration closeModal={() => closeModal()} />}
        </div>
      </Container>
    </main>
  );
};

export default Registration;
