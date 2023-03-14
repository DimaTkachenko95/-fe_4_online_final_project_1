import { Container } from '@mui/material';
import FormComponent from '../Registration/FormComponent/FormComponent';
import './Registration.scss';
import BreadCrumbs from '../../components/BreadCrumbs';

const Registration = () => {
  return (
    <main>
      <Container className="registration-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/registration', text: 'Registration' }]} />
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>
          <FormComponent />
        </div>
      </Container>
    </main>
  );
};

export default Registration;
