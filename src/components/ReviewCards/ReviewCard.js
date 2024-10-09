import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ rating, review, author, image, isActive, opacity }) => {
  return (
    <div className="review-card" style={{ opacity }}>
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
        <img src={image} alt={`${author}'s profile`} className="author-image" />
        <span className="author-name">{author}</span>
      </div>
    </div>
  );
};

const ReviewCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const carouselRef = useRef(null);

  const reviews = [
    { rating: 5, review: "Great service and easy to use. Will definitely use again for future trips.", author: "Lisa Thompson", image: "/path/to/lisa-image.jpg" },
    { rating: 5, review: "Great service and easy to use. Will definitely use again for future trips.", author: "Lisa Thompson", image: "/path/to/lisa-image.jpg" },
    { rating: 5, review: "Great service and easy to use. Will definitely use again for future trips.", author: "Lisa Thompson", image: "/path/to/lisa-image.jpg" },
    { rating: 5, review: "An easy-to-use app for booking and exploring. Highly recommended for travelers.", author: "Erin Franci", image: "/path/to/erin-image.jpg" },
    { rating: 5, review: "Very helpful, it is easy for booking and exploring for travelers.", author: "Jaydon Aminoff", image: "/path/to/jaydon-image.jpg" },
    { rating: 5, review: "I found many vacation choices. This tour guide is reliable and I highly recommend it.", author: "Craig Kenter", image: "/path/to/craig-image.jpg" },
    { rating: 5, review: "Great service and easy to use. Will definitely use again for future trips.", author: "Lisa Thompson", image: "/path/to/lisa-image.jpg" },
  ];


  useEffect(() => {
    const scrollToCenter = () => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.children[0].offsetWidth; // Get width of the first item
        const carouselWidth = carouselRef.current.offsetWidth; // Get the visible width of the carousel
        const numberOfItems = reviews.length;

        // Calculate the scroll position to center the middle card
        const middleIndex = Math.floor(numberOfItems / 2); // Get the middle card index
        const middleScrollPosition = (middleIndex * itemWidth) - (carouselWidth / 2) + (itemWidth / 2);

        // Scroll the carousel to the calculated position
        carouselRef.current.scrollLeft = middleScrollPosition;

        // Set the initial active index as the middle card
        setActiveIndex(middleIndex);
      }
    };

    scrollToCenter(); // Scroll to center on load

    // Attach the scroll event listener to update the active index on scroll
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const carouselWidth = carouselRef.current.offsetWidth;
        const itemWidth = carouselRef.current.children[0].offsetWidth;

        // Calculate the center position of the carousel
        const centerPosition = scrollPosition + carouselWidth / 2;
        const newActiveIndex = Math.floor(centerPosition / itemWidth);

        setActiveIndex(newActiveIndex);
      }
    };

    carouselRef.current.addEventListener('scroll', handleScroll);
    return () => carouselRef.current.removeEventListener('scroll', handleScroll);
  }, [reviews]); // Re-run the effect if the `reviews` array changes



  const calculateOpacity = (index) => {
    const distance = Math.abs(index - activeIndex);
    return distance === 0 ? 1 : Math.max(0.4, 1 - distance * 0.8);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Loved by over a million travelers</h2>
      <div className="carousel" ref={carouselRef}>
        {reviews.map((review, index) => (
          <div key={index} className="carousel-item">
            <ReviewCard {...review} isActive={index === activeIndex} opacity={calculateOpacity(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCardCarousel;
