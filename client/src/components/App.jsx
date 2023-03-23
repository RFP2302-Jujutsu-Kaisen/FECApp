import React from 'react';
import QuestionsAndAnswers from './QAModule';
import Overview from './Overview/Overview';
import RatingsAndReviews from './ratings-and-reviews';
import { AppContextProvider } from './AppContext';

export default function App() {
  return (
    <div>
      <AppContextProvider>
        <h1>FEC Jujutsu Kaisen</h1>
        <Overview />
        <div className="questions-and-answers">
          <QuestionsAndAnswers />
        </div>
        <div>
          <RatingsAndReviews />
        </div>
      </AppContextProvider>
    </div>
  );
}
