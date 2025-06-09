import React from "react";
import { MdDeliveryDining } from 'react-icons/md'

const Card = ({image, name, price, description}) => {
    return (
         <div className="card-container">
            <img className="card-image" src={image} alt="" />
            <div className="card-content">
                <div className="card-top-content">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-price">{price}</p>

                </div>
                <div className="card-bottom-content">
                    <p className="card-description">
                        {description}
                    </p>
                    <div className="card-link">
                        <p>Order a delivery</p>
                        <MdDeliveryDining size={12} color="#555" title="Delivery available" />
                    </div>
                </div>

                

            </div>
        </div>
            
    );
}

export default Card;