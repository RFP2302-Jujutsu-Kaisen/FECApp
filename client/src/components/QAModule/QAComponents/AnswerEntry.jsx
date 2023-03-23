import React from 'react';

export default function AnswerEntry({ answer }) {
  return (
    <div>
      <div>{`A: ${answer.body}`}</div>
      <div>{`by ${answer.answerer_name}, ${new Date(answer.date).toDateString()} | Helpful? Yes (${answer.helpfulness}) | Report`}</div>
    </div>
  );
}
