import React from 'react'
import './order.css'

import arrow from "../../assets/icons/arrow.svg";

function Order() {
    return (
        <div className="Order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
        </div>
    )
}

export default Order