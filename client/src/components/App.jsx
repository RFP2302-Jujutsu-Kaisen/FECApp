import React from 'react';
import QuestionsAndAnswers from './QAModule/QuestionsAndAnswers';
import Overview from './Overview/Overview';
import RatingsAndReviews from './ratings-and-reviews';

export default function App() {
  return (
    <div>
      <h1>FEC Jujutsu Kaisen</h1>
      <Overview />
      <div>
      <div className="questions-and-answers">
          <QuestionsAndAnswers />
        </div>
    </div>
      <div>
        <RatingsAndReviews />
      </div>
    </div>
  );
}
