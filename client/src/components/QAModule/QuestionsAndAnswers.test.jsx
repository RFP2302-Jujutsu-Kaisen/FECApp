/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContextProvider } from '../AppContext';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import testProductData from './TestProductData';
import { testQAData, testQAEmptyData } from './TestQAData';

jest.mock('axios');

describe('QuestionsAndAnswers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without questions', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(testProductData));
    axios.get.mockImplementationOnce(() => Promise.resolve(testQAEmptyData));

    await act(async () => {
      render(
        <AppContextProvider>
          <QuestionsAndAnswers />
        </AppContextProvider>,
      );
    });

    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
    expect(screen.getByText('ADD A QUESTION +')).toBeInTheDocument();
  });

  test('renders SearchBar, QuestionsList, and AddQuestion components', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(testProductData));
    axios.get.mockImplementationOnce(() => Promise.resolve(testQAData));

    await act(async () => {
      render(
        <AppContextProvider>
          <QuestionsAndAnswers />
        </AppContextProvider>,
      );
    });

    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
    expect(screen.getByText(/is this legit?/i)).toBeInTheDocument();
    expect(screen.getByText('ADD A QUESTION +')).toBeInTheDocument();
  });
});
