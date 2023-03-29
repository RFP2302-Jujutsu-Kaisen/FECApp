import React from 'react';
import Stars from '../../ratings-and-reviews/rr-components/Stars';
import Price from './Price';
import ShareMedia from './ShareMedia';

export default function ProductInfo({ prod, style } = {}) {
  // console.log('prod and style in ProductInfo', style);
  return (
    <div data-testid="pinfoid">
      <div>
        <Stars />
      </div>
      <div>{prod.category}</div>
      <div>{prod.name}</div>
      <Price style={style} />
      <ShareMedia style={style} />
    </div>
  );
}
