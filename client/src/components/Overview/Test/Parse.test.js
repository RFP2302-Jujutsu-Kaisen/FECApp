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

describe('should make Atelier api calls correctly in Parse', () => {
  test('should make the API call to prod endpoint', async () => {
    // const cb = (resData) => {
    //   expect(resData).toBeInstanceOf(Array);
    //   expect(resData.length).toBeGreaterThan(3);
    // };
    Parse.getProd(prodId)
      .then((resData) => {
        expect(resData).toBeInstanceOf(Object);
        expect(Object.keys(resData).length).toBe(11);
      })
      .catch((err) => {
        expect(err).toBe(1);
      });
  });

  // test('should make the API call to styles endpoint', async () => {
  //   const cb = (resData) => {
  //     console.log('styles endpoint--------------', resData);
  //     expect(resData[0]).toBeInstanceOf(Array);
  //     expect(resData[0].length).toBeGreaterThan(0);
  //   };
  //   await Parse.getStyles(prodId, cb);
  // });

  // test('should make the API call to get Cart data', async () => {
  //   const cb = (resData) => {
  //     console.log('cart endpoint--------------', resData);
  //     expect(resData).toBeInstanceOf(Array);
  //     expect(resData.length).toBeGreaterThan(0);
  //   };
  //   await Parse.getCart(cb);
  // });

  // test('should make the API call to post to Cart', async () => {
  //   const args = [prodId, 1234567, 1];

  //   const otherCb = (resData) => {
  //     console.log(resData);
  //     // expect(resData).toBeInstanceOf(Array);
  //     // expect(resData.length).toBeGreaterThan(0);
  //     // const testSku = resData.filter((sku) => sku.sku_id === args[1]);
  //     // expect(testSku.length).toBe(1);
  //   };

  //   // post then get
  //   const cb = (res) => {
  //     console.log('after post AAAAAAAAAAAAAAAAAAAAA');
  //     console.log(res);
  //     Parse.getCart((resData) => console.log(JSON.stringify(resData)));
  //   };

  //   args.push(cb);
  //   Parse.postCart(...args);
  // });
});
