import React, { useContext } from 'react'
import './productItem.css'

import addToCartIcon from "../../assets/icons/bt_add_to_cart.svg"
import AppContext from '../../context/AppContext'

// ? Stateful
function ProductItem({ product }) {
    const { images, price, title, } = product

    const {addToCart} = useContext(AppContext);

    const handleClick = item => {
        addToCart(item)
    }

    return (
        <div className="ProductItem">
            <img src={images[0]} alt={title} />
            <div className="product-info">
                <div>
                    <p>${price}</p>
                    <p>{title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addToCartIcon} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default ProductItem