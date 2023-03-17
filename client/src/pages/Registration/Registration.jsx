import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import FormRegistration from '../../components/FormRegistration';



const Registration = () => {
  return (
    <main>
      <Container className="registration-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/registration', text: 'Registration' }]} />
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>
          <FormRegistration
                  inputsEditName={["firstName", "lastName", "login", "email", "password", "telephone", "gender", "avatarUrl"]}/>
        </div>
      </Container>
    </main>
  );
};

export default Registration;
