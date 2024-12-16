import React from "react";
import { MdLocalShipping } from 'react-icons/md';
import { IoSearchSharp } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import {Link} from 'react-router-dom';

import './nav.css'


const Nav = ({search, setSearch,searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className="header">
                <div className="top-header">
                    <div className="icon">
                        <MdLocalShipping />
                    </div>
                    <div className="info">
                        <p>Free Shipping when shopping upto $1000</p>
                    </div>

                </div>
                <div className="mid-header">
                    <div className="logo">
                        <img src="image/logo.png" alt="logo"></img>
                    </div>
                    <div className="search-box">
                        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="search"></input>
                        <button onClick={searchproduct}><IoSearchSharp /></button>
                    </div>
                    {
                        isAuthenticated ?
                        // logout button
                            <div className="user">
                                <div className="icon">
                                    <CiLogout />
                                </div>
                                <div className="btn">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                </div>
                            </div>
                            :
                            // login button
                            <div className="user">
                                <div className="icon">
                                    <MdLogin />
                                </div>
                                <div className="btn">
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>
                    }


                </div>
                <div className="last-header">
                    <div className="user-profile">
                        {
                            // user profile will show here
                            isAuthenticated ?
                            <>
                            <div className="icon">
                                <CiUser/>
                            </div>
                            <div className="info">
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            </div>
                           
                            </>
                            :
                            <>
                             <div className="icon">
                                <CiUser/>
                            </div>
                            <div className="info">
                                <p>Please Login</p>
                            </div>
                            </>
                        }
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/shop' className="link">Shop</Link></li>
                            <li><Link to='/cart' className="link">Cart</Link></li>
                            <li><Link to='/about' className="link">About</Link></li>
                            <li><Link to='/contact' className="link">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="offer">
                        <p>flat 10% over all iphone</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav;