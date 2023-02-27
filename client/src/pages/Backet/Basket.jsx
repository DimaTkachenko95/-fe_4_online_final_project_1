import './Basket.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorUserData, selectorToken } from '../../selectors';

const Basket = () => {
  const token = useSelector(selectorToken)
  console.log(typeof token);
  return (
    <>
      <div>Корзина для НЕ авторизованого користувача</div>
      <Link to="/checkOut">Купить</Link>
    </>
  );
};

export default Basket;