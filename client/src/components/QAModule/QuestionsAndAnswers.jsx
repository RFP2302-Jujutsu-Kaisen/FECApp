import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './QAComponents/SearchBar';
import QuestionsList from './QAComponents/QuestionsList';
import { useAppContext } from '../AppContext';

export default function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState([]);
  const { state } = useAppContext();
  const { productId } = state;

  const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  const page = 1;
  const count = 5;
  const headers = {
    Authorization: process.env.AUTH_SECRET,
  };

  useEffect(() => {
    const url = `${baseUrl}/qa/questions?product_id=${productId}&page=${page}&count=${count}`;
    if (productId) {
      axios.get(url, { headers })
        .then((res) => {
          const { results } = res.data;
          console.log(results);
          setQuestions(results);
        })
        .catch((err) => {
          console.error('Error fetching product data: ', err);
        });
    }
  }, [productId]);

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar />
      <QuestionsList questions={questions} />
    </div>
  );
}
