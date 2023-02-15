import './Basket.scss';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { Container } from '@mui/material';

function Basket() {

const [isModal, setIsModal] = useState(false);

  return (
    <Container width="100%">
      <div>Корзина для НЕ авторизованого користувача</div>
      <button onClick={() => 
      {setIsModal(true)
      console.log(isModal)}
      }>OpenModal</button>
      <Link to="/checkOut">Купить</Link>
      {isModal && <Modal/>}
    </Container>
  );
}

export default Basket;
