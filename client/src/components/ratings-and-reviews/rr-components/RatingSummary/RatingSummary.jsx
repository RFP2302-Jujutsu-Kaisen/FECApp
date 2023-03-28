import React, { useState, useEffect } from 'react';
import Stars from '../Stars';
import RatingBreakdown from '../RatingBreakdown';
import ProductBreakdown from '../ProductBreakdown';

const RatingSummary = function ({ Ratings, Recommended, Characteristics }) {

  const oneStars = Ratings[0];
  const twoStars = Ratings[1] * 2;
  const threeStars = Ratings[2] * 3;
  const fourStars = Ratings[3] * 4;
  const fiveStars = Ratings[4] * 5;
  const countOneStars = Ratings[0];
  const countTwoStars = Ratings[1];
  const countThreeStars = Ratings[2];
  const countFourStars = Ratings[3];
  const countFiveStars = Ratings[4];
  const avgRate = (oneStars + twoStars + threeStars + fourStars + fiveStars)
  / (countOneStars + countTwoStars + countThreeStars + countFourStars + countFiveStars);
  const averageRating = avgRate.toFixed(1);
  const ratingNum = Number(averageRating);

  return (
    <div>
      <div>
        <h2>Ratings Summary</h2>
        <h4>{averageRating}</h4>
        <Stars averageRating={ratingNum} />
      </div>
      <div>
        <RatingBreakdown Recommended={Recommended} Ratings={Ratings} />
      </div>
      <div>
        <ProductBreakdown Characteristics={Characteristics} />
      </div>
    </div>
  );
};

export default RatingSummary;
