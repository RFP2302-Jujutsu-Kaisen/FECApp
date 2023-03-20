import React from 'react';
import PropTypes from 'prop-types';
import QuestionEntry from './QuestionEntry';

export default function QuestionsList({ questions }) {
  return (
    <div>
      {
        questions.map((question) => (
          <QuestionEntry key={question.question_id} question={question} />
        ))
      }
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
  })).isRequired,
};
