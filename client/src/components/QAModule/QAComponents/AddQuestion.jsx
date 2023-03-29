import React, { useState } from 'react';
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

export default function AddQuestion({ productId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <textarea maxLength="1000" required />
          </label>
          <label htmlFor="what-is-your-nickname">
            What is your nickname (mandatory)*
            <input type="text" maxLength="60" placeholder="Example: jackson11!" required />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="your-email">
            Your email (mandatory)*
            <input type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <button type="submit">Submit question</button>
        </form>
      </ModalTest>
    </div>
  );
}
