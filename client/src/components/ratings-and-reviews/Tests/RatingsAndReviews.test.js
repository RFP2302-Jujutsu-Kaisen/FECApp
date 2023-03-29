import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import RatingsAndReviews from '../RatingsAndReviews';


describe('renders and loads RatingSummary', () => {
  it('renders correct text heading and rating', async () => {
    const { getByText } = await render(<RatingsAndReviews />);
    const headingElement = getByText(/Ratings Summary/i);
    expect(headingElement).toBeInTheDocument();
  });
  it('renders correct text heading for ReviewsList', async () => {
    const { getByText } = await render(<RatingsAndReviews />);
    const headingElement = getByText(/Reviews List/i);
    expect(headingElement).toBeInTheDocument();
  });
});
