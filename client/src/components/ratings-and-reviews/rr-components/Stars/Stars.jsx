import React from 'react';
import { QuarterStarStyle } from '../../StyledComponentsRR';
import FullStar from './FullStar';
import EmptyStar from './EmptyStar';

const Stars = function ({ averageRating }) {
  let rating = averageRating;
  const stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push('100%');
    } else if (rating > 0) {
      const empty = Math.abs(0 - rating);
      const quart = Math.abs(0.25 - rating);
      const half = Math.abs(0.5 - rating);
      const three = Math.abs(0.75 - rating);
      const full = Math.abs(1 - rating);
      const closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          stars.push('0$');
          break;
        case quart:
          stars.push('32%');
          break;
        case half:
          stars.push('50%');
          break;
        case three:
          stars.push('68%');
          break;
        case full:
          stars.push('100%');
          break;
        default:
          console.log('OOPS');
          stars.push('0%');
          break;
      }
    } else {
      stars.push('0%');
    }
    rating = rating - 1;
  }

  return (
    <div>
      <h4>Stars Average Review Rating</h4>
      <QuarterStarStyle inputDisplay="block">
        {stars.map((star, i) => {
          return (
            <QuarterStarStyle key={i} inputPosition="relative" inputDisplay="inline-flex" >
              <QuarterStarStyle inputWidth={star} inputOverflow="hidden" inputPosition="absolute">
                <FullStar />
              </QuarterStarStyle>
              <QuarterStarStyle>
                <EmptyStar />
              </QuarterStarStyle>
            </QuarterStarStyle>
        )
      })}
      </QuarterStarStyle>
    </div>
  );
};

export default Stars;
