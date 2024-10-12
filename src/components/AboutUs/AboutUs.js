import React from 'react';
import './AboutUs.css';
import { Globe, Plane, Users } from 'lucide-react';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <h2 className="about-us-title">About Us</h2>
                <p className="about-us-description">
                    At Travelbu, we are passionate about making your travel dreams come true. Our mission is to provide seamless, safe, and unforgettable experiences for travelers.
                </p>

                <div className="about-us-stats">
                    <div className="about-us-item">
                        <Globe className="about-us-icon" />
                        <h3>50+ Countries</h3>
                        <p>
                            Explore over 50 destinations with us, each offering a unique cultural and scenic experience.
                        </p>
                    </div>
                    <div className="about-us-item">
                        <Plane className="about-us-icon" />
                        <h3>1000+ Trips Planned</h3>
                        <p>
                            With expertise in planning over 1000 trips, we know how to make your vacation perfect.
                        </p>
                    </div>
                    <div className="about-us-item">
                        <Users className="about-us-icon" />
                        <h3>1M+ Happy Travelers</h3>
                        <p>
                            Join millions of happy travelers who have trusted Travelbu to plan their dream adventures.
                        </p>
                    </div>
                </div>

                <div className="gallery-section">
                    <h3 className="gallery-title">Our Journey in Pictures</h3>
                    <div className="gallery-collage">
                        <img src="/foxy_images/foxy1.jpg" alt="Destination 1" className="gallery-image img1" />
                        <img src="/foxy_images/foxy2.jpg" alt="Destination 2" className="gallery-image img2" />
                        <img src="/foxy_images/foxy3.jpg" alt="Destination 3" className="gallery-image img3" />
                        <img src="/foxy_images/foxy4.jpg" alt="Destination 4" className="gallery-image img4" />
                        <img src="/foxy_images/foxy5.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy6.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy7.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy8.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy9.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy10.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy11.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy12.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy13.jpg" alt="Destination 5" className="gallery-image img5" />
                        <img src="/foxy_images/foxy14.jpg" alt="Destination 5" className="gallery-image img5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
