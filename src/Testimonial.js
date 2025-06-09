import React from "react";
import Testimonials from './Testimonials';
import rater1 from './assets/rater-1.jpeg';
import rater2 from './assets/rater-2.jpeg';
import rater3 from './assets/rater-3.jpg';
import rater4 from './assets/rater-4.jpg';


const Testimonial = () => {
    return (
        <section className="testimonials">
            <Testimonials 
            rating="☆☆☆☆☆"
            image={rater1}
            name="Arthur"
            review="“So fresh and zesty—it tastes like summer in every bite!”"/>
            <Testimonials 
            rating="☆☆☆☆"
            image={rater2}
            name="Jessie"
            review="“Creamy, tangy, and full of flavor—this pasta is a Mediterranean dream!”"/>
            <Testimonials 
            rating="☆☆☆☆☆"
            image={rater4}
            name="Jonathan"
            review="“Perfectly seasoned and juicy, the roasted chicken melted in my mouth.”"/>
            <Testimonials 
            rating="☆☆☆☆☆"
            image={rater3}
            name="Anna"
            review="“The lemon tart was the perfect sweet and citrusy finish to my meal!”"/>
        </section>

    );
}

export default Testimonial;