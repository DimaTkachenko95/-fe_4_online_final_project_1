import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from "./comp/Header";
import Hero from "./comp/Hero";
import Footer from "./comp/Footer";
import Products from "./page/Products";
import Main from "./page/Main";
import Basket from "./page/Backet";
import CheckOut from "./page/CheckOut";
import Contacts from "./page/Contacts";
import Favorites from "./page/Favorites";
import Product from "./page/Product";


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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
