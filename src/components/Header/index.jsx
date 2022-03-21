import React, { useContext, useState } from 'react'
import './header.css'

import iconMenu from '../../assets/icons/icon_menu.svg';
import logo from '../../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../../assets/icons/icon_shopping_cart.svg';
import Menu from '../Menu';
import AppContext from '../../context/AppContext';

// ? Stateful
function Header() {
    const [toggle, setToggle] = useState(false)
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav>
            <img src={iconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li> <a href="/">All</a> </li>
                    <li> <a href="/">Clothes</a> </li>
                    <li> <a href="/">Electronics</a> </li>
                    <li> <a href="/">Furniture</a> </li>
                    <li> <a href="/">Toys</a> </li>
                    <li> <a href="/">Others</a> </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email"
                        onClick={handleToggle}
                    >
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {
                toggle && <Menu />
            }
        </nav>
    )
}

export default Header