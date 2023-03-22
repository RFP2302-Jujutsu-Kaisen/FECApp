import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

import RatingsAndReviews from '../RatingsAndReviews';
import dataMeta from '../assets/localData';

describe('renders and loads RatingSummary', () => {
  test('renders correct text heading and rating', () => {
    const { getByText } = render(<RatingsAndReviews dataMeta={dataMeta} />);
    expect(getByText('Ratings Summary')).toBeInTheDocument();
    expect(getByText('Stars Average Review Rating')).toBeInTheDocument();
  });
});
