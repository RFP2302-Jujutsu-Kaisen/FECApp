import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { SearchBar, QuestionsList, AddQuestion } from './QAComponents';
import { useAppContext } from '../AppContext';

const Heading = styled.h4`
  font-size: 14px;
  font-weight: normal;
  color: #5A5A5A;
  margin-bottom: 16px;
  font-family; system-ui;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui;
`;

const QuestionListContainer = styled.div`
  max-height: 80vh;
  overflow: auto;
`;

export default function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { state } = useAppContext();
  const { productId } = state;

  const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  const page = 1;
  const count = 125;
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
  }, [productId, refresh]);

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

  const refreshQuestionsOrAnswers = () => {
    setRefresh(!refresh);
  };

  // const handleChangeProductId = () => {
  //   const newProductId = '40346';
  //   setProductId(newProductId);
  // };

  return (
    <Wrapper>
      {/* <button type="button" onClick={handleChangeProductId}>Change Product ID</button> */}
      <Heading>QUESTIONS & ANSWERS</Heading>
      <SearchBar onSearch={handleSearch} />
      <QuestionListContainer>
        <QuestionsList questions={filteredQuestions} refreshAnswers={refreshQuestionsOrAnswers} />
        <AddQuestion productId={productId} refreshQuestions={refreshQuestionsOrAnswers} />
      </QuestionListContainer>
    </Wrapper>
  );
}
