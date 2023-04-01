/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppContext } from '../../AppContext';
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: #777
`;

const Label = styled.label`
  font-weight: bold;
  margin: 8px 150px 8px 0px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 75%;
  margin-top: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  margin-top: 4px;
  padding: 2px 8px 2px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #5a5a5a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #404040;
  }
`;

export default function AddAnswer({ question, refreshAnswers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const { state } = useAppContext();
  const { productName } = state;

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
        <h3>Submit Your Answer</h3>
        <h4>{`${productName}: ${question.question_body}`}</h4>
        <form onSubmit={handleSubmit} data-testid="submit-form">
          <FormContainer>
            <Label htmlFor="your-answer">
              Your Answer (mandatory)*
              <TextArea id="your-answer" maxLength="1000" required value={answerText} onChange={(e) => setAnswerText(e.target.value)} data-testid="your-answer" />
            </Label>
            <Label htmlFor="what-is-your-nickname">
              What is your nickname (mandatory)*
              <Input id="what-is-your-nickname" type="text" maxLength="60" placeholder="Example: jackson543!" required value={nickname} onChange={(e) => setNickname(e.target.value)} data-testid="your-nickname" />
              <SmallText>For privacy reasons, do not use your full name or email address</SmallText>
            </Label>
            <Label htmlFor="your-email">
              Your email (mandatory)*
              <Input id="your-email" type="email" maxLength="60" placeholder="jack@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} data-testid="your-email" />
              <SmallText>For authentication reasons, you will not be emailed</SmallText>
            </Label>
            <SubmitButton type="submit" data-testid="submit-answer-button">Submit Answer</SubmitButton>
          </FormContainer>
        </form>
      </ModalTest>
    </div>
  );
}
