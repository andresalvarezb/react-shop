import React, { useContext } from 'react'
import './orderItem.css'

import iconClose from '../../assets/icons/icon_close.png'
import AppContext from '../../context/AppContext';

// ? stateless
function OrderItem({product}) {

    const {removeFromCart} = useContext(AppContext)
    const {images, title, price} = product;

    const handleRemove = item => {
        removeFromCart(item)
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={images[0]} alt={title} />
            </figure>
            <p>{title}</p>
            <p>${price}</p>
            <img src={iconClose} alt="close" onClick={() => handleRemove(product)} />
        </div>
    )
}

export default OrderItem