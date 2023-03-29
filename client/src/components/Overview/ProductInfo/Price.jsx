import React from 'react';
import styled from 'styled-components';

// css
const SalePriceSpan = styled.span`
  color: red;
`;
// text-decoration: ${(props) => props.decoration} || "none";

const OrigPriceSpan = styled.span`
  text-decoration: ${(props) => props.sale || 'none'};

`;

export default function Price({ style }) {
  if (Object.keys(style).length > 0) {
    const salePrice = style.sale_price || null;
    const originalPrice = style.original_price || '';

    if (salePrice !== null) {
      return (
        <div>
          <div>
            <SalePriceSpan>{salePrice.toString()}</SalePriceSpan>
            <OrigPriceSpan sale="line-through">{originalPrice.toString()}</OrigPriceSpan>
          </div>

        </div>
      );
    }

    return (
      <div>
        <OrigPriceSpan>{originalPrice.toString()}</OrigPriceSpan>
      </div>
    );
  }

  return (<div />);
}
