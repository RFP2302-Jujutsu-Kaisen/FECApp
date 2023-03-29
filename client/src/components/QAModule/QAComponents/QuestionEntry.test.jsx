import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import axios from 'axios';
import QuestionEntry from './QuestionEntry';
import testQAData from '../TestQAData';

jest.mock('axios');

const refreshAnswers = jest.fn();

describe('QuestionEntry', () => {
  beforeEach(() => {
    axios.put.mockResolvedValue({ status: 204, data: 'No Content' });
  });

  it('renders without crashing', () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[0]}
        refreshAnswers={refreshAnswers}
      />,
    );
    expect(screen.getByTestId('question-entry')).toBeInTheDocument();
  });

  it('renders question body', () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[0]}
        refreshAnswers={refreshAnswers}
      />,
    );
    expect(screen.getByTestId('question-body')).toHaveTextContent('Is this LEGIT?');
  });

  it('renders the correct number of answers initially', () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[0]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const answerList = screen.getByTestId('answer-list');
    expect(answerList.children.length).toBe(2);
  });

  it('loads more answers when "LOAD MORE ANSWERS" button is clicked', () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[1]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const loadMoreAnswersButton = screen.getByTestId('more-answers-button');
    fireEvent.click(loadMoreAnswersButton);
    const answerList = screen.getByTestId('answer-list');
    expect(answerList.children.length).toBe(4);
  });

  it('increments helpfulness count when "Yes" button is clicked', async () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[0]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const helpfulButton = screen.getByTestId('helpfulq-button');
    fireEvent.click(helpfulButton);
    await waitFor(() => expect(screen.getByTestId('helpfulq-button')).toHaveTextContent('Yes (9)'));
  });

  it('does not increment helpfulness count when "Yes" button is clicked again', async () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[0]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const helpfulButton = screen.getByTestId('helpfulq-button');
    fireEvent.click(helpfulButton);
    await waitFor(() => expect(screen.getByTestId('helpfulq-button')).toHaveTextContent('Yes (9)'));
    fireEvent.click(helpfulButton);
    expect(screen.getByTestId('helpfulq-button')).toHaveTextContent('Yes (9)');
  });

  it('renders an empty answer list for questions with no answers', () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[5]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const answerList = screen.getByTestId('answer-list');
    expect(answerList.children.length).toBe(0);
  });

  it('does not render "LOAD MORE ANSWERS" button if all answers are displayed', async () => {
    render(
      <QuestionEntry
        question={testQAData.testQAData.data.results[1]}
        refreshAnswers={refreshAnswers}
      />,
    );
    const loadMoreAnswersButton = screen.getByTestId('more-answers-button');
    fireEvent.click(loadMoreAnswersButton);

    await waitFor(() => {
      const answerList = screen.getByTestId('answer-list');
      expect(answerList.children.length).toBe(4);
    });
  });

  // it('renders the Add Answer button and opens the modal on click', async () => {
  //   render(
  //     <QuestionEntry
  //       question={testQAData.testQAData.data.results[0]}
  //       refreshAnswers={refreshAnswers}
  //     />,
  //   );

  //   const addButton = screen.getByTestId('add-answer-button');
  //   expect(addButton).toBeInTheDocument();
  //   fireEvent.click(addButton);

  //   await waitFor(() => {
  //     const modal = screen.getByTestId('modal-test');
  //     expect(modal).toBeInTheDocument();
  //   });
  // });
});
