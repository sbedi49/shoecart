import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import {connect} from "react-redux";



function Checkout({cart}) {
    console.log(cart)
    return (
        <div className="checkout">
            <div className="checkout__box">
            <h1 className="checkout__heading">Checkout Page</h1>
                <div className="checkout__info">
                    <p className="checkout__items">Number of Items: ({cart?.length})</p>
                    <p className="checkout__total">Subtotal:${cart?.reduce((amount,item)=>(+item.price.toFixed(3))+amount,0)}</p>
                    <button className="checkout__button">Proceed to Checkout</button>
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
