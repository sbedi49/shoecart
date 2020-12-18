import React from 'react';
import './Card.css';
import { connect } from "react-redux";
import {store} from '../index';

function Card({dispatch,cart,id,title,rating,price,image}) {

    const addtoCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id,
                title:title,
                price:price,
                image:image
            }
        })
        console.log(store.getState());
    }


    return (
        <div className="card">
            <img className="card__img" src={image} alt="shoe" />
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card__details">
                <p className="card__price">${price}</p>
                {Array(rating).fill().map((_,i)=>(
                        <p className="card__rating">⭐</p>
                    ))}
                
            </div>
            <button onClick={addtoCart} className="card__button">Add to Cart</button>
        </div>

        
    )
}

const mapStateToProps  = state => {
    return {cart:state.cart}
};

export default connect(mapStateToProps)(Card)
