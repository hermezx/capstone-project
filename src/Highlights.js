import React from "react";
import Card from './Card';

const Highlights = () => {
    return (
        <section className="hl">
            <div className="hl-top-content">
                <h1 className="hl-title">Specials</h1>
                <button className="hl-button">Online Menu</button>
            </div>
            <div className="hl-bottom-content">
                 <Card />
                 <Card />
                 <Card />
            </div>
        </section>
    );
}

export default Highlights;
