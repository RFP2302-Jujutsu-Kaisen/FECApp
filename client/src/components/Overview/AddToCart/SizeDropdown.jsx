import React from 'react';
import styled from 'styled-components';

const SizeWrapper = styled.select`
  outline: 0;
  background: ghostwhite;
  background-image: none;
  width: 100%;
  height: ${(props) => (props.buttonCheck ? '250%' : '100%')};
  color: black;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-size: 1.3em;
  font-family: system-ui;
  font-weight: 450;
  position: absolute;

  &:hover {
    border: 2px solid black;
  }
`;

const SizeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default function SizeDropdown({
  skus, inStockSkus, skuHandler, skuState, buttonCheck,
}) {
  if (buttonCheck) {
    return (
      <SizeContainer>
        <SizeWrapper
          data-testid="sizeCheckId"
          name="sizedropdown"
          onChange={skuHandler}
          size={String(inStockSkus.length)}
          value={skuState}
          buttonCheck={buttonCheck}
        >
          <option key="default" value="">Select Size</option>
          {inStockSkus.map((key) => (
            <option key={key} value={key}>{skus[key].size}</option>
          ))}
        </SizeWrapper>
      </SizeContainer>
    );
  }
  return (
    <SizeContainer>
      <SizeWrapper
        data-testid="sizeId"
        name="sizedropdown"
        onChange={skuHandler}
        value={skuState}
        buttonCheck={buttonCheck}
      >
        <option key="default" value="">Select Size</option>
        {inStockSkus.map((key) => (
          <option key={key} value={key}>{skus[key].size}</option>
        ))}
      </SizeWrapper>
    </SizeContainer>
  );
}
