import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import './Footer.css'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Let's explore the beauty of the world</h1>
                    <p>Let's don't miss the 50% discount and explore the beautiful of the world.</p>
                    <button className="get-started-btn">Contact Us</button>
                </div>
                <div className="image-gallery">
                    <img src="/api/placeholder/300/200" alt="Travelers with raised arms" />
                    <img src="/api/placeholder/300/200" alt="Temple on water" />
                    <img src="/api/placeholder/300/200" alt="Hiker with backpack" />
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-column">
                    <h2 className="footer-logo">Foxy Holidays</h2>
                    <p className="footer-description">We take you to happiness</p>
                </div>
                <div className="footer-column">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Booking Plan</h3>
                    <ul>
                        <li><a href="#">Personal Trip</a></li>
                        <li><a href="#">Group Trip</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Further Information</h3>
                    <ul>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2023 Foxy Holidays LTD. All rights reserved.</p>
                <div className="footer-social">
                    <a href="#" className="social-icon"><Instagram size={20} /></a>
                    <a href="#" className="social-icon"><Facebook size={20} /></a>
                    <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    <a href="#" className="social-icon"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;