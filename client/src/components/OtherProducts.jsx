/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppContext } from './AppContext';

const Heading = styled.h4`
  font-size: 14px;
  font-weight: normal;
  color: #6e6e73;
  margin-bottom: 16px;
  font-family; system-ui;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui;
`;

export default function OtherProducts() {
  const {
    state,
    setProductId,
    setProductName,
    setRating,
  } = useAppContext();
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

  const handleChangeProduct = async (productId, productName) => {
    setProductId(productId);
    setProductName(productName);

    const headers = {
      Authorization: process.env.AUTH_SECRET,
    };

    try {
      const { data: reviewMeta } = await axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`,
        { headers },
      );

      const rating = [
        Number.parseInt(reviewMeta.ratings['1'], 10),
        Number.parseInt(reviewMeta.ratings['2'], 10),
        Number.parseInt(reviewMeta.ratings['3'], 10),
        Number.parseInt(reviewMeta.ratings['4'], 10),
        Number.parseInt(reviewMeta.ratings['5'], 10),
      ];

      const oneStars = rating[0];
      const twoStars = rating[1] * 2;
      const threeStars = rating[2] * 3;
      const fourStars = rating[3] * 4;
      const fiveStars = rating[4] * 5;

      const countOneStars = rating[0];
      const countTwoStars = rating[1];
      const countThreeStars = rating[2];
      const countFourStars = rating[3];
      const countFiveStars = rating[4];

      const avgRate = (oneStars + twoStars + threeStars + fourStars + fiveStars)
      / (countOneStars + countTwoStars + countThreeStars + countFourStars + countFiveStars);
      const averageRating = avgRate.toFixed(1);

      setRating([averageRating, rating]);
    } catch (err) {
      console.error('Error fetching rating data: ', err);
    }
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
