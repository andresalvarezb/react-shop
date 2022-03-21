import React, { useState } from 'react'
import './productItem.css'

import addToCartIcon from "../../assets/icons/bt_add_to_cart.svg"

// ? Stateful
function ProductItem({product}) {
    const {images, price, title, } = product
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }

    return (
        <div className="ProductItem">
            <img src={images[0]} alt={title} />
            <div className="product-info">
                <div>
                    <p>${price}</p>
                    <p>{title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={addToCartIcon} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default ProductItem