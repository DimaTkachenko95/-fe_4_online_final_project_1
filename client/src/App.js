import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Products from "./Pages/Products";
import Main from "./Pages/Main";
import Basket from "./Pages/Backet";
import CheckOut from "./Pages/CheckOut";
import Contacts from "./Pages/Contacts";
import Favorites from "./Pages/Favorites";
import Product from "./Pages/Product";

import './reset.css'

const App = () =>  {

  return(
      <>
          <Header/>
          <Hero/>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/basket" element={<Basket/>} />
              <Route path="/favorites" element={<Favorites/>} />
              <Route path="/check-out" element={<CheckOut/>} />
              <Route path="/product" element={<Product/>} />
          </Routes>
          <Footer/>
      </>
  )
}

export default App;
