/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalTest from '../../Modals/ModalTest';

const AddQuestionButton = styled.button`
  background: transparent;
  border: 1px solid;
  margin: 10px 0px 10px 0px;
  padding: 16px 14px;
  font-size: 15px;
  cursor: pointer;
`;

export default function AddQuestion({ productId, refreshQuestions }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionText, setQuestionText] = useState('');
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
        'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
        {
          body: questionText,
          name: nickname,
          email,
          product_id: productId,
        },
        {
          headers: {
            Authorization: process.env.AUTH_SECRET,
          },
        },
      );
      console.log(`SUCESS: ${res.status} ${res.data}`);
      refreshQuestions();
    } catch (err) {
      console.error('Error updating report: ', err);
    }

    closeModal();
  };

  return (
    <div>
      <AddQuestionButton type="button" onClick={openModal}>
        ADD A QUESTION +
      </AddQuestionButton>
      <ModalTest isOpen={isModalOpen} onClose={closeModal}>
        <h2>Ask Your Question</h2>
        <h4>{`About the [PRODUCT NAME HERE ID: ${productId}]`}</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="your-question">
            Your Question (mandatory)*
            <textarea id="your-question" maxLength="1000" required value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
          </label>
          <label htmlFor="what-is-your-nickname">
            What is your nickname (mandatory)*
            <input id="what-is-your-nickname" type="text" maxLength="60" placeholder="Example: jackson11!" required value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="your-email">
            Your email (mandatory)*
            <input id="your-email" type="email" maxLength="60" placeholder="Why did you like the product or not?" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <button type="submit">Submit question</button>
        </form>
      </ModalTest>
    </div>
  );
}
