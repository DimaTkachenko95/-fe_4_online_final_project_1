import { Container } from '@mui/material';

import { useDispatch } from 'react-redux';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import { createCustomerServerApi } from '../../reducers/registration.reducer';
import initialState from '../../reducers/registration.reducer'; 
import FormComponent from './FormComponent/FormComponent';
import FormRegistration from '../../components/FormRegistration';


const Registration = () => {
  const dispatch = useDispatch();
  
  return (
    <main>
      <Container className="registration-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/registration', text: 'Registration' }]} />
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>
      <FormComponent/> 
   
        </div>
      </Container>
    </main>
  );
};

export default Registration;
