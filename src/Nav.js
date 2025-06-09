import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav-list">
            <li className="home links"><Link to="/">HOME</Link></li>
            <li className="about links"><Link to="/about">ABOUT</Link></li>
            <li className="menu links"><Link to="/highlights">MENU</Link></li>
            <li className="reservation links"><Link to="/booking-page">RESERVATION</Link></li>
            <li className="order-online links"><Link to="/order-online">ORDER ONLINE</Link></li>
            <li className="login links"><Link to="/login">LOGIN</Link></li>
        </ul>

    );
}

export default Nav;