import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';

export default function Overview() {
  return (
    <div>
      <h2>Overview</h2>
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  );
}
