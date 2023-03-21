import React from 'react';
import RatingSummary from './rr-components/RatingSummary';
import ReviewsList from './rr-components/ReviewsList';
import AddReviewForm from './rr-components/AddReviewForm';
import dataMeta from './assets/localData';

const RatingsAndReviews = function () {
  return (
    <div>
      <div>
        <RatingSummary dataMeta={dataMeta} />
      </div>
      <div>
        <ReviewsList />
      </div>
      <div>
        <AddReviewForm />
      </div>
    </div>
  );
};

export default RatingsAndReviews;