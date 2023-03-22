import React from 'react';
import AnswerEntry from './AnswerEntry';

export default function QuestionEntry({ question }) {
  return (
    <div>
      <h4>Q: </h4>
      <div>{question?.question_body}</div>
      <div>
        {
            question && question.answers ? Object.keys(question.answers).map((key) => (
              <AnswerEntry key={question.answers[key].id} answer={question.answers[key]} />
            )) : null
        }
      </div>
    </div>
  );
}
