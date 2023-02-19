import { Container } from '@mui/material';
import FormComponent from '../../components/Form/FormComponent';
import './Registration.scss';

const Registration = () => {
  return (
    <main>
      <Container className="registration-container" maxWidth="xl">
        <div className="registration-container__wrapper">
          <h2 className="registration-container__wrapper-title">Registration</h2>
          <FormComponent />
        </div>
      </Container>
    </main>
  );
};

export default Registration;
