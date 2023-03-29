import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('filters questions when searching', async () => {
    // Assuming you have a function that mocks the API call and returns questions data
    const { questions } = mockApiData();

    jest.spyOn(axios, 'get').mockResolvedValue({ data: { results: questions } });

    render(
      <AppContextProvider>
        <QuestionsAndAnswers />
      </AppContextProvider>,
    );

    await screen.findByText(questions[0].question_body);

    const searchTerm = 'example';
    userEvent.type(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...'), searchTerm);

    expect(screen.getByText(questions[1].question_body)).toBeInTheDocument();
    expect(screen.queryByText(questions[0].question_body)).not.toBeInTheDocument();
  });

  test('opens and closes the "Add a Question" modal', () => {
    const addQuestionButton = screen.getByText('ADD A QUESTION +');
    userEvent.click(addQuestionButton);

    const modalHeading = screen.getByText('Ask Your Question');
    expect(modalHeading).toBeInTheDocument();

    const closeButton = screen.getByText('×');
    userEvent.click(closeButton);

    expect(modalHeading).not.toBeInTheDocument();
  });
});
