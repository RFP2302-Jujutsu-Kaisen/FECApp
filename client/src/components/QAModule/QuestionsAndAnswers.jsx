import React, { useState } from 'react';
import SearchBar from './QAComponents/SearchBar.jsx';
import QuestionsList from './QAComponents/QuestionsList.jsx';
import data from './example_data.js';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState(data.results);
  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar />
      <QuestionsList questions={questions}/>
    </div>
  );
};

export default QuestionsAndAnswers;