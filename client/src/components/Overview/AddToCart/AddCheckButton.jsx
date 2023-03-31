import React from 'react';
import styled from 'styled-components';

const AddCartWrapper = styled.button`
background: rgb(220,20,60);
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

&:hover {
  background: rgb(178,34,34);
}
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
