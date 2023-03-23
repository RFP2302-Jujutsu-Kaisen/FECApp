import React, { useState, useEffect } from 'react';
import SizeDropdown from './SizeDropdown';
import QuantityDropdown from './QuantityDropdown';
import AddCheckButton from './AddCheckButton';

export default function AddToCart({ style }) {
  // states
  const [skuState, setSkuState] = useState({});
  const [cartState, setCart] = useState({});

  // useEffect
  useEffect(() => {
    setSkuState({});
  }, [style]);

  // handlers
  const skuHandler = (sku) => {
    setSkuState(sku);
  };

  // console.log('cart style', style);

  return (
    <div>
      <h3>AddToCart</h3>
      <SizeDropdown
        skus={Object.keys(style).length > 0 ? style.skus : {}}
        skuHandler={skuHandler}
      />
      <QuantityDropdown sku={skuState} />
      <AddCheckButton />
    </div>
  );
}
