import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import { useState } from 'react';
import Authorization from '../../../Authorization/Authorization';
import { useNavigate } from 'react-router-dom';
import './ModalErrorRegistration.scss';

const ModalErrorRegistration = ({ closeErrorModal }) => {
  const navigate = useNavigate();
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  const closeModalAuth = () => {
    setIsModalAuthOpen(false);
  };

  return (
    <Modal
      modalAction={closeErrorModal}
      closeAction={() => {
        closeErrorModal();

      }}
    >
      <p className="modal_title"> You entered non-unique data; please try again or login </p>
      <Button
        className="form-block__btn"
        type="button"
        text="login"
        onClick={(event) => toggleModalAuth(event)}
      />
      {isModalAuthOpen && (
        <Authorization
          closeModalAuth={() => {
            closeModalAuth();
            closeErrorModal();
            navigate('/');
          }}
        />
      )}
    </Modal>
  );
};

export default ModalErrorRegistration;
