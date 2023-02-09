import './Header.scss'
import {Link } from "react-router-dom";


function Header() {

            return(

            <header>
                <Link to = "/" > Logo </Link>
                <Link to = "/contacts" >Контакты</Link>
                <Link to = "/catalog" >Каталог</Link>
                <Link to = "/favorites" >Избранное</Link>
                <Link to = "/basket" >Корзина</Link>
            </header>

        )
}


export default Header