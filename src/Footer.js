import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
          <div>
            <img src="" alt="" className="footer-image" />
          </div>
                    <div className="doormat-content footer-box">
            <h3 className="footer-title">Doormat Navigation</h3>
            <ul className="footer-list">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="contact-content footer-box">
            <h3 className="footer-title">Contact</h3>
            
            <ul className="footer-list">
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
            
          </div>
          <div className="social-content footer-box">
            <h3 className="footer-title">Social Media Links</h3>
            
              <ul className="footer-list">
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
                   
          </div>
      </footer>
    );
}

export default Footer;