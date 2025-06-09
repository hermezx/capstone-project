import React from "react";

const Card = () => {
    return (
         <div className="card-container">
            <img className="card-image" src="" alt="" />
            <div className="card-content">
                <div className="card-top-content">
                    <h3 className="card-name">Greek Salad</h3>
                    <p className="card-price">$10.99</p>

                </div>
                <div className="card-bottom-content">
                    <p className="card-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus itaque minima est iste pariatur autem vero voluptates, quaerat explicabo distinctio nisi facere molestias eum quo neque, esse nihil repellendus.
                    </p>
                    <div className="card-link">
                        <p>Order a delivery</p>
                        <p>Icon</p>
                    </div>
                </div>

                

            </div>
        </div>
            
    );
}

export default Card;