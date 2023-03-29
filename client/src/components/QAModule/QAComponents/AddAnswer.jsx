/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalTest from '../../Modals/ModalTest';
import { useAppContext } from '../../AppContext';

const Button = styled.button`
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

export default function AddQuestion({ question, refreshAnswers }) {
  const { state } = useAppContext();
  const { productId } = state;
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
      <Button type="button" onClick={openModal}>
        Add Answer
      </Button>
      <ModalTest isOpen={isModalOpen} onClose={closeModal}>
        <h2>Submit You Answer</h2>
        <h4>{`[PRODUCT NAME HERE ID: ${productId}]: [${question.question_body}]`}</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="your-answer">
            Your Answer (mandatory)*
            <textarea id="your-answer" maxLength="1000" required value={answerText} onChange={(e) => setAnswerText(e.target.value)} />
          </label>
          <label htmlFor="what-is-your-nickname">
            What is your nickname (mandatory)*
            <input id="what-is-your-nickname" type="text" maxLength="60" placeholder="Example: jackson543!" required value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="your-email">
            Your email (mandatory)*
            <input id="your-email" type="email" maxLength="60" placeholder="jack@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <button type="submit">Submit Answer</button>
        </form>
      </ModalTest>
    </div>
  );
}
