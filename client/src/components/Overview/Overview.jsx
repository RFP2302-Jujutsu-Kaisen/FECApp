import React from 'react';
import {
  ImageGallery, ProductInfo, StyleSelector, AddToCart, Description,
} from '.';

import eData from './exampleData';

export default function Overview() {
  return (
    <div>
      <h2>Overview</h2>
      <ImageGallery />
      <ProductInfo productInfo={eData} />
      <StyleSelector />
      <AddToCart />
      <Description />
    </div>
  );
}
