import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import Authorization from '../../Authorization';
import toggleModalAuth from '../../../components/Header';
import closeModalAuth from '../../../components/Header';
const SuccessModal = () => {
  return (
    <Modal>
      <p> Success </p>
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
