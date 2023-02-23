import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Main from './pages/Main';
import Basket from './pages/Basket';
import CheckOut from './pages/CheckOut';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Product from './pages/Product';
import Registration from './pages/Registration';
import NotFound from "./pages/NotFound";
import './reset.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-routes-wrapper">
                <Routes>
                    <Route path="/" element={ <Main/> }/>
                    <Route path="/contacts" element={ <Contacts/> }/>
                    <Route path="/products" element={ <Products/> }/>
                    <Route path="/basket" element={ <Basket/> }/>
                    <Route path="/favorites" element={ <Favorites/> }/>
                    <Route path="/check-out" element={ <CheckOut/> }/>
                    <Route path="/product" element={ <Product/> }/>
                    <Route path="/registration" element={ <Registration/> }/>
                    <Route path="/*" element={ <NotFound/> }/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
