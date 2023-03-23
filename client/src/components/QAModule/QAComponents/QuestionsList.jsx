import React, { useState } from 'react';
import QuestionEntry from './QuestionEntry';

export default function QuestionsList({ questions }) {
  const [numQsToShow, setNumQsToShow] = useState(4);

  const renderQuestions = () => {
    let count = 0;
    return questions.map((question) => {
      if (count < numQsToShow) {
        count += 1;
        return <QuestionEntry key={question.question_id} question={question} />;
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
          <button type="button" onClick={loadMoreQs}>MORE ANSWERED QUESTIONS</button>
        )}
      </div>
    </div>
  );
}
