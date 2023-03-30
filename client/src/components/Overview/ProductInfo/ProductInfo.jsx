import React from 'react';
import styled from 'styled-components';

import Stars from '../../ratings-and-reviews/rr-components/Stars';
import Price from './Price';
import ShareMedia from './ShareMedia';

const ProdInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: flex-start;
`;

export default function ProductInfo({ prod, style } = {}) {
  // console.log('prod and style in ProductInfo', style);
  return (
    <ProdInfoWrapper data-testid="pinfoid">
      <div>
        <Stars />
      </div>
      <div>{prod.category}</div>
      <div>{prod.name}</div>
      <Price style={style} />
      <ShareMedia style={style} />
    </ProdInfoWrapper>
  );
}
