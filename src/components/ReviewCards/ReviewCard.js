import React from 'react';
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

export default ReviewCard;
