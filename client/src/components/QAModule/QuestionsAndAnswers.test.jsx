import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContextProvider } from '../AppContext';
import QuestionsAndAnswers from './QuestionsAndAnswers';

jest.mock('axios');
axios.get.mockResolvedValue({
  data: {
    results: [
      {
        question_id: 1,
        question_body: 'Example question?',
        question_helpfulness: 10,
      },
    ],
  },
});

describe('QuestionsAndAnswers', () => {
  beforeEach(() => {
    render(
      <AppContextProvider>
        <QuestionsAndAnswers />
      </AppContextProvider>,
    );
  });

  test('renders without crashing', () => {
    expect(screen.getByText(/questions & answers/i)).toBeInTheDocument();
  });
});
