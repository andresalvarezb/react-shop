import React, { useContext } from 'react';
import OrderItem from '../../components/OrderItem';
import './myOrder.css';

import arrow from "../../assets/icons/arrow.svg"
import AppContext from '../../context/AppContext';

const MyOrder = () => {

    const { state } = useContext(AppContext);

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map(item => <OrderItem key={`orderItem-${item.id}`} product={item} />)}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;