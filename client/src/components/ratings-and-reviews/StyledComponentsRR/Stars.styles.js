import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
console.log(FaStar);


const star = () => {
  return (
  <FaStar />);
};
console.log(star);

export const QuarterStarStyle = styled.span`
 & {
  display: inline-block;
  position: relative;
  font-size: 50px;
  color: #ECF0F1;
 }
 &:after {

  content: '""',
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => props.fillwidth}%;
  overflow: hidden;
  color: #F7DC6F;

}`;


