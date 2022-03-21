import React from 'react'
import './orderItem.css'

import iconClose from '../../assets/icons/icon_close.png'

// ? stateless
function OrderItem({product}) {
    const {images, title, price} = product;
    return (
        <div className="OrderItem">
            <figure>
                <img src={images[0]} alt={title} />
            </figure>
            <p>{title}</p>
            <p>${price}</p>
            <img src={iconClose} alt="close" />
        </div>
    )
}

export default OrderItem