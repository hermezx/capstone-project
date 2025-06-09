import Header from './Header';
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Footer from './Footer';
import Testimonial from './Testimonial';
import {Routes, Route} from 'react-router-dom';

import React, { Fragment } from 'react';

import './App.css';

function App() {
  return (

      <Fragment>
        <Header />
        <Hero />
        <Highlights />
        <Testimonial />
        <About />
        <Footer />
      </Fragment>    
  );
}

export default App;
