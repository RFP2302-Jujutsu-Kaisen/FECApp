import React from 'react';
import { useAppContext } from '../../../AppContext';
import styled from 'styled-components';
import Stars from '../Stars';
import RatingBreakdown from '../RatingBreakdown';
import ProductBreakdown from '../ProductBreakdown';

const RateDecimal = styled.div`
  font-family: system-ui;
  font-size: 50px;
  color: gray;
  margin: 0;
  padding: 0;
`;

const TopBarLeftPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0px;
`;

const RatingSummary = function ({ Recommended, Characteristics }) {
  const product = useAppContext();
  const RatingsArr = product.state.productAvgRating[1];
  const averageRating = product.state.productAvgRating[0];

  return (
    <div>
      <TopBarLeftPanel>
        <RateDecimal>
          {averageRating}
        </RateDecimal>
        <div>
          <Stars />
        </div>
      </TopBarLeftPanel>
      <div>
        <RatingBreakdown Recommended={Recommended} Ratings={RatingsArr} />
      </div>
      <div>
        <ProductBreakdown Characteristics={Characteristics} />
      </div>
    </div>
  );
};

export default RatingSummary;
