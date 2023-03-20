import React from 'react';


const QuestionEntry = ({ question }) => {

  return (
    <div>
      <h6>Q: </h6>
      <div>{question.question_body}</div>
    </div>
  );
};

export default QuestionEntry;