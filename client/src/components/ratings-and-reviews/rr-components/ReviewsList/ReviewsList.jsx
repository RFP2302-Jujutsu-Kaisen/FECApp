import React, { useState } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile';
import { ReviewsContainer, ListStyle } from './ReviewsListStyles';

const ReviewsList = function ({ Reviews, reviewsByStars }) {
  const reviewsData = Reviews;
  const [reviewsLength, setReviewsLength] = useState(2);
  const reviewsCount = (reviewsByStars[0]
    + reviewsByStars[1]
    + reviewsByStars[2]
    + reviewsByStars[3]
    + reviewsByStars[4]
  );

  const loadMoreReviews = () => {
    setReviewsLength(reviewsLength + 2);
  };

  const listItems = reviewsData.slice(0, reviewsLength).map((review) =>
    <ReviewTile key={review.review_id} reviewData={review} />
  );

  return (
    <div>
      <label htmlFor="sort">
        {reviewsCount}
        {'reviews, sorted by '}
      </label>
      <select name="sort" id="sort">
        <option value="Relevence">Relevence</option>
        <option value="Helpful">Helpful</option>
        <option value="Newest">Newest</option>
      </select>
      <ReviewsContainer>
        <ListStyle>{listItems}</ListStyle>
      </ReviewsContainer>
      <input type="button" value="MORE REVIEWS" onClick={loadMoreReviews} />
      <input type="button" value="ADD A REVIEW &#43;" />
    </div>
  );
};

export default ReviewsList;
