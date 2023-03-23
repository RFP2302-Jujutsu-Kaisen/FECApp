import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContextProvider } from '../AppContext';
import QuestionsAndAnswers from './QuestionsAndAnswers';

describe('QuestionsAndAnswers', () => {
  beforeEach(() => {
    render(
      <AppContextProvider>
        <QuestionsAndAnswers />
      </AppContextProvider>,
    );
  });

  test('renders the component', () => {
    const heading = screen.getByText(/QUESTIONS & ANSWERS/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the SearchBar component', () => {
    const searchBar = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    expect(searchBar).toBeInTheDocument();
  });

  test('renders the QuestionsList component', () => {
    const questionsList = screen.getByTestId('questions-list');
    expect(questionsList).toBeInTheDocument();
  });
});
