import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Products from './pages/Products';
import Main from './pages/Main';
import Basket from './pages/Backet';
import CheckOut from './pages/CheckOut';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Product from './pages/Product';
import LogIn from './pages/LogIn';

import './reset.css';

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
        <Route path="/log_in" element={<LogIn/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
