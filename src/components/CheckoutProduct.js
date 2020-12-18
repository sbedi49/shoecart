import React from 'react';
import './CheckoutProduct.css';
import {connect} from "react-redux";



function CheckoutProduct({dispatch,cart,image,id,title,price}) {

    const removeProduct = () => {
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={image} />
            <h2 className="checkoutProduct__title">{title}</h2>
            <p className="checkoutProduct__price">${price}</p>
            <button onClick={removeProduct} className="checkoutProduct__button">Remove Item</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
}

export default connect(mapStateToProps)(CheckoutProduct);
