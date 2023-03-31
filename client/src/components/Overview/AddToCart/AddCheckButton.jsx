import React from 'react';
import styled from 'styled-components';

const AddCartWrapper = styled.button`
background: crimson;
width: 100%;
height: 100%;
color: ghostwhite;
cursor: pointer;
border: 1px solid crimson;
border-radius: 5px;
text-align: center;
font-size: 1.5em;
font-family: system-ui;
font-weight: 400;
`;

export default function AddCheckButton({ checkHandler }) {
  return (
    <div>
      <AddCartWrapper
        type="button"
        onClick={checkHandler}
      >
        Add to Cart
      </AddCartWrapper>
    </div>
  );
}
