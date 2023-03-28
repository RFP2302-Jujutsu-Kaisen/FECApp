import React from 'react';
import { Container, Background, Progress } from './PercentBars';


const RatingBreakdown = function ({ Recommended, Ratings }) {
  const recoPercent = Math.round((Number.parseInt(Recommended.true) / (Number.parseInt(Recommended.true) + Number.parseInt(Recommended.false))) * 100);
  console.log(recoPercent);

  const ratingTotals = Ratings[0] + Ratings[1] + Ratings[2] + Ratings[3] + Ratings[4];
  const oneStars = Math.round((Ratings[0] / ratingTotals) * 100);
  const twoStars = Math.round((Ratings[1] / ratingTotals) * 100);
  const threeStars = Math.round((Ratings[2] / ratingTotals) * 100);
  const fourStars = Math.round((Ratings[3] / ratingTotals) * 100);
  const fiveStars = Math.round((Ratings[4] / ratingTotals) * 100);

  return (
    <div>
      <div>
        <h4>Rating Breakdown</h4>
      </div>
      <div>
        <p>{recoPercent}% of reviews recommend this product</p>
      </div>
      <div>
        <div>
          5 Stars:
          <Container>
            <Background />
            <Progress percent={fiveStars} />
          </Container>
        </div>
        <div>
          4 stars:
          <Container>
            <Background />
            <Progress percent={fourStars} />
          </Container>
        </div>
        <div>
          3 stars:
          <Container>
            <Background />
            <Progress percent={threeStars} />
          </Container>
        </div>
        <div>
          2 stars:
          <Container>
            <Background />
            <Progress percent={twoStars} />
          </Container>
        </div>
        <div>
          1 stars:
          <Container>
            <Background />
            <Progress percent={oneStars} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RatingBreakdown;
