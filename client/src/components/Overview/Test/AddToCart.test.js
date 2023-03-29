import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import AddToCart from '../AddToCart/AddToCart';
import QuantityDropdown from '../AddToCart/QuantityDropdown';
import eData from '../exampleData';

const { prod, styles } = eData;
const style = styles.results[2] || {};
const noSaleStyle = styles.results[0] || {};
// await user.click(getByRole())
// const user = userEvent.setup();

describe('renders and loads AddToCart', () => {
  test('renders correct AddToCart text and dropdowns', () => {
    const {
      getByTestId,
      getByText,
      getAllByRole,
    } = render(<AddToCart styleInStockArr={[noSaleStyle, Object.keys(noSaleStyle.skus)]} />);
    expect(getByText('Add to Cart')).toBeInTheDocument();
    expect(getByText('Select Size')).toBeInTheDocument();
    expect(getByText('Add to Cart')).toBeInTheDocument();
    expect(getByTestId('sizeId')).toBeInTheDocument();
    expect(getByTestId('defQuantityId')).toBeInTheDocument();
    expect(getAllByRole('option').length).toBe(8); // 6 skus, 1 default, 1 empty quantity option
  });

  test('renders correct AddToCart if no skus in stock', () => {
    const { getByTestId, getByText } = render(<AddToCart styleInStockArr={[]} />);
    expect(getByText('Add to Cart')).toBeInTheDocument();
    expect(getByText('Select Size')).toBeInTheDocument();
    expect(getByText('Add to Cart')).toBeInTheDocument();
    expect(getByTestId('sizeId')).toBeInTheDocument();
    expect(getByTestId('defQuantityId')).toBeInTheDocument();
  });

  test('should allow user to change size and quantity', async () => {
    const user = userEvent.setup();
    render(<AddToCart styleInStockArr={[noSaleStyle, Object.keys(noSaleStyle.skus)]} />);
    await user.selectOptions(
      screen.getByTestId('sizeId'),
      screen.getByRole('option', { name: 'M' }),
    );
    expect(screen.getByRole('option', { name: 'M' }).selected).toBe(true); // Medium selected
    await user.selectOptions(
      screen.getByTestId('quantityId'),
      screen.getByRole('option', { name: '2' }),
    );
    expect(screen.getByRole('option', { name: '2' }).selected).toBe(true); // 2 Quantity selected
  });

  test('should prompt user to select size if not selected', async () => {
    const user = userEvent.setup();
    render(<AddToCart styleInStockArr={[noSaleStyle, Object.keys(noSaleStyle.skus)]} />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Please select size')).toBeInTheDocument(); // Medium selected
  });
});
