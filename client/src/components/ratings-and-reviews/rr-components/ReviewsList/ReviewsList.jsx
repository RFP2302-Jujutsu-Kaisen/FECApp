import React, { useState, useEffect } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile';
import ListStyle from './ReviewsListStyles';

const ReviewsList = function ({ Reviews, reviewsByStars }) {
  const reviewsData = Reviews;
  const reviewsCount = (reviewsByStars[0] + reviewsByStars[1] + reviewsByStars[2] + reviewsByStars[3] + reviewsByStars[4]);
  const listItems = reviewsData.map((review) =>
    <ReviewTile key={review.review_id} reviewData={review} />
  );

  return (
    <div>
      <h2>Reviews List</h2>
      <label htmlFor="sort">{reviewsCount} reviews, sorted by </label>
      <select name="sort" id="sort">
        <option value="Relevence">Relevence</option>
        <option value="Helpful">Helpful</option>
        <option value="Newest">Newest</option>
      </select>
      <ListStyle>{listItems}</ListStyle>
      <input type="button" value="MORE REVIEWS" />
      <input type="button" value="ADD A REVIEW &#43;" />
    </div>
  );
};

export default ReviewsList;
