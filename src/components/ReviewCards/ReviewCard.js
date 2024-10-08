import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import './ReviewCard.css'

const ReviewCard = ({ rating, review, author }) => {
  return (
    <div className="review-card">
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={20}
            className={i < rating ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>
      <p className="review-text">{review}</p>
      <div className="author-info">
        <img src='#'></img>
        <span className="author-name">{author}</span>
      </div>
    </div>
  );
};

const ReviewCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef(null);

  const reviews = [
    {
      rating: 5,
      review: "An easy-to-use app for booking and exploring. Highly recommended for travelers.",
      author: "Erin Francis",
    },
    {
      rating: 5,
      review: "Very helpful, it is easy for booking and exploring for travelers.",
      author: "Jayden Aminoff",
    },
    {
      rating: 3,
      review: "I found many vacation choices. This tour guide is reliable and I highly recommend it.",
      author: "Craig Kenter",
    },
    {
      rating: 5,
      review: "Great service and easy to use. Will definitely use again for future trips.",
      author: "Lisa Thompson",
    },
    {
      rating: 5,
      review: "Great service and easy to use. Will definitely use again for future trips.",
      author: "Lisa Thompson",
    },
    {
        rating: 5,
        review: "Great service and easy to use. Will definitely use again for future trips.",
        author: "Lisa Thompson",
    },
    {
        rating: 5,
        review: "Great service and easy to use. Will definitely use again for future trips.",
        author: "Lisa Thompson",
    },
    {
        rating: 5,
        review: "Great service and easy to use. Will definitely use again for future trips.",
        author: "Lisa Thompson",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.offsetWidth / 3;
        const newActiveIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newActiveIndex);
      }
    };

    carouselRef.current.addEventListener('scroll', handleScroll);
    return () => carouselRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Loved by over million travelers</h2>
      <div className="carousel" ref={carouselRef}>
        {reviews.map((review, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCardCarousel;