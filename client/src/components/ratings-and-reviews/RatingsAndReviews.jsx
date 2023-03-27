import React, { useState, useEffect } from 'react';
import RatingSummary from './rr-components/RatingSummary';
import ReviewsList from './rr-components/ReviewsList';
import AddReviewForm from './rr-components/AddReviewForm';
import { dataMeta, dataReviews } from './assets/localData';
import { useAppContext } from '../AppContext';
import RRParse from './RRParse';

const prodId = '40344';

const RatingsAndReviews = function () {

  const product = useAppContext();
  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  const [characteristics, setCharacteristics] = useState({});

  useEffect(() => {
    if (product.state.productId) {
      RRParse.getReviews(product.state.productId, setReviews);
      RRParse.getMeta(product.state.productId, setRatings, setCharacteristics, setRecommended);
    }
  }, [product.state.productId]);

  console.log('reviews: ', reviews);
  console.log('ratings: ', ratings);
  console.log('recommended: ', recommended);
  console.log('characteristics: ', characteristics);
  return (
    <div>
      <RatingSummary dataMeta={dataMeta} />
      <ReviewsList Reviews={dataReviews} reviewsByStars={dataMeta.ratings} />
      <AddReviewForm />
    </div>
  );
};

export default RatingsAndReviews;
