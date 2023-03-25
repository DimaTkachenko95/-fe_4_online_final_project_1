import { Container } from '@mui/material';
import ValidationSchemaRegistration from './ValidationSchemaRegistration';
import { useDispatch } from 'react-redux';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import initialState from '../../reducers/registration.reducer';
import { createCustomerServerApi } from '../../reducers';
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
          < FormRegistration 
                  initialValues={initialState} 
                  validationSchema={ValidationSchemaRegistration}
                  btnText='submit'
                  onSubmit={(values, { resetForm }) => {
                      console.log(values)
                      dispatch(createCustomerServerApi(values));
                      resetForm();
                  }} 
                  inputsEditName={["firstName", "lastName", "login", "email", "password", "telephone", "gender", "avatarUrl"]}/>
        </div>
      </Container>
    </main>
  );
};

export default Registration;
