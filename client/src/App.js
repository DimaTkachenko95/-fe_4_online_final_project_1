import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Main from './pages/Main';
import Basket from './pages/Backet';
import CheckOut from './pages/CheckOut';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Product from './pages/Product';
import Registration from './pages/Registration/Registration';

import './reset.css';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/product" element={<Product />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
