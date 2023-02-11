import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Positions from "./Components/Pages/Catalog";
import Catalog from "./Components/Pages/Catalog";
import Main from "./Components/Pages/Main";
import Basket from "./Components/Pages/Backet";
import CheckOut from "./Components/Pages/CheckOut";
import Contacts from "./Components/Pages/Contacts";
import Favorites from "./Components/Pages/Favorites";
import Product from "./Components/Pages/Product";

import './reset.css'

const App = () =>  {

  return(
      <>
          <Header/>
          <Hero/>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/catalog" element={<Catalog/>} />
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
