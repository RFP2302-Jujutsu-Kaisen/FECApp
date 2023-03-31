import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SizeDropdown from './SizeDropdown';
import QuantityDropdown from './QuantityDropdown';
import AddCheckButton from './AddCheckButton';
import { useAppContext } from '../../AppContext';
import Parse from '../Parse';

// css
const RowWrapper = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 57% 38%;
  gap: 5%;
  height: 100%;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 70px);
  grid-template-columns: 100%;
  gap: ${(props) => (props.buttonCheck ? '80%' : '10%')};
  width: 90%;
  transition: 0.3s;
`;

const MsgWrapper = styled.span`
  color: red;
  font-family: system-ui;
  font-weight: 500;
  font-size: 1.2em;
`;

const CartMsgWrapper = styled.span`
  color: black;
  font-family: system-ui;
  font-weight: 500;
  font-size: 1.2em;
  top: 10px;
  margin-top: 20px;
`;

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  column-gap: 15%;
  align-items: center;
`;

export default function AddToCart({ styleInStockArr }) {
  const style = styleInStockArr.length > 0 ? styleInStockArr[0] : {};
  const inStockSkus = styleInStockArr.length > 0 ? styleInStockArr[1] : [];
  // states
  const [skuState, setSkuState] = useState('');
  const [quantityState, setQuantityState] = useState(1);
  const [buttonCheck, setButtonCheck] = useState(false);
  const [postCartCheck, setPostCartCheck] = useState(false);

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
    setPostCartCheck(false);
    event.preventDefault();
  };

  const quantityHandler = (event) => {
    setQuantityState(event.target.value);
    setPostCartCheck(false);
    event.preventDefault();
  };

  const addCartHandler = async (responses) => {
    console.log('Sucess adding to cart', responses);
    console.log('User cart', await Parse.getCart());
    setPostCartCheck(true);
  };

  const checkHandler = async (event) => {
    if (skuState.length > 0) {
      console.log('TODO: Post Cart:', JSON.stringify({ product_id: prodContext.state.productId, sku_id: skuState, count: quantityState }));
      addCartHandler(await Parse.postCart(prodContext.state.productId, skuState, quantityState));
    } else {
      console.log('checkHandler skuState is empty', skuState);
      setButtonCheck(true);
    }
    event.preventDefault();
  };

  // if (inStockSkus.length <= 0) {
  //   return (
  //     <ColWrapper buttonCheck={buttonCheck} data-testid="addToCartId">
  //       <RowWrapper>
  //         <SizeDropdown
  //           skus={Object.keys(style).length > 0 ? style.skus : {}}
  //           inStockSkus={inStockSkus}
  //           skuHandler={skuHandler}
  //         />
  //         <QuantityDropdown
  //           sku={Object.keys(style).length > 0 && !!skuState ? style.skus[skuState] : {}}
  //           quantityHandler={quantityHandler}
  //         />
  //       </RowWrapper>
  //       <AddCheckButton
  //         checkHandler={checkHandler}
  //       />
  //     </ColWrapper>
  //   );
  // }

  return (
    <AddWrapper>
      <MsgWrapper>{buttonCheck ? 'Please Select Size' : ''}</MsgWrapper>
      <ColWrapper buttonCheck={buttonCheck} data-testid="addToCartId">
        <RowWrapper>
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
        </RowWrapper>
        <AddCheckButton
          checkHandler={checkHandler}
        />
      </ColWrapper>
      <CartMsgWrapper>{postCartCheck ? 'Added.' : ''}</CartMsgWrapper>
    </AddWrapper>
  );
}
