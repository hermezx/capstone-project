import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Footer from './Footer';
import Testimonial from './Testimonial';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Highlights />
            <Testimonial />
            <About />
            <Footer />
        </div>
    );
}

export default Homepage;