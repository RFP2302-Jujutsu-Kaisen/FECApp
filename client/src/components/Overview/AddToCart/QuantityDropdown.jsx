import React from 'react';
import styled from 'styled-components';

const QuantityWrapper = styled.select`
outline: 0;
background: ghostwhite;
background-image: none;
width: 100%;
height: 100%;
color: ${(prop) => (prop.sizeDone ? 'black' : 'gray')};
cursor: pointer;
border: ${(prop) => (prop.sizeDone ? '1px solid black' : '1px solid gray')};
border-radius: 5px;
text-align: center;
font-size: 1.3em;
font-family: system-ui;
font-weight: 450;
opacity: ${(prop) => (prop.sizeDone ? '1.0' : '0.7')};

&:hover {
  border: ${(prop) => (prop.sizeDone ? '2px solid black' : '1px solid gray')};
}
`;

export default function QuantityDropdown({ sku, quantityHandler }) {
  const optionsArr = [];
  const choices = Object.keys(sku).length > 0 ? Math.min(sku.quantity, 15) : 0;
  for (let i = 1; i <= choices; i += 1) {
    optionsArr.push(<option key={i} value={i}>{i}</option>);
  }

  if (optionsArr.length > 0) {
    return (
      <div>
        <QuantityWrapper sizeDone={true} data-testid="quantityId" name="quantitydropdown" onChange={quantityHandler}>
          {optionsArr}
        </QuantityWrapper>
      </div>
    );
  }
  return (
    <div>
      <QuantityWrapper sizeDone={false} data-testid="defQuantityId" name="quantitydropdown" disabled>
        <option key="default" value="default">-</option>
      </QuantityWrapper>
    </div>
  );
}
