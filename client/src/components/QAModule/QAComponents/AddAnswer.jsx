/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalTest from '../../Modals/ModalTest';

const AddAnswerButton = styled.button`
  font-size: 11px;
  font-weight: 400;
  color: gray;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #404040;
  }
`;

export default function AddAnswer({ question, refreshAnswers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/answers`,
        {
          body: answerText,
          name: nickname,
          email,
        },
        {
          headers: {
            Authorization: process.env.AUTH_SECRET,
          },
        },
      );
      console.log(`SUCESS: ${res.status} ${res.data}`);
      refreshAnswers();
    } catch (err) {
      console.error('Error updating report: ', err);
    }

    closeModal();
  };

  return (
    <div>
      <AddAnswerButton type="button" onClick={openModal} data-testid="add-answer-button">
        Add Answer
      </AddAnswerButton>
      <ModalTest isOpen={isModalOpen} onClose={closeModal} data-testid="modal-test">
        <h2>Submit You Answer</h2>
        <h4>{`[PRODUCT NAME HERE ID: [${question.question_body}]`}</h4>
        <form onSubmit={handleSubmit} data-testid="submit-form">
          <label htmlFor="your-answer">
            Your Answer (mandatory)*
            <textarea id="your-answer" maxLength="1000" required value={answerText} onChange={(e) => setAnswerText(e.target.value)} data-testid="your-answer" />
          </label>
          <label htmlFor="what-is-your-nickname">
            What is your nickname (mandatory)*
            <input id="what-is-your-nickname" type="text" maxLength="60" placeholder="Example: jackson543!" required value={nickname} onChange={(e) => setNickname(e.target.value)} data-testid="your-nickname" />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="your-email">
            Your email (mandatory)*
            <input id="your-email" type="email" maxLength="60" placeholder="jack@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} data-testid="your-email" />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <button type="submit" data-testid="submit-answer-button">Submit Answer</button>
        </form>
      </ModalTest>
    </div>
  );
}
