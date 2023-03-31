import React from 'react';
import styled from 'styled-components';

// css
const SalePriceSpan = styled.span`
  font: 450 1.5em "system-ui";
  color: red;
`;
// text-decoration: ${(props) => props.decoration} || "none";

const OrigPriceSpan = styled.span`
  text-decoration: ${(props) => props.sale || 'none'};
  font-family: "system-ui";
  font-weight: ${(props) => (props.sale ? '275' : '350')};
  font-size: ${(props) => (props.sale ? '1.2em' : '1.5em')};
`;

const PriceName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

export default function Price({ style }) {
  if (Object.keys(style).length > 0) {
    let salePrice = style.sale_price || null;
    let originalPrice = style.original_price || '';
    originalPrice = `$${originalPrice}`;

    if (salePrice !== null) {
      salePrice = `$${salePrice}`;
      return (
        <PriceName>
          <SalePriceSpan>{salePrice}</SalePriceSpan>
          <OrigPriceSpan sale="line-through">{originalPrice}</OrigPriceSpan>
        </PriceName>
      );
    }

    return (
      <PriceName>
        <OrigPriceSpan>{originalPrice.toString()}</OrigPriceSpan>
      </PriceName>
    );
  }

  return (<div />);
}
