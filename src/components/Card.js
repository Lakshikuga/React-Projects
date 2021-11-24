import React from 'react';
import CardItem from './CardItem';
import './Card.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out our Services</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem src="images/PR.png" text="Get to know what your customers like"
                        label="Recommendation system" path="/services"/>

                        <CardItem src="images/bI1.png" text="Get to know the profitable products and sell them"
                        label="Analytics" path="/services" />
                    </ul>
                    <ul className="cards_items">
                        <CardItem src="images/ad.jpg" text="Get targeted ADs to reach your customers"
                        label="Ad generation" path="/ads_image"/>

                        <CardItem src="images/VA.jpg" text="Get your virtual assistant to know more about your customers"
                        label="Hello Customers!" path="/services"/>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Cards