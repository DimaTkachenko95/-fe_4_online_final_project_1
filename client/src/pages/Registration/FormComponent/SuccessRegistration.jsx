import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

import { useState } from 'react';
import Authorization from '../../Authorization';

const SuccessModal = () => {
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const toggleModalAuth = (event) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  const closeModalAuth = () => {
    setIsModalAuthOpen(false);
  };
  return (
    <Modal modalAction={closeModal} closeAction={closeModal}>
      <p> Successful authorization </p>
      <Button
        className="form-block__btn"
        type="button"
        text="login"
        onClick={toggleModal}
        onClick={(event) => toggleModalAuth(event)}
      />
      {isModalAuthOpen && <Authorization closeModalAuth={() => closeModalAuth()} />}
    </Modal>
  );
};

export default SuccessModal;
