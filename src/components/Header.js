import React from 'react'
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


function Header({cart}) {
    
    return (
        <div className="header">
            <div className="header__navbar">
            
                <h1 className="header__logo">shoecart</h1>
            <Link className="link" to ="/">
                <a href="#" className="header__link">products</a>
            </Link>

            <Link className="link" to="/checkout">
                <div className="navbar__cart">
                    <ShoppingCartIcon className="cart" />
                    <span>{cart?.length}</span>
                </div>
             </Link>
            </div>

           <div className="background">
                <div className="background__info">
                    <h1 className="background__title">shoecart</h1>
                    <div className="background__buttons">
                        <button className="background__signin">Sign-In</button>
                        <button className="background__signup">Sign-Up</button>
                    </div>
                </div>
           </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cart:state.cart}
}

export default connect(mapStateToProps)(Header);
