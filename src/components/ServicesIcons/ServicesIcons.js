import React from "react";
import { Globe, Ticket, DollarSign } from 'lucide-react';
import './ServicesIcons.css';  // Corresponding CSS

function ServicesIcons() {
    return (
        <div className="services">
            <div className="services-container">
                <h1 className="main-heading">How we can help your journey</h1>
                <p className="main-p">Our service which are very comfortable and can make you happy.</p>
                <div className="services-icons">
                    <div className="service-card">
                        <div className="icon-wrapper">
                            <Globe size={40} className="icon" />
                        </div>
                        <h2>Find your destination</h2>
                        <p>Find your travel destination, we have covered all regions in the world.</p>
                    </div>
                    <div className="service-card">
                        <div className="icon-wrapper">
                            <Ticket size={40} className="icon" />
                        </div>
                        <h2>Book a ticket</h2>
                        <p>After finding the trip you want to go to, you can immediately order the ticket.</p>
                    </div>
                    <div className="service-card">
                        <div className="icon-wrapper">
                            <DollarSign size={40} className="icon" />
                        </div>
                        <h2>Pay and explore destination</h2>
                        <p>After you pay, you can immediately enjoy the trip to the destination.</p>
                    </div>
                    <div className="service-card">
                        <div className="icon-wrapper">
                            <DollarSign size={40} className="icon" />
                        </div>
                        <h2>Pay and explore destination</h2>
                        <p>After you pay, you can immediately enjoy the trip to the destination.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesIcons;
