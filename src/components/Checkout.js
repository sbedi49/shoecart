import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import {connect} from "react-redux";


function Checkout({cart}) {
    console.log(cart)
    return (
        <div className="checkout">
            <div className="checkout__box">
                <div className="checkout__info">
                    <p className="checkout__items">Number of Items: ({cart?.length})</p>
                    <p className="checkout__total">Your total is:${cart?.reduce((amount,item)=>(+item.price.toFixed(3))+amount,0)}</p>
                </div>
            <div className="item__list">
            
                {cart?.map(item => {
                    return (
                    <CheckoutProduct 
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    image = {item.image} /> )
                })}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {cart:state.cart}
}



export default connect(mapStateToProps)(Checkout);
