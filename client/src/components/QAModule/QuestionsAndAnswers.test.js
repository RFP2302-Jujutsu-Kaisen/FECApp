import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionsAndAnswers from './QuestionsAndAnswers';

describe('QuestionsAndAnswers', () => {
  test('renders the component', () => {
    render(<QuestionsAndAnswers />);
    const heading = screen.getByText(/QUESTIONS & ANSWERS/i);
    expect(heading).toBeInTheDocument();
  });
});
