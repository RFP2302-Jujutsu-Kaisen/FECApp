import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import AnswerEntry from './AnswerEntry';

jest.mock('axios');

const mockAnswer = {
  id: 1,
  body: 'This is a test answer.',
  answerer_name: 'John Doe',
  helpfulness: 8,
  date: '2021-06-12T00:00:00.000Z',
};

describe('AnswerEntry', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    expect(getByTestId('answer-entry')).toBeInTheDocument();
  });

  it('renders answer body', () => {
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    expect(getByTestId('answer-body')).toHaveTextContent('This is a test answer.');
  });

  it('renders answerer name', () => {
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    expect(getByTestId('answer-name')).toHaveTextContent('John Doe');
  });

  it('increments helpfulness count when "Yes" button is clicked', async () => {
    axios.put.mockResolvedValue({ status: 204, data: 'No Content' });
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    const helpfulButton = getByTestId('helpful-button');
    fireEvent.click(helpfulButton);
    expect(getByTestId('helpful-button')).toHaveTextContent('Yes (9)');
  });

  it('does not increment helpfulness count when "Yes" button is clicked again', () => {
    axios.put.mockResolvedValue({ status: 204, data: 'No Content' });
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    const helpfulButton = getByTestId('helpful-button');
    fireEvent.click(helpfulButton);
    fireEvent.click(helpfulButton);
    expect(getByTestId('helpful-button')).toHaveTextContent('Yes (9)');
  });

  it('displays "Reported" when "Report" button is clicked', () => {
    axios.put.mockResolvedValue({ status: 204, data: 'No Content' });
    const { getByTestId } = render(<AnswerEntry answer={mockAnswer} />);
    const reportButton = getByTestId('report');
    fireEvent.click(reportButton);
    expect(getByTestId('reported')).toBeInTheDocument();
  });
});
