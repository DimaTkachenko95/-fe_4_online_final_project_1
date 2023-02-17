import { Container } from '@mui/material';
import FormComponent from '../../components/Form/FormComponent';
import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <h2 className={styles.registrationTitle}>Registration</h2>
        <FormComponent />
      </Container>
    </main>
  );
};

export default Registration;
