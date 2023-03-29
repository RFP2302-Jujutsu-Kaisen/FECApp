/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerEntry from './AnswerEntry';
import AddAnswer from './AddAnswer';

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Question = styled.h4`
  font-weight: bold;
  margin: 16px 8px 8px 0px;
  max-width: 65%;
  word-wrap: break-word;
`;

const HelpfulContainer = styled.div`
  font-size: 11px;
  color: gray;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-right: 75px;
`;

const HelpfulLabel = styled.span`
  font-size: 11px;
  color: gray;
  font-weight: 400;
  margin-right: 2px;
`;

const HelpfulButton = styled.button`
  font-size: 11px;
  color: gray;
  font-weight: 400;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const UnderlineSpan = styled.span`
  text-decoration: underline;
`;

const MoreAnswersButton = styled.button`
  font-size: 11px;
  font-weight: bold;
  margin-top: 8px;
  color: #5A5A5A;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #404040;
  }
`;

export default function QuestionEntry({ question, refreshAnswers }) {
  const [numAnswersToShow, setNumAnswersToShow] = useState(2);
  const [helpfulnessCount, setHelpfulnessCount] = useState(question.question_helpfulness);
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);

  const renderAnswers = () => {
    if (question && question.answers) {
      let count = 0;
      const answersArray = Object.values(question.answers);

      const sortedAnswers = answersArray.sort((a, b) => (
        b.helpfulness - a.helpfulness
      ));

      return sortedAnswers.map((answer) => {
        if (count < numAnswersToShow) {
          count += 1;
          return <AnswerEntry key={answer.id} answer={answer} />;
        }
        return null;
      });
    }
    return null;
  };

  const loadMoreAnswers = () => {
    setNumAnswersToShow(numAnswersToShow + 2);
  };

  const incrementHelpfulness = async () => {
    if (!isHelpfulClicked) {
      setHelpfulnessCount(helpfulnessCount + 1);
      setIsHelpfulClicked(true);

      try {
        const res = await axios.put(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/helpful`,
          {},
          {
            headers: {
              Authorization: process.env.AUTH_SECRET,
            },
          },
        );
        console.log(`SUCESS: ${res.status} ${res.data}`);
      } catch (err) {
        console.error('Error updating helpfulness: ', err);
      }
    }
  };

  return (
    <div data-testid="question-entry">
      <QuestionContainer>
        <Question data-testid="question-body">{`Q:    ${question.question_body}`}</Question>
        <HelpfulContainer>
          <HelpfulLabel>Helpful?</HelpfulLabel>
          <HelpfulButton type="button" onClick={incrementHelpfulness} data-testid="helpfulq-button">
            <UnderlineSpan>Yes</UnderlineSpan>
            {`  (${helpfulnessCount}) `}
          </HelpfulButton>
          {' |  '}
          <AddAnswer question={question} refreshAnswers={refreshAnswers} data-testid="add-answer" />
        </HelpfulContainer>
      </QuestionContainer>
      <div data-testid="answer-list">{renderAnswers()}</div>
      <div>
        {numAnswersToShow < Object.keys(question.answers).length && (
        <MoreAnswersButton type="button" onClick={loadMoreAnswers} data-testid="more-answers-button">LOAD MORE ANSWERS</MoreAnswersButton>
        )}
      </div>
    </div>
  );
}
