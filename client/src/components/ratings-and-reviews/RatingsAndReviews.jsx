import React from 'react';
import RatingSummary from './rr-components/RatingSummary';
import ReviewsList from './rr-components/ReviewsList';
import AddReviewForm from './rr-components/AddReviewForm';
import { dataMeta, dataReviews } from './assets/localData';

const RatingsAndReviews = function () {
  return (
    <div>
      <RatingSummary dataMeta={dataMeta} />
      <ReviewsList Reviews={dataReviews} reviewsByStars={dataMeta.ratings} />
      <AddReviewForm />
    </div>
  );
};

export default RatingsAndReviews;
