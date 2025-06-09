import React from "react";
import aboutimg1 from './assets/overlap-pic1.jpeg';
import aboutimg2 from './assets/overlap-pic2.jpeg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-left-content">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-slogan">“Bright Flavors. Warm Moments.”</h2>
        <p className="about-description">
          At Little Lemon, we believe food should nourish the soul as much as the body. Founded by two brothers with roots in the coastal towns of southern Italy, our restaurant brings age-old Mediterranean recipes to the heart of Chicago—with a modern flair.
        </p>
      </div>
      <div className="about-right-content">
        <img src={aboutimg1} alt="" className="about-img1" />
        <img src={aboutimg2} alt="" className="about-img2" />
      </div>
    </section>
  );
}

export default About;
