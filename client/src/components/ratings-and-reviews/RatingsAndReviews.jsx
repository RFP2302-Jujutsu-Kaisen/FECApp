import { React, useState } from 'react';
import RatingSummary from './rr-components/RatingSummary';
import data from './assets/localData';





const RatingsAndReviews = () => {
  const [summaryData, setSummaryData] = useState(data);

  return (
    <div className="RatingsAndReviews" >
      <h2>Component: Ratings and Reviews</h2>
      <RatingSummary data={summaryData} />
    </div>
  )
}


export default RatingsAndReviews;