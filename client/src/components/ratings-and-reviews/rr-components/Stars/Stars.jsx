import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

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
  const [testRenderStars] = useState(averageRating);
  let rating = { averageRating };
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
  return (
    <div>
      <h4>Stars Average Review Rating</h4>
      <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={i}
                className="star"
                /*Change this hardcode 3 to render to quarter star*/
                color={ratingValue <= 3 ? "#F7DC6F" : "#ECF0F1"}
              />
            )
          })}
        </div>
    </div>
  );
};

export default Stars;
