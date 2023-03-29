import React, { useContext } from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Parse from '../Parse';
import { AppContextProvider } from '../../AppContext';
import eData from '../exampleData';

const prodId = '40344'; // test product id
const skuId = 1394784;

describe('should make Atelier api calls correctly in Parse', () => {
  test('should make the API call to prod endpoint', async () => {
    expect(await Parse.getProd(prodId)).toBeInstanceOf(Object);
    expect(Object.keys(await Parse.getProd(prodId)).length).toBe(10);
  });

  test('should make the API call to styles endpoint', async () => {
    const styles = await Parse.getStyles(prodId);
    expect(styles[0].length).toBe(6);
  });

  test('should make the API call to get Cart data', async () => {
    const cart = await Parse.getCart();
    expect(cart.length).toBe(4);
  });

  test('should make the API call to post to Cart', async () => {
    const args = [prodId, skuId, 1];
    const response = await Parse.postCart(...args);
    expect(response.length).toBeGreaterThan(0);
    expect(response[0].status).toBe(201);
  });
});
