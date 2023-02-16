import './Basket.scss';
import { Link } from 'react-router-dom';

function Basket() {
  return (
    <>
      <div>Корзина для НЕ авторизованого користувача</div>
      <Link to="/checkOut">Купить</Link>
    </>
  );
}

export default Basket;