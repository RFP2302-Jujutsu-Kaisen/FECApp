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

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="your-question">
            Your Question (mandatory)*
            <TextArea id="your-question" maxLength="1000" required value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
          </Label>
          <Label htmlFor="what-is-your-nickname">
            What is your nickname (mandatory)*
            <Input id="what-is-your-nickname" type="text" maxLength="60" placeholder="Example: jackson11!" required value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <SmallText>For privacy reasons, do not use your full name or email address</SmallText>
          </Label>
          <Label htmlFor="your-email">
            Your email (mandatory)*
            <Input id="your-email" type="email" maxLength="60" placeholder="Why did you like the product or not?" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <SmallText>For authentication reasons, you will not be emailed</SmallText>
          </Label>
          <SubmitButton type="submit">Submit question</SubmitButton>
        </Form>
      </ModalTest>
    </div>
  );
}
