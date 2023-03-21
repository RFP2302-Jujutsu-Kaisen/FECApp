import React, { useState } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile';

const ReviewsList = function ({ Reviews, reviewsByStars }) {
  console.log({dataMeta});
  const [reviewsCount, setReviewsCount] = useState('');
  const countReviews = (starCount) => {
    const result = starCount['1']
      + starCount['2']
      + starCount['3']
      + starCount['4']
      + starCount['5'];
    setReviewsCount(result);
  };
  countReviews(reviewsByStars);
  console.log(reviewsCount);

  return (
    <div>
      <h2>Reviews List</h2>
      <label htmlFor="sort">100 reviews, sorted by </label>
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
