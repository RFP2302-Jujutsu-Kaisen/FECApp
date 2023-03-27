import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { QuarterStarStyle } from '../../StyledComponentsRR';
import FullStar from './FullStar';
import EmptyStar from './EmptyStar';

const SingleStarOutline = styled.div`
  height: 36px;
  width: 31px;
  `;
const SingleStarFill = styled.div`
  position: relative;
  display: inline-block;
  height: 36px;
  background-color: #333333;
  `;
const SingleStarContainer = styled.div`
  height: 36px;
  width: 31px;
  `;

const Stars = function ({ averageRating }) {
// Work in progress to calc quarter stars
  const testRenderStars = Number(averageRating);

  // console.log('averageRating: ', averageRating);
  // console.log('{ averageRating }: ', {averageRating});
  // console.log('testRenderStars: ', testRenderStars);
  const [starValues, setStarValues] = useState([]);
  const MakeQuarterStarsArray = function (ratingNum) {
    let rating = ratingNum;
    // console.log('rating: ', rating);
    let stars = [];
    while (stars.length < 5) {
      if (rating > 1) {
        stars.push(1);
      } else if (rating > 0) {
        const empty = Math.abs(0 - rating);
        const quart = Math.abs(0.25 - rating);
        const half = Math.abs(0.5 - rating);
        const three = Math.abs(0.75 - rating);
        const full = Math.abs(1 - rating);
        const closest = Math.min(empty, quart, half, three, full);
        switch (closest) {
          case (empty):
            stars.push(0);
            break;
          case quart:
            stars.push(0.28);
            break;
          case half:
            stars.push(0.5);
            break;
          case three:
            stars.push(0.72);
            break;
          case full:
            stars.push(1.0);
            break;
          default:
            console.log('OOPS');
            stars.push(0);
            break;
        }
      } else {
        stars.push(0);
      }
      rating -= rating;
    }
    // console.log('stars: ', stars);
    setStarValues(stars);
}


// console.log('starValues: ', starValues);

  return (
    <div>
      <h4>Stars Average Review Rating</h4>
      <div>
        {[100, 50, 100, 30, 0].map((star, i) => {
          const ratingValue = star;
          return (
          <QuarterStarStyle fillwidth="100%" key={i} >
            <FaStar />
          </QuarterStarStyle>
          );
        })}
      </div>
      <span position="relative" display="inline-flex" text-align="left">
      <span position="absolute" overflow="hidden" width="50%">
        <FullStar />
      </span>
      <span>
        <EmptyStar />
      </span>
      </span>
    </div>
  );
};

export default Stars;
