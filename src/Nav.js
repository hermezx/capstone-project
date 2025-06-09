import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav-list">
            <li className="home"><Link to="/">HOME</Link></li>
            <li className="about"><Link to="/about">ABOUT</Link></li>
            <li className="menu"><Link to="/highlights">MENU</Link></li>
            <li className="reservation"><Link to="/booking-page">RESERVATION</Link></li>
            <li className="order-online">ORDER ONLINE</li>
            <li className="login">LOGIN</li>
        </ul>

    );
}

export default Nav;