import React from 'react';

export default function Price({ style }) {
  const salePrice = style.sale_price || null;
  const originalPrice = style.original_price || '';

  if (salePrice !== null) {
    return (
      <div>
        <h3>Price</h3>
        <div>
          <span>{salePrice}</span>
          <span>{originalPrice}</span>
        </div>

      </div>
    );
  }

  return (
    <div>
      <h3>Price</h3>
      <p>{originalPrice}</p>
    </div>
  );
}
