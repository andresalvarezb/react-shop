import React, { useState } from 'react'
import './header.css'

import menu from '../../assets/icons/icon_menu.svg';
import logo from '../../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../../assets/icons/icon_shopping_cart.svg';
import Menu from '../Menu';

// ? Stateful
function Header() {
const [toggle, setToggle] = useState(false)

const handleToggle = () => {
    setToggle(!toggle)
}

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furniture</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
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
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {
                toggle && <Menu/>
            }
        </nav>
    )
}

export default Header