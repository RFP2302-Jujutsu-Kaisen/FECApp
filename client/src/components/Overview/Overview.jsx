import React, { useState, useEffect } from 'react';
import {
  ImageGallery, ProductInfo, StyleSelector, AddToCart, Description,
} from '.';

import Parse from './Parse';

import eData from './exampleData';

import { useAppContext } from '../AppContext';

const prodId = '40344';
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
    <div>
      <h2>Overview</h2>
      <ImageGallery />
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
      <Description prod={prod} />
    </div>
  );
}
