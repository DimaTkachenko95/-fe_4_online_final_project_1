import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Products from "./Pages/Products";
import Main from "./Pages/Main";
import Basket from "./Pages/Backet";
import CheckOut from "./Pages/CheckOut";
import Contacts from "./Pages/Contacts";
import Favorites from "./Pages/Favorites";
import Product from "./Pages/Product";

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
