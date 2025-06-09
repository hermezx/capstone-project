import React from "react";
import specialDish from './assets/special-dish-pic.jpeg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left-content">
                <h1 className="hero-title">LITTLE LEMON</h1>
                <h2 className="hero-location">CHICAGO</h2>
                <p className="hero-description">A family-owned Mediterranean restaurant that brings traditional flavors with a modern twist. At Little Lemon, we serve fresh, zesty dishes made with love and the finest ingredients. Whether you’re dining in or ordering out, every bite takes you straight to the sun-soaked shores of the Mediterranean.</p>
                <button className="hero-button">Reserve a table!</button>
            </div>
            <div className="hero-right-content">
                <img className="hero-image" src={specialDish} alt="variety of dishes" />
            </div>
            
        </section>
    );
}

export default Hero;