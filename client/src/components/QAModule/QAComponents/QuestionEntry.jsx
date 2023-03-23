import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry';

export default function QuestionEntry({ question }) {
  const [numAnswersToShow, setNumAnswersToShow] = useState(2);

  const renderAnswers = () => {
    if (question && question.answers) {
      let count = 0;
      return Object.keys(question.answers).map((key) => {
        if (count < numAnswersToShow) {
          count += 1;
          return <AnswerEntry key={question.answers[key].id} answer={question.answers[key]} />;
        }
        return null;
      });
    }
    return null;
  };

  const loadMoreAnswers = () => {
    setNumAnswersToShow(numAnswersToShow + 2);
  };

  return (
    <div>
      <h4>{`Q: ${question?.question_body}`}</h4>
      <div>{`Helpful? Yes (${question.question_helpfulness}) | Add Answer`}</div>
      <div>{renderAnswers()}</div>
      <div>
        {numAnswersToShow < Object.keys(question.answers).length && (
        <button type="button" onClick={loadMoreAnswers}>LOAD MORE ANSWERS</button>
        )}
      </div>
    </div>
  );
}
