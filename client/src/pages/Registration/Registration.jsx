import { Container } from '@mui/material';
import { useState } from 'react';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import FormRegistration from '../../components/FormRegistration';
import ValidationSchema from './components/ValidationSchema';
import ModalSuccessRegistration from './components/ModalSuccessRegistration';
import Preloader from '../../components/Preloader';
import {createCustomerServerApi} from '../../api/createCustomerServerApi';
import ModalErrorRegistration from './components/ModalErrorRegistration'

const initialState = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
        telephone: '',
        avatarUrl: ''
}

const Registration = () => {
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [regError, setRegerror] = useState(false);

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
                  setLoading(true);
                  createCustomerServerApi(values).then((axiosValue) => {
                      if (axiosValue) {
                          resetForm();
                          toggleModal();
                          setLoading(false);
                      } else {
                          setLoading(false);
                          setRegerror(true)
                      }
                  })
              }}

                  inputsEditName={["firstName", "lastName", "login", "email", "password", "telephone", "gender", "avatarUrl"]}
          />
            {loading && <Preloader open="true"/>}
            {openModal && <ModalSuccessRegistration closeModal={() => closeModal()} />}
            {regError && <ModalErrorRegistration/>}
        </div>
      </Container>
    </main>
  );
};

export default Registration;
