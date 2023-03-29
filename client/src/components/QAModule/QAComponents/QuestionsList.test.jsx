import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsList from './QuestionsList';
import testQAData from '../TestQAData';

const mockQuestions = testQAData.testQAData.data.results;

const mockRefreshAnswers = jest.fn();

describe('QuestionsList', () => {
  test('renders four questions by default', () => {
    render(<QuestionsList questions={mockQuestions} refreshAnswers={mockRefreshAnswers} />);
    const questionsList = screen.getByTestId('questions-list');
    expect(questionsList.children.length).toBe(4);
  });

  test('renders two more questions when "MORE ANSWERED QUESTIONS" button is clicked', () => {
    render(<QuestionsList questions={mockQuestions} refreshAnswers={mockRefreshAnswers} />);
    const moreQuestionsButton = screen.getByText('MORE ANSWERED QUESTIONS');
    fireEvent.click(moreQuestionsButton);
    const questionsList = screen.getByTestId('questions-list');
    expect(questionsList.children.length).toBe(6);
  });

  test('does not render "MORE ANSWERED QUESTIONS" button when all questions have been loaded', () => {
    render(<QuestionsList questions={mockQuestions} refreshAnswers={mockRefreshAnswers} />);
    const moreQuestionsButton = screen.queryByText('MORE ANSWERED QUESTIONS');
    fireEvent.click(moreQuestionsButton);
    const moreQuestionsButtonDone = screen.queryByText('MORE ANSWERED QUESTIONS');
    expect(moreQuestionsButtonDone).toBeNull();
  });
});
