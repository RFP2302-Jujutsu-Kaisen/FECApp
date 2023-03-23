import React from 'react';
import styled from 'styled-components';
import star from '../../assets/star.png';

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

  let rating = 5; //{ averageRating } || 0;
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
        {stars.map((item, i) => {
          return (
            <SingleStarContainer key={i}>
              <div>
              <SingleStarFill style={{"width" : `${parseInt(item*31)}px`}}>
                <div>
                <SingleStarOutline>
                  <div>
                  <span>&#8213;</span>
                  </div>
                </SingleStarOutline>
                </div>
              </SingleStarFill>
              </div>
            </SingleStarContainer>
          );
        })}
    </div>
    </div>
  );
};

export default Stars;
