import React, { useState, useEffect } from 'react';
import RatingSummary from './rr-components/RatingSummary';
import ReviewsList from './rr-components/ReviewsList';
import AddReviewForm from './rr-components/AddReviewForm';
import { useAppContext } from '../AppContext';
import RRParse from './RRParse';
import { RatingsAndReviewsContainer, RRFlex, Model, RRBoxLeft, RRBoxRight } from './StyledComponentsRR';

const RatingsAndReviews = function () {
  const product = useAppContext();
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [recommended, setRecommended] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  useEffect(() => {
    if (product.state.productId) {
      RRParse.getReviews(product.state.productId, setReviews);
      RRParse.getMeta(product.state.productId, setRatings, setCharacteristics, setRecommended);
    }
  }, [product.state.productId]);

  return (
    <RatingsAndReviewsContainer>
      <div>Ratings & Reviews</div>
      <RRFlex>
        <RRBoxLeft>
          <RatingSummary
            Ratings={ratings}
            Recommended={recommended}
            Characteristics={characteristics}
          />
        </RRBoxLeft>
        <RRBoxRight>
          <ReviewsList Reviews={reviews} reviewsByStars={ratings} />
        </RRBoxRight>
      </RRFlex>
      <Model>
        <AddReviewForm />
      </Model>
    </RatingsAndReviewsContainer>
  );
};

export default RatingsAndReviews;
