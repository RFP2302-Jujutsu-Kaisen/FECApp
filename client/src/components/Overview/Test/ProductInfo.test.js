import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import ProductInfo from '../ProductInfo/ProductInfo';
import eData from '../exampleData';

const { prod, styles } = eData;
const style = styles.results[2] || {};
const noSaleStyle = styles.results[0] || {};

describe('renders and loads ProductInfo', () => {
  test('renders correct text heading and rating', () => {
    const { getByText } = render(< ProductInfo prod={prod} style={style} />);
    expect(getByText('Stars Average Review Rating')).toBeInTheDocument();
    expect(getByText('Tweet')).toBeInTheDocument();
    expect(getByText('Share')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

  test('renders correct category and name, and price by product', () => {
    const { getByText } = render(<ProductInfo prod={prod} style={style} />);
    expect(getByText(prod.category)).toBeInTheDocument();
    expect(getByText(prod.name)).toBeInTheDocument();
    expect(getByText(style.original_price)).toBeInTheDocument();
  });

  test('renders correct category and name, and price by product', () => {
    const { getByText } = render(<ProductInfo prod={prod} style={noSaleStyle} />);
    expect(getByText(prod.category)).toBeInTheDocument();
    expect(getByText(prod.name)).toBeInTheDocument();
    expect(getByText(noSaleStyle.original_price)).toBeInTheDocument();
  });
});
