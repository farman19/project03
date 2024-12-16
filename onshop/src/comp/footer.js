import React from "react";
import './footer.css';
import { FaPiggyBank, FaShippingFast,FaHeadphonesAlt, FaWallet } from "react-icons/fa";



const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon">
                            <FaPiggyBank/>
                        </div>
                        <div className="detail">
                           <h3>Great Saving</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaShippingFast/>
                        </div>
                        <div className="detail">
                        <h3> Fast delivery</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaHeadphonesAlt/>
                        </div>
                        <div className="detail">
                        <h3>24/7 support</h3>
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaWallet/>
                        </div>
                        <div className="detail">
                        <h3>money bank</h3> 
                            <p>Lorem ipsum dolor sit amet,</p>
                        </div>
                    </div>
                    
                </div>
                <div className="right-box">
                    <div className="header">
                        <img src="image/logo.png" alt=""></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  etc.</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New Product</li>
                                <li>old Product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Contact us</h3>
                            <ul>
                                <li>4005, Silver Business Point India</li>
                                <li>+91 1800-938-800</li>
                                <li>ontexo@gamil.com</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;