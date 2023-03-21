import React from 'react';
import RatingSummary from './rr-components/RatingSummary';
import dataMeta from './assets/localData';

const RatingsAndReviews = function () {
  return (
    <div>
      <RatingSummary dataMeta={dataMeta} />
    </div>
  );
};

export default RatingsAndReviews;
