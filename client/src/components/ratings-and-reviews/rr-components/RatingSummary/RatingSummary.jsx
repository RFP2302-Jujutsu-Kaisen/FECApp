import React, { useState, useEffect } from 'react';
import Stars from '../RatingSummary';

const RatingSummary = function ({ dataMeta }) {

  const [averageRating, setAverageRating] = useState(0.0);
  const getStarAverage = (meta) => {
    const oneStars = Number.parseInt(meta.dataMeta.ratings['1']);
    const twoStars = meta.dataMeta.ratings['2'] * 2;
    const threeStars = meta.dataMeta.ratings['3'] * 3;
    const fourStars = meta.dataMeta.ratings['4'] * 4;
    const fiveStars = meta.dataMeta.ratings['5'] * 5;
    const countOneStars = Number.parseInt(meta.dataMeta.ratings['1']);
    const countTwoStars = Number.parseInt(meta.dataMeta.ratings['2']);
    const countThreeStars = Number.parseInt(meta.dataMeta.ratings['3']);
    const countFourStars = Number.parseInt(meta.dataMeta.ratings['4']);
    const countFiveStars = Number.parseInt(meta.dataMeta.ratings['5']);
    let result = (oneStars + twoStars + threeStars + fourStars + fiveStars)
    / (countOneStars + countTwoStars + countThreeStars + countFourStars + countFiveStars);
    result = result.toFixed(1);
    setAverageRating(result);
  };
  useEffect(() => {
    return getStarAverage({ dataMeta });
  }, []);

  return (
    <div>
      <h3>Ratings Summary</h3>
      <h4>{averageRating}</h4>
    </div>
  );
};

export default RatingSummary;
