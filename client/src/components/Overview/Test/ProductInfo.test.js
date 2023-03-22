import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import ProductInfo from '../ProductInfo/ProductInfo';
import eData from '../exampleData';

describe('renders and loads ProductInfo', () => {
  test('renders correct text heading and rating', () => {
    const { getByText } = render(<ProductInfo productInfo={eData} />);
    expect(getByText('ProductInfo')).toBeInTheDocument();
    expect(getByText('Rating')).toBeInTheDocument();
  });

  test('renders correct category and name by product', () => {
    const { getByText } = render(<ProductInfo productInfo={eData} />);
    const { styles, prod } = eData;
    expect(getByText(prod.category)).toBeInTheDocument();
    expect(getByText(prod.name)).toBeInTheDocument();
  });
});
