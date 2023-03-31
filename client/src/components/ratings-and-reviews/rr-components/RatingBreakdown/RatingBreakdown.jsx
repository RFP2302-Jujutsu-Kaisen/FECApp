import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../../../AppContext';
import { Container, Background, Progress, Recommend } from './PercentBars';


const RatingBreakdown = function ({ Recommended }) {
  const product = useAppContext();
  const Ratings = product.state.productAvgRating[1];
  const recoPercent = Math.round((Number(Recommended.true)
  / (Number(Recommended.true)
  + Number(Recommended.false))
  ) * 100);
  if (Ratings) {
    const ratingTotals = Ratings[0] + Ratings[1] + Ratings[2] + Ratings[3] + Ratings[4];
    const oneStars = Math.round((Ratings[0] / ratingTotals) * 100);
    const twoStars = Math.round((Ratings[1] / ratingTotals) * 100);
    const threeStars = Math.round((Ratings[2] / ratingTotals) * 100);
    const fourStars = Math.round((Ratings[3] / ratingTotals) * 100);
    const fiveStars = Math.round((Ratings[4] / ratingTotals) * 100);

    return (
      <div>
        <Recommend>
          {recoPercent}{'% of reviews recommend this product'}
        </Recommend>
        <div>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className="star"
                  fontSize="1.12rem"
                  color={ratingValue <= 5 ? "#F7DC6F" : "#ECF0F1"}
                />
              );
            })}
            <Container>
              <Background />
              <Progress percent={fiveStars} />
            </Container>
          </div>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className="star"
                  fontSize="1.12rem"
                  color={ratingValue <= 4 ? "#F7DC6F" : "#ECF0F1"}
                />
              );
            })}
            <Container>
              <Background />
              <Progress percent={fourStars} />
            </Container>
          </div>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className="star"
                  fontSize="1.12rem"
                  color={ratingValue <= 3 ? "#F7DC6F" : "#ECF0F1"}
                />
              );
            })}
            <Container>
              <Background />
              <Progress percent={threeStars} />
            </Container>
          </div>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className="star"
                  fontSize="1.12rem"
                  color={ratingValue <= 2 ? "#F7DC6F" : "#ECF0F1"}
                />
              );
            })}
            <Container>
              <Background />
              <Progress percent={twoStars} />
            </Container>
          </div>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <FaStar
                  key={i}
                  className="star"
                  fontSize="1.12rem"
                  color={ratingValue <= 1 ? "#F7DC6F" : "#ECF0F1"}
                />
              );
            })}
            <Container>
              <Background />
              <Progress percent={oneStars} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
};

export default RatingBreakdown;
