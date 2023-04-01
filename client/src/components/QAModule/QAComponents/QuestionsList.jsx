import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionEntry from './QuestionEntry';

const MoreQuestionsButton = styled.button`
background: transparent;
border: 1px solid;
margin: 10px 0px 10px 0px;
padding: 16px 14px;
font-size: 15px;
cursor: pointer;

&:hover {
  color: #333333;
}
`;
export default function QuestionsList({ questions, refreshAnswers }) {
  const [numQsToShow, setNumQsToShow] = useState(2);

  const renderQuestions = () => {
    let count = 0;
    return questions.map((question) => {
      if (count < numQsToShow) {
        count += 1;
        return (
          <QuestionEntry
            key={question.question_id}
            question={question}
            refreshAnswers={refreshAnswers}
          />
        );
      }
      return null;
    });
  };

  const loadMoreQs = () => {
    setNumQsToShow(numQsToShow + 2);
  };

  return (
    <div>
      <div data-testid="questions-list">{renderQuestions()}</div>
      <div className="more-answered-questions-button">
        {numQsToShow < questions.length && (
          <MoreQuestionsButton type="button" onClick={loadMoreQs}>MORE ANSWERED QUESTIONS</MoreQuestionsButton>
        )}
      </div>
    </div>
  );
}
