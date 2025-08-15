import React from 'react';
import './HeroSection.css';

const destinations = [
  '/foxy_images/foxy1.jpg',
  '/foxy_images/foxy2.jpg',
  '/foxy_images/foxy3.jpg',
  '/foxy_images/foxy4.jpg',
  '/foxy_images/foxy5.jpg',
  '/foxy_images/foxy6.jpg',
];

function HeroSection() {
  return (
    <section className="hero-section-polished">
      <div className="hero-content-polished">
        <h1 className="hero-title-polished">
          Make Your <span className="highlight">Summer Vacation</span><br />Unforgettable!
        </h1>
        <p className="hero-subtitle-polished">
          Get your dream trip planned with expert-guided destinations, booking, transport & more — all in one.
        </p>
        <button className="hero-cta-polished">Start Planning</button>
      </div>
      <div className="hero-destinations-row">
        {destinations.map((src, idx) => (
          <img key={idx} src={src} alt="Destination" className="hero-destination-img" />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
