import React from 'react';
import Price from './Price';
import ShareMedia from './ShareMedia';

export default function ProductInfo({ productInfo } = {}) {
  const { styles, prod } = productInfo;
  const style = styles.results[2]; // temp
  return (
    <div>
      <h3>ProductInfo</h3>
      <div>Rating</div>
      <div>{prod.category}</div>
      <div>{prod.name}</div>
      <Price style={style} />
      <ShareMedia style={style} />
    </div>
  );
}
