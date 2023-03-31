/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppContext } from './AppContext';

const Heading = styled.h4`
  font-size: 14px;
  font-weight: normal;
  color: #5A5A5A;
  margin-bottom: 16px;
  font-family; system-ui;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui;
`;

export default function OtherProducts() {
  const { state, setProductId, setProductName } = useAppContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: process.env.AUTH_SECRET,
    };
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', { headers })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products: ', err);
      });
  }, []);

  const handleChangeProduct = (productId, productName) => {
    setProductId(productId);
    setProductName(productName);
  };

  return (
    <Wrapper>
      <Heading>OTHER PRODUCTS</Heading>
      {products.map((product) => (
        <div key={product.id}>
          <input
            type="radio"
            id={`product-${product.id}`}
            name="products"
            checked={state.productId === product.id}
            onChange={() => handleChangeProduct(product.id, product.name)}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}
    </Wrapper>
  );
}
