import React from 'react';
import QuestionEntry from './QuestionEntry';

const QuestionsList = ({ questions }) => {

  return (
    <div>
      {
        questions.map(question => (
          <QuestionEntry key={question.question_id} question={question}/>
        ))
      }
    </div>
  );
};

export default QuestionsList;