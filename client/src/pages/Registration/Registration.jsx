import { Container } from '@mui/material';

import { useDispatch } from 'react-redux';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import initialState from '../../reducers/registration.reducer';
import { createCustomerInServer } from '../../reducers';
/* import FormComponent from './FormComponent/FormComponent'; */
import FormRegistration from '../../components/FormRegistration';



const Registration = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Container className="registration-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/registration', text: 'Registration' }]} />
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>
          < FormRegistration initialValues={initialState} onSubmit={(values, { resetForm }) => {
            console.log(values)
            dispatch(createCustomerInServer(values));
            resetForm();
          }} />

        </div>
      </Container>
    </main>
  );
};

export default Registration;
