import React from 'react';
import styled from 'styled-components';

import Stars from '../../ratings-and-reviews/rr-components/Stars';
import Price from './Price';
import ShareMedia from './ShareMedia';

const ProdInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 5px;
  border: 5px solid green;
`;

const CatDiv = styled.div`
  font: 450 1.5em "system-ui";
`;

const NameDiv = styled.div`
  font: 550 3.5em "system-ui";
`;

export default function ProductInfo({ prod, style} = {}) {
  // console.log('prod and style in ProductInfo', style);
  return (
    <ProdInfoWrapper data-testid="pinfoid">
      <CatDiv>{prod.category}</CatDiv>
      <NameDiv>{prod.name}</NameDiv>
      <div>
        <Stars />
      </div>
      <Price style={style} />
      <ShareMedia style={style} />
    </ProdInfoWrapper>
  );
}
