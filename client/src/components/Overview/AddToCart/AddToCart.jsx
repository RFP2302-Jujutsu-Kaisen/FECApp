import React, { useState, useEffect } from 'react';
import SizeDropdown from './SizeDropdown';
import QuantityDropdown from './QuantityDropdown';
import AddCheckButton from './AddCheckButton';

export default function AddToCart({ style }) {
  // states
  const [skuState, setSkuState] = useState('');
  const [cartState, setCart] = useState({});

  // useEffect
  useEffect(() => {
    setSkuState({});
  }, [style]);

  // handlers
  const skuHandler = (event) => {
    setSkuState(event.target.value);
    event.preventDefault();
  };

  // console.log('cart style', style);

  return (
    <div>
      <h3>AddToCart</h3>
      <SizeDropdown
        skus={Object.keys(style).length > 0 ? style.skus : {}}
        skuHandler={skuHandler}
      />
      <QuantityDropdown
        sku={Object.keys(style).length > 0 && !!skuState ? style.skus[skuState] : {}}
      />
      <AddCheckButton />
    </div>
  );
}
