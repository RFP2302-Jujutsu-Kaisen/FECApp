import React from 'react';
import QuestionsAndAnswers from './QAModule/QuestionsAndAnswers';
import RatingsAndReviews from './ratings-and-reviews';

export default function App() {
  return (
    <div>
      <div className="questions-and-answers">
        <QuestionsAndAnswers />
      </div>
      <div>
        <RatingsAndReviews />
      </div>
    </div>
  );
}
