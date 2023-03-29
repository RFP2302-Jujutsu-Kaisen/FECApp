import React, { useContext } from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Overview from '../Overview';
import { AppContextProvider } from '../../AppContext';
import eData from '../exampleData';

// await user.click(getByRole())
// const user = userEvent.setup();

describe('renders and loads Overview', () => {
  test('renders correct Overview with subcomponents', async () => {
    const initialState = {
      productId: '40344',
      productAvgRating: -1,
    };

    const contextVal = {
      state: initialState,
      setProductId: null,
    };
    render(
      <AppContextProvider testValue={contextVal}>
        <Overview />
      </AppContextProvider>,
    );
    expect(screen.getByTestId('pinfoid')).toBeInTheDocument();
    expect(screen.getByTestId('imgGalleryId')).toBeInTheDocument();
    expect(screen.getByTestId('descId')).toBeInTheDocument();
    expect(screen.getByTestId('addToCartId')).toBeInTheDocument();
    expect(screen.getByTestId('styleSelId')).toBeInTheDocument();
  });

  test('renders empty Overview if no productId', async () => {
    const initialState = {
      productId: null,
      productAvgRating: -1,
    };

    const contextVal = {
      state: initialState,
      setProductId: null,
    };

    render(
      <AppContextProvider testValue={contextVal}>
        <Overview />
      </AppContextProvider>,
    );
    expect(screen.getByTestId('emptyOverviewId')).toBeInTheDocument();
  });
});
