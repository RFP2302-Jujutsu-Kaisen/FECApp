import React, { useState, useEffect } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile';

const ReviewsList = function ({ Reviews, reviewsByStars }) {
  const [reviewsCount, setReviewsCount] = useState('');
  const countReviews = (starCount) => {
    let result = 0;
    result = Number.parseInt(starCount['1'], 10)
      + Number.parseInt(starCount['2'], 10)
      + Number.parseInt(starCount['3'], 10)
      + Number.parseInt(starCount['4'], 10)
      + Number.parseInt(starCount['5'], 10);
    setReviewsCount(result);
  };
  useEffect(() => {
    countReviews(reviewsByStars);
  }, []);


  return (
    <div>
      <h2>Reviews List</h2>
      <label htmlFor="sort">{reviewsCount} reviews, sorted by </label>
      <select name="sort" id="sort">
        <option value="Relevence">Relevence</option>
        <option value="Helpful">Helpful</option>
        <option value="Newest">Newest</option>
      </select>
      <ul>
        <ReviewTile />
      </ul>
      <input type="button" value="MORE REVIEWS" />
      <input type="button" value="ADD A REVIEW &#43;" />
    </div>
  );
};

export default ReviewsList;
