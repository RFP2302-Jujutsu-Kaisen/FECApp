import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBar, QuestionsList } from './QAComponents';
import ModalTest from '../Modals/ModalTest';
import { useAppContext } from '../AppContext';

export default function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state } = useAppContext();
  const { productId } = state;

  const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  const page = 1;
  const count = 100;
  const headers = {
    Authorization: process.env.AUTH_SECRET,
  };

  useEffect(() => {
    const url = `${baseUrl}/qa/questions?product_id=${productId}&page=${page}&count=${count}`;
    if (productId) {
      axios.get(url, { headers })
        .then((res) => {
          const { results } = res.data;
          const sortedResults = results.sort((a, b) => (
            b.question_helpfulness - a.question_helpfulness
          ));
          setQuestions(sortedResults);
          setFilteredQuestions(sortedResults);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Error fetching product data: ', err);
        });
    }
  }, [productId]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = questions.filter((question) => (
        question.question_body.toLowerCase().includes(searchTerm.toLowerCase())
      ));
      setFilteredQuestions(filtered);
    } else {
      setFilteredQuestions(questions);
    }
  };

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
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar onSearch={handleSearch} />
      <QuestionsList questions={filteredQuestions} />
      <div>
        <button type="button" onClick={openModal}>
          ADD A QUESTION +
        </button>
        <ModalTest isOpen={isModalOpen} onClose={closeModal}>
          <h2>Ask Your Question</h2>
          <h4>{`About the [PRODUCT NAME HERE ID: ${productId}]`}</h4>
          <form onSubmit={handleSubmit}>
            <label>
              Your Question (mandatory)*
              <textarea maxLength="1000" required />
            </label>
            <label>
              What is your nickname (mandatory)*
              <input type="text" maxLength="60" placeholder="Example: jackson11!" required />
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>
            <label>
              Your email (mandatory)*
              <input type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
              <p>For authentication reasons, you will not be emailed</p>
            </label>
            <button type="submit">Submit question</button>
          </form>
        </ModalTest>
      </div>
    </div>
  );
}
