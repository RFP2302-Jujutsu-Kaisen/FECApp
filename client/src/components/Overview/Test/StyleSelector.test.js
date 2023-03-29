import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import StyleSelector from '../StyleSelector/StyleSelector';

import eData from '../exampleData';

const { prod, styles } = eData;
// const style = styles.results[2] || {};
// const noSaleStyle = styles.results[0] || {};

describe('renders and loads StyleSelector with correct functionality', () => {
  test('renders correct StylesSelector with correct list items', () => {
    let testStyles = [styles.results, 0]; // mock state
    let testSetStyles = (newTestStyle) => { testStyles = newTestStyle; };
    render(<StyleSelector styles={testStyles} setStyles={testSetStyles} />);
    expect(screen.getAllByRole('listitem').length).toBe(7);
  });

  test('should allow user to switch styles by clicking on a style in the list', async () => {
    const user = userEvent.setup();
    let testStyles = [styles.results, 0]; // mock state
    const testSetStyles = (newTestStyle) => {
      testStyles = newTestStyle;
    };
    render(<StyleSelector styles={testStyles} setStyles={testSetStyles} />);
    const listItems = screen.getAllByRole('listitem');
    await user.click(within(listItems[2]).getByRole('button'));
    expect(testStyles[1]).toBe(2);
  });
});
