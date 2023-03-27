import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  ImageGallery, ProductInfo, StyleSelector, AddToCart, Description,
} from '.';
import Parse from './Parse';
import { useAppContext } from '../AppContext';

import eData from './exampleData';
const prodId = '40344';

// css
const RowWrapper = styled.div`
  display: flex;
`;

const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

export default function Overview() {
  // context, states
  const product = useAppContext();
  const [prod, setProd] = useState({});
  const [styles, setStyles] = useState([[], 0]);
  // const [style, setStyle] = useState({});

  useEffect(() => {
    if (product.state.productId) {
      Parse.getProd(product.state.productId, setProd);
      Parse.getStyles(product.state.productId, setStyles);
    }
  }, [product.state.productId]);

  return (
    <ColWrapper>
      <h2>Overview</h2>
      <RowWrapper>
        <ImageGallery style={styles[0][styles[1]] || {}} />
        <ColWrapper>
          <ProductInfo prod={prod} style={styles[0][styles[1]] || {}} />
          <StyleSelector styles={styles} setStyles={setStyles} />
          <AddToCart
            styleInStockArr={styles[0].length > 0
              ? [styles[0][styles[1]],
                Object.keys(styles[0][styles[1]].skus)
                  .filter((key) => styles[0][styles[1]].skus[key].quantity > 0),
              ]
              : []}
          />
        </ColWrapper>
      </RowWrapper>
      <Description prod={prod} />
    </ColWrapper>
  );
}
