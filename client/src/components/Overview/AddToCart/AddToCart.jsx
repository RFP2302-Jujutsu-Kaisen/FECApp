import React, { useState, useEffect } from 'react';
import SizeDropdown from './SizeDropdown';
import QuantityDropdown from './QuantityDropdown';
import AddCheckButton from './AddCheckButton';
import { useAppContext } from '../../AppContext';
import Parse from '../Parse';

export default function AddToCart({ styleInStockArr }) {
  const style = styleInStockArr.length > 0 ? styleInStockArr[0] : {};
  const inStockSkus = styleInStockArr.length > 0 ? styleInStockArr[1] : [];
  // states
  const [skuState, setSkuState] = useState('');
  const [quantityState, setQuantityState] = useState(1);
  const [buttonCheck, setButtonCheck] = useState(false);

  // context
  const prodContext = useAppContext();

  // useEffect
  useEffect(() => {
    if (Object.keys(style).length > 0) {
      setSkuState('');
      setButtonCheck(false);
    }
  }, [style]);

  // handlers
  const skuHandler = (event) => {
    setSkuState(event.target.value);
    setButtonCheck(false);
    event.preventDefault();
  };

  const quantityHandler = (event) => {
    setQuantityState(event.target.value);
    event.preventDefault();
  };

  const addCartHandler = (err, responses) => {
    if (err) {
      console.log('Error adding to cart', err);
    } else {
      console.log('Sucess adding to cart', responses);
      Parse.getCart((cart) => console.log('User cart:', cart));
    }
  };

  const checkHandler = (event) => {
    if (skuState.length > 0) {
      console.log('TODO: Post Cart:', JSON.stringify({ product_id: prodContext.state.productId, sku_id: skuState, count: quantityState }));
      Parse.postCart(prodContext.state.productId, skuState, quantityState, addCartHandler);
    } else {
      console.log('checkHandler skuState is empty', skuState);
      setButtonCheck(true);
    }
    event.preventDefault();
  };

  if (inStockSkus.length <= 0) {
    return (
      <div>
        <h3>AddToCart</h3>
        <SizeDropdown
          skus={Object.keys(style).length > 0 ? style.skus : {}}
          inStockSkus={inStockSkus}
          skuHandler={skuHandler}
        />
        <QuantityDropdown
          sku={Object.keys(style).length > 0 && !!skuState ? style.skus[skuState] : {}}
          quantityHandler={quantityHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <h3>AddToCart</h3>
      <SizeDropdown
        skus={Object.keys(style).length > 0 ? style.skus : {}}
        inStockSkus={inStockSkus}
        skuHandler={skuHandler}
        skuState={skuState}
        buttonCheck={buttonCheck}
      />
      <QuantityDropdown
        sku={(Object.keys(style).length > 0)
          && (skuState in style.skus) ? style.skus[skuState] : {}}
        quantityHandler={quantityHandler}
      />
      <AddCheckButton
        checkHandler={checkHandler}
      />
    </div>
  );
}
