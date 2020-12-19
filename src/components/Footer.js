import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="contact">
                <div className="contact__left">
                    <h2 className="contact__left__logo">shoecart</h2>
                </div>
                <div className="contact__center">
                    <h1 className="contact__center cta">Signup for our Newsletter</h1>
                    <input placeholder="Email..." className="contact__center btn"></input>
                </div>
                <div className="contact__right">
                    <h3 className="contact__right__info">Follow Us:</h3>
                    <div className="contact__right__socials">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
