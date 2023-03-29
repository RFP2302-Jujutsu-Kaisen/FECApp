import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddAnswer from './AddAnswer';

const mockQuestion = {
  question_id: 1,
  question_body: 'What is the product made of?',
};

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ status: 201, data: 'success' })),
}));

describe('AddAnswer component', () => {
  it('submits the form with the entered values', async () => {
    const refreshAnswers = jest.fn();
    render(<AddAnswer question={mockQuestion} refreshAnswers={refreshAnswers} />);

    const addButton = screen.getByTestId('add-answer-button');
    fireEvent.click(addButton);

    const answerText = 'This product is made of high-quality materials.';
    const nickname = 'jackson543';
    const email = 'jack@email.com';

    fireEvent.change(screen.getByTestId('your-answer'), {
      target: { value: answerText },
    });
    fireEvent.change(screen.getByTestId('your-nickname'), {
      target: { value: nickname },
    });
    fireEvent.change(screen.getByTestId('your-email'), {
      target: { value: email },
    });

    const submitButton = screen.getByTestId('submit-answer-button');
    fireEvent.click(submitButton);

    await screen.findByText('Submit You Answer');

    expect(refreshAnswers).toHaveBeenCalled();
  });
});
