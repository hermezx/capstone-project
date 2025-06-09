import React from "react";

const Testimonials = ({rating, image, name, review}) => {
    return (
        <div className="test-container">
            <p className="rating">{rating}</p>
            <div className="test-mid-content">
                <img src={image} alt="" className="test-image" />
                <p className="test-name">{name}</p>
            </div>
            <p className="test-review">{review}</p>
        </div>

    ); 
}

export default Testimonials;