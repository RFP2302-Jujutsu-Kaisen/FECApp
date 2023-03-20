import React, { useState } from 'react';
import SearchBar from './QAComponents/SearchBar';
import QuestionsList from './QAComponents/QuestionsList';
import data from './example_data';

export default function QuestionsAndAnswers() {
  const [questions, setQuestions] = useState(data.results);
  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar />
      <QuestionsList questions={questions} />
    </div>
  );
}
