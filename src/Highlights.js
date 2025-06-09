import React from "react";
import Card from './Card';
import greekSalad from './assets/greek-salad-pic.jpeg';
import roastedChicken from './assets/roasted-chicken-pic.jpeg';
import garlicPasta from './assets/garlic-pasta-pic.jpeg';

const Highlights = () => {
    return (
        <section className="hl">
            <div className="hl-top-content">
                <h1 className="hl-title">Specials</h1>
                <button className="hl-button">Online Menu</button>
            </div>
            <div className="hl-bottom-content">
                 <Card
                 image={greekSalad}
                 name="Greek Salad"
                 price="$10.99"
                 description="Crisp lettuce, tomatoes, cucumbers, olives, and feta tossed in a zesty lemon-oregano dressing."/>
                 <Card
                 image={garlicPasta}
                 name="Garlic Pasta"
                 price="$8.79"
                 description="Spaghetti lightly coated in a rich garlic butter and lemon sauce, topped with fresh herbs."/>
                 <Card
                 image={roastedChicken}
                 name="Roasted Chicken"
                 price="$14.99"
                 description="Tender chicken roasted with Mediterranean spices, served with herbed couscous"/>
            </div>
        </section>
    );
}

export default Highlights;
