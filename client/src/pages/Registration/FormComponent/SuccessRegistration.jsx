import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Authorization from '../../Authorization';
import toggleModalAuth from '../../../components/Header';
import closeModalAuth from '../../../components/Header';
import { actionResetLoginError } from '../../../reducers';
import { useState } from '@types/react';
const SuccessModal = () => {
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
  const closeModalAuth = () => {
    setIsModalAuthOpen(false);
  };
  return (
    <Modal
      modalAction={closeModalAuth}
      closeAction={() => {
        closeModalAuth();
      }}
    >
      ><p> Success </p>
      <Button
        className="form-block__btn"
        type="button"
        text="login"
        onClick={(event) => toggleModalAuth(event)}
      />
    </Modal>
  );
};

export default SuccessModal;
