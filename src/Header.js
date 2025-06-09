import React from 'react';
import Nav from './Nav';
import logoImage from './assets/little-lemon-logo.png';

const Header = () => {
    return (
        <header className="header-container">
            <img className="header-logo" src={logoImage} alt="little lemon logo" />
            <Nav />
        </header>

    );
}

export default Header;